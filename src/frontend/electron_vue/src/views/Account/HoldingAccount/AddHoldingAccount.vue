<template>
  <div class="add-holding-account">
    <portal to="header-slot">
      <main-header :title="$t('add_holding_account.title')"></main-header>
    </portal>

    <section class="content">
      <section class="step-1" v-if="current === 1">
        <novo-form-field :title="$t('add_holding_account.funding_account')">
          <div class="selectfunding">
            <select v-model="fundingAccount">
              <option
                v-for="account in fundingAccounts"
                :key="account.UUID"
                :value="account"
                >{{ account.label }}</option
              >
            </select>
            <span class="selectarrow">
              <fa-icon :icon="['fal', 'chevron-down']" />
            </span>
          </div>
        </novo-form-field>
        <novo-form-field :title="$t('common.amount')">
          <input
            type="number"
            min="50"
            v-model="amount"
            :max="maxAmountForAccount"
            :class="amountClass"
          />
        </novo-form-field>
        <novo-form-field :title="$t('add_holding_account.lock_for')">
          <div class="flex-row">
            <vue-slider
              :min="2"
              :max="36"
              class="lock-time-slider"
              :class="lockTimeClass"
              :value="lockTimeInMonths"
              v-model="lockTimeInMonths"
            />
            <div class="lock-time-info">
              {{ lockTimeInMonths }} {{ $t("common.months") }}
            </div>
          </div>
        </novo-form-field>

        <novo-form-field
          :title="$t('add_holding_account.estimated_earnings')"
          v-if="isWeightSufficient"
        >
          <div class="flex-row">
            <div class="earnings">{{ $t("add_holding_account.daily") }}</div>
            <div class="flex-1 align-right">
              {{
                (
                  this.estimatedWeight.estimated_daily_earnings / 100000000
                ).toFixed(2)
              }}
            </div>
          </div>
          <div class="flex-row">
            <div class="earnings">{{ $t("add_holding_account.overall") }}</div>
            <div class="flex-1 align-right">
              {{
                (
                  this.estimatedWeight.estimated_lifetime_earnings / 100000000
                ).toFixed(2)
              }}
            </div>
          </div>
        </novo-form-field>
      </section>
      <section class="step-2" v-else>
        <novo-form-field :title="$t('common.account_name')">
          <input
            type="text"
            v-model="accountName"
            maxlength="30"
            ref="accountName"
          />
        </novo-form-field>
        <novo-form-field
          :title="$t('common.password')"
          v-if="walletPassword === null"
        >
          <input
            v-model="password"
            type="password"
            :class="passwordClass"
            @keydown="onPasswordKeydown"
          />
        </novo-form-field>
      </section>
    </section>

    <portal to="footer-slot">
      <novo-button-section>
        <template v-slot:left>
          <button @click="current--" v-if="current !== 1">
            {{ $t("buttons.previous") }}
          </button>
        </template>
        <button
          @click="nextStep"
          :disabled="!isWeightSufficient"
          v-if="current === 1"
        >
          {{ $t("buttons.next") }}
        </button>
        <button
          @click="createAndFundHoldingAccount"
          :disabled="disableLockButton"
          v-else
        >
          {{ $t("buttons.lock") }}
        </button>
      </novo-button-section>
    </portal>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import UnityBackend from "../../../unity/UnityBackend";

export default {
  name: "AddHoldingAccount",
  data() {
    return {
      current: 1,
      networkLimits: null,
      accountName: "",
      fundingAccount: null,
      amount: 50,
      lockTimeInMonths: 36,
      password: "",
      isPasswordInvalid: false
    };
  },
  computed: {
    ...mapState(["walletPassword"]),
    ...mapGetters(["accounts"]),
    computedPassword() {
      return this.walletPassword ? this.walletPassword : this.password || "";
    },
    amountClass() {
      return this.amount <
        parseInt(this.networkLimits.minimum_witness_amount) ||
        this.amount > this.maxAmountForAccount
        ? "error"
        : "";
    },
    fundingAccounts() {
      return this.accounts.filter(
        x =>
          x.state === "Normal" &&
          ["Desktop", "Mining"].indexOf(x.type) !== -1 &&
          x.balance >= 50
      );
    },
    maxAmountForAccount() {
      return this.fundingAccount ? Math.floor(this.fundingAccount.balance) : 0;
    },
    lockTimeInBlocks() {
      return (
        this.lockTimeInMonths *
        (this.networkLimits.maximum_lock_period_blocks / 36)
      );
    },
    isWeightSufficient() {
      return (
        this.estimatedWeight.weight >= this.networkLimits.minimum_witness_weight
      );
    },
    lockTimeClass() {
      return this.isWeightSufficient ? "" : "insufficient";
    },
    estimatedWeight() {
      let estimation = UnityBackend.GetEstimatedWeight(
        this.amount * 100000000,
        this.lockTimeInBlocks
      );

      return estimation;
    },
    passwordClass() {
      return this.isPasswordInvalid ? "error" : "";
    },
    hasErrors() {
      return this.isPasswordInvalid;
    },
    disableLockButton() {
      if (this.accountName.trim().length === 0) return true;
      if (this.computedPassword.trim().length === 0) return true;
      return false;
    }
  },
  created() {
    this.networkLimits = UnityBackend.GetNetworkLimits();
  },
  mounted() {
    if (this.fundingAccounts.length) {
      this.fundingAccount = this.fundingAccounts[0];
    }
  },
  methods: {
    onPasswordKeydown() {
      this.isPasswordInvalid = false;
    },
    nextStep() {
      this.current++;
      this.$nextTick(() => {
        this.$refs.accountName.focus();
      });
    },
    createAndFundHoldingAccount() {
      // wallet needs to be unlocked to make a payment
      if (UnityBackend.UnlockWallet(this.computedPassword) === false) {
        this.isPasswordInvalid = true;
      }

      if (this.hasErrors) return;

      UnityBackend.UnlockWallet(this.computedPassword);
      let accountId = UnityBackend.CreateAccount(this.accountName, "Witness");

      let result = UnityBackend.FundWitnessAccount(
        this.fundingAccount.UUID,
        accountId,
        this.amount * 100000000,
        this.lockTimeInBlocks
      );

      if (result.status === "success") {
        this.$router.push({ name: "account", params: { id: accountId } });
      } else {
        console.log(result);
        UnityBackend.DeleteAccount(accountId); // something went wrong, so delete the account
      }

      UnityBackend.LockWallet();
    }
  }
};
</script>

<style lang="less" scoped>
.selectfunding {
  position: relative;
  float: left;
  width: 100%;
}
.selectfunding select {
  background-color: rgba(255, 255, 255, 0);
  z-index: 999;
}
.selectarrow {
  position: absolute;
  top: 0;
  right: 10px;
  line-height: 40px;
  font-size: 12px;
  z-index: -1;
}
.earnings {
  line-height: 1.2em;
}
.lock-time-slider {
  width: calc(100% - 100px) !important;
  display: inline-block;
}
.lock-time-info {
  text-align: right;
  line-height: 18px;
  flex: 1;
}
</style>