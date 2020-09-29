// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

package com.novo.jniunifiedbackend;

public final class WitnessAccountStatisticsRecord implements android.os.Parcelable {


    /*package*/ final String mRequestStatus;

    /*package*/ final String mAccountStatus;

    /*package*/ final long mAccountWeight;

    /*package*/ final long mAccountParts;

    /*package*/ final long mAccountAmountLocked;

    /*package*/ final long mAccountWeightAtCreation;

    /*package*/ final long mNetworkTipTotalWeight;

    /*package*/ final long mNetworkTotalWeightAtAccountCreationTime;

    /*package*/ final long mAccountInitialLockPeriodInBlocks;

    /*package*/ final long mAccountRemainingLockPeriodInBlocks;

    /*package*/ final long mAccountExpectedWitnessPeriodInBlocks;

    /*package*/ final long mAccountEstimatedWitnessPeriodInBlocks;

    /*package*/ final long mAccountInitialLockCreationBlockHeight;

    /*package*/ final boolean mAccountIsCompounding;

    public WitnessAccountStatisticsRecord(
            String requestStatus,
            String accountStatus,
            long accountWeight,
            long accountParts,
            long accountAmountLocked,
            long accountWeightAtCreation,
            long networkTipTotalWeight,
            long networkTotalWeightAtAccountCreationTime,
            long accountInitialLockPeriodInBlocks,
            long accountRemainingLockPeriodInBlocks,
            long accountExpectedWitnessPeriodInBlocks,
            long accountEstimatedWitnessPeriodInBlocks,
            long accountInitialLockCreationBlockHeight,
            boolean accountIsCompounding) {
        this.mRequestStatus = requestStatus;
        this.mAccountStatus = accountStatus;
        this.mAccountWeight = accountWeight;
        this.mAccountParts = accountParts;
        this.mAccountAmountLocked = accountAmountLocked;
        this.mAccountWeightAtCreation = accountWeightAtCreation;
        this.mNetworkTipTotalWeight = networkTipTotalWeight;
        this.mNetworkTotalWeightAtAccountCreationTime = networkTotalWeightAtAccountCreationTime;
        this.mAccountInitialLockPeriodInBlocks = accountInitialLockPeriodInBlocks;
        this.mAccountRemainingLockPeriodInBlocks = accountRemainingLockPeriodInBlocks;
        this.mAccountExpectedWitnessPeriodInBlocks = accountExpectedWitnessPeriodInBlocks;
        this.mAccountEstimatedWitnessPeriodInBlocks = accountEstimatedWitnessPeriodInBlocks;
        this.mAccountInitialLockCreationBlockHeight = accountInitialLockCreationBlockHeight;
        this.mAccountIsCompounding = accountIsCompounding;
    }

    /** Success if request succeeded, otherwise an error message */
    public String getRequestStatus() {
        return mRequestStatus;
    }

    /** Current state of the witness account, one of: "empty", "empty_with_remainder", "pending", "witnessing", "ended", "expired", "emptying" */
    public String getAccountStatus() {
        return mAccountStatus;
    }

    /** Account weight */
    public long getAccountWeight() {
        return mAccountWeight;
    }

    /** How many parts the account weight is split up into */
    public long getAccountParts() {
        return mAccountParts;
    }

    /** Account amount locked */
    public long getAccountAmountLocked() {
        return mAccountAmountLocked;
    }

    /** Account weight when it was created */
    public long getAccountWeightAtCreation() {
        return mAccountWeightAtCreation;
    }

    /** Current network weight */
    public long getNetworkTipTotalWeight() {
        return mNetworkTipTotalWeight;
    }

    /** Network weight when account was created */
    public long getNetworkTotalWeightAtAccountCreationTime() {
        return mNetworkTotalWeightAtAccountCreationTime;
    }

    /** Account total lock period in blocks (from creation block) */
    public long getAccountInitialLockPeriodInBlocks() {
        return mAccountInitialLockPeriodInBlocks;
    }

    /** Account remaining lock period in blocks (from chain tip) */
    public long getAccountRemainingLockPeriodInBlocks() {
        return mAccountRemainingLockPeriodInBlocks;
    }

    /** How often the account is "expected" by the network to witness in order to not be kicked off */
    public long getAccountExpectedWitnessPeriodInBlocks() {
        return mAccountExpectedWitnessPeriodInBlocks;
    }

    /** How often the account is estimated to witness */
    public long getAccountEstimatedWitnessPeriodInBlocks() {
        return mAccountEstimatedWitnessPeriodInBlocks;
    }

    /** Height at which the account lock first entered the chain */
    public long getAccountInitialLockCreationBlockHeight() {
        return mAccountInitialLockCreationBlockHeight;
    }

    /** Is this account currently set to compound */
    public boolean getAccountIsCompounding() {
        return mAccountIsCompounding;
    }

    @Override
    public String toString() {
        return "WitnessAccountStatisticsRecord{" +
                "mRequestStatus=" + mRequestStatus +
                "," + "mAccountStatus=" + mAccountStatus +
                "," + "mAccountWeight=" + mAccountWeight +
                "," + "mAccountParts=" + mAccountParts +
                "," + "mAccountAmountLocked=" + mAccountAmountLocked +
                "," + "mAccountWeightAtCreation=" + mAccountWeightAtCreation +
                "," + "mNetworkTipTotalWeight=" + mNetworkTipTotalWeight +
                "," + "mNetworkTotalWeightAtAccountCreationTime=" + mNetworkTotalWeightAtAccountCreationTime +
                "," + "mAccountInitialLockPeriodInBlocks=" + mAccountInitialLockPeriodInBlocks +
                "," + "mAccountRemainingLockPeriodInBlocks=" + mAccountRemainingLockPeriodInBlocks +
                "," + "mAccountExpectedWitnessPeriodInBlocks=" + mAccountExpectedWitnessPeriodInBlocks +
                "," + "mAccountEstimatedWitnessPeriodInBlocks=" + mAccountEstimatedWitnessPeriodInBlocks +
                "," + "mAccountInitialLockCreationBlockHeight=" + mAccountInitialLockCreationBlockHeight +
                "," + "mAccountIsCompounding=" + mAccountIsCompounding +
        "}";
    }


    public static final android.os.Parcelable.Creator<WitnessAccountStatisticsRecord> CREATOR
        = new android.os.Parcelable.Creator<WitnessAccountStatisticsRecord>() {
        @Override
        public WitnessAccountStatisticsRecord createFromParcel(android.os.Parcel in) {
            return new WitnessAccountStatisticsRecord(in);
        }

        @Override
        public WitnessAccountStatisticsRecord[] newArray(int size) {
            return new WitnessAccountStatisticsRecord[size];
        }
    };

    public WitnessAccountStatisticsRecord(android.os.Parcel in) {
        this.mRequestStatus = in.readString();
        this.mAccountStatus = in.readString();
        this.mAccountWeight = in.readLong();
        this.mAccountParts = in.readLong();
        this.mAccountAmountLocked = in.readLong();
        this.mAccountWeightAtCreation = in.readLong();
        this.mNetworkTipTotalWeight = in.readLong();
        this.mNetworkTotalWeightAtAccountCreationTime = in.readLong();
        this.mAccountInitialLockPeriodInBlocks = in.readLong();
        this.mAccountRemainingLockPeriodInBlocks = in.readLong();
        this.mAccountExpectedWitnessPeriodInBlocks = in.readLong();
        this.mAccountEstimatedWitnessPeriodInBlocks = in.readLong();
        this.mAccountInitialLockCreationBlockHeight = in.readLong();
        this.mAccountIsCompounding = in.readByte() != 0;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(android.os.Parcel out, int flags) {
        out.writeString(this.mRequestStatus);
        out.writeString(this.mAccountStatus);
        out.writeLong(this.mAccountWeight);
        out.writeLong(this.mAccountParts);
        out.writeLong(this.mAccountAmountLocked);
        out.writeLong(this.mAccountWeightAtCreation);
        out.writeLong(this.mNetworkTipTotalWeight);
        out.writeLong(this.mNetworkTotalWeightAtAccountCreationTime);
        out.writeLong(this.mAccountInitialLockPeriodInBlocks);
        out.writeLong(this.mAccountRemainingLockPeriodInBlocks);
        out.writeLong(this.mAccountExpectedWitnessPeriodInBlocks);
        out.writeLong(this.mAccountEstimatedWitnessPeriodInBlocks);
        out.writeLong(this.mAccountInitialLockCreationBlockHeight);
        out.writeByte(this.mAccountIsCompounding ? (byte)1 : 0);
    }

}
