// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni

/** This interface will be implemented in C++ and can be called from any language. */
declare class NJSUnifiedBackend
{
    /** Get the build information (ie. commit id and status) */
    static declare function BuildInfo(): string;
    /**
     * Start the library
     * extraArgs - any additional commandline arguments as could normally be passed to the daemon binary
     * NB!!! This call blocks until the library is terminated, it is the callers responsibility to place it inside a thread or similar.
     * If you are in an environment where this is not possible (node.js for example use InitUnityLibThreaded instead which places it in a thread on your behalf)
     */
    static declare function InitUnityLib(data_dir: string, staticFilterPath: string, staticFilterOffset: number, staticFilterLength: number, testnet: boolean, spvMode: boolean, signalHandler: NJSUnifiedFrontend, extraArgs: string): number;
    /** Threaded implementation of InitUnityLib */
    static declare function InitUnityLibThreaded(data_dir: string, staticFilterPath: string, staticFilterOffset: number, staticFilterLength: number, testnet: boolean, spvMode: boolean, signalHandler: NJSUnifiedFrontend, extraArgs: string);
    /** Create the wallet - this should only be called after receiving a `notifyInit...` signal from InitUnityLib */
    static declare function InitWalletFromRecoveryPhrase(phrase: string, password: string): boolean;
    /** Continue creating wallet that was previously erased using EraseWalletSeedsAndAccounts */
    static declare function ContinueWalletFromRecoveryPhrase(phrase: string, password: string): boolean;
    /** Create the wallet - this should only be called after receiving a `notifyInit...` signal from InitUnityLib */
    static declare function InitWalletLinkedFromURI(linked_uri: string, password: string): boolean;
    /** Continue creating wallet that was previously erased using EraseWalletSeedsAndAccounts */
    static declare function ContinueWalletLinkedFromURI(linked_uri: string, password: string): boolean;
    /** Create the wallet - this should only be called after receiving a `notifyInit...` signal from InitUnityLib */
    static declare function InitWalletFromAndroidLegacyProtoWallet(wallet_file: string, old_password: string, new_password: string): boolean;
    /** Check if a file is a valid legacy proto wallet */
    static declare function isValidAndroidLegacyProtoWallet(wallet_file: string, old_password: string): LegacyWalletResult;
    /** Check link URI for validity */
    static declare function IsValidLinkURI(phrase: string): boolean;
    /** Replace the existing wallet accounts with a new one from a linked URI - only after first emptying the wallet. */
    static declare function ReplaceWalletLinkedFromURI(linked_uri: string, password: string): boolean;
    /**
     * Erase the seeds and accounts of a wallet leaving an empty wallet (with things like the address book intact)
     * After calling this it will be necessary to create a new linked account or recovery phrase account again.
     * NB! This will empty a wallet regardless of whether it has funds in it or not and makes no provisions to check for this - it is the callers responsibility to ensure that erasing the wallet is safe to do in this regard.
     */
    static declare function EraseWalletSeedsAndAccounts(): boolean;
    /**
     * Check recovery phrase for (syntactic) validity
     * Considered valid if the contained mnemonic is valid and the birth-number is either absent or passes Base-10 checksum
     */
    static declare function IsValidRecoveryPhrase(phrase: string): boolean;
    /** Generate a new recovery mnemonic */
    static declare function GenerateRecoveryMnemonic(): string;
    static declare function GenerateGenesisKeys(): string;
    /** Compute recovery phrase with birth number */
    static declare function ComposeRecoveryPhrase(mnemonic: string, birthTime: number): string;
    /** Stop the library */
    static declare function TerminateUnityLib();
    /** Generate a QR code for a string, QR code will be as close to width_hint as possible when applying simple scaling. */
    static declare function QRImageFromString(qr_string: string, width_hint: number): QrCodeRecord;
    /** Get a receive address from the wallet */
    static declare function GetReceiveAddress(): string;
    /** Get the recovery phrase for the wallet */
    static declare function GetRecoveryPhrase(): string;
    /** Check if the wallet is using a mnemonic seed ie. recovery phrase (else it is a linked wallet) */
    static declare function IsMnemonicWallet(): boolean;
    /** Check if the phrase mnemonic is a correct one for the wallet (phrase can be with or without birth time) */
    static declare function IsMnemonicCorrect(phrase: string): boolean;
    /**
     * Get the 'dictionary' of valid words that a recovery phrase can be composed of
     * NB! Not all combinations of these words are valid
     * Do not use this to generate/compose your own phrases - always use 'GenerateRecoveryMnemonic' for this
     * This function should only be used for input validation/auto-completion
     */
    static declare function GetMnemonicDictionary(): Array<string>;
    /** Unlock wallet */
    static declare function UnlockWallet(password: string): boolean;
    /** Forcefully lock wallet again */
    static declare function LockWallet(): boolean;
    /** Change the wallet password */
    static declare function ChangePassword(oldPassword: string, newPassword: string): boolean;
    /** Check if the wallet has any transactions that are still pending confirmation, to be used to determine if e.g. it is safe to perform a link or whether we should wait. */
    static declare function HaveUnconfirmedFunds(): boolean;
    /** Check current wallet balance (including unconfirmed funds) */
    static declare function GetBalance(): number;
    /** Rescan blockchain for wallet transactions */
    static declare function DoRescan();
    /** Check if text/address is something we are capable of sending money too */
    static declare function IsValidRecipient(request: UriRecord): UriRecipient;
    /** Compute the fee required to send amount to given recipient */
    static declare function feeForRecipient(request: UriRecipient): number;
    /** Attempt to pay a recipient, will throw on failure with description */
    static declare function performPaymentToRecipient(request: UriRecipient, substract_fee: boolean): PaymentResultStatus;
    /** Get list of all transactions wallet has been involved in */
    static declare function getTransactionHistory(): Array<TransactionRecord>;
    /**
     * Get the wallet transaction for the hash
     * Will throw if not found
     */
    static declare function getTransaction(txHash: string): TransactionRecord;
    /** resubmit a transaction to the network, returns the raw hex of the transaction as a string or empty on fail */
    static declare function resendTransaction(txHash: string): string;
    /** Get list of wallet mutations */
    static declare function getMutationHistory(): Array<MutationRecord>;
    /** Get list of all address book entries */
    static declare function getAddressBookRecords(): Array<AddressRecord>;
    /** Add a record to the address book */
    static declare function addAddressBookRecord(address: AddressRecord);
    /** Delete a record from the address book */
    static declare function deleteAddressBookRecord(address: AddressRecord);
    /** Interim persist and prune of state. Use at key moments like app backgrounding. */
    static declare function PersistAndPruneForSPV();
    /**
     * Reset progress notification. In cases where there has been no progress for a long time, but the process
     * is still running the progress can be reset and will represent work to be done from this reset onwards.
     * For example when the process is in the background on iOS for a long long time (but has not been terminated
     * by the OS) this might make more sense then to continue the progress from where it was a day or more ago.
     */
    static declare function ResetUnifiedProgress();
    /** Get info of last blocks (at most 32) in SPV chain */
    static declare function getLastSPVBlockInfos(): Array<BlockInfoRecord>;
    static declare function getUnifiedProgress(): number;
    static declare function getMonitoringStats(): MonitorRecord;
    static declare function RegisterMonitorListener(listener: NJSMonitorListener);
    static declare function UnregisterMonitorListener(listener: NJSMonitorListener);
}
/** Monitoring events */
declare class NJSMonitorListener
{
    declare function onPartialChain(height: number, probable_height: number, offset: number);
    declare function onPruned(height: number);
    declare function onProcessedSPVBlocks(height: number);
}
/** Interface to receive events from the core */
declare class NJSUnifiedFrontend
{
    /**
     * Fraction of work done since session start or last progress reset [0..1]
     * Unified progress combines connection state, header and block sync
     */
    declare function notifyUnifiedProgress(progress: number);
    declare function notifyBalanceChange(new_balance: BalanceRecord);
    /**
     * Notification of new mutations.
     * If self_committed it is due to a call to performPaymentToRecipient, else it is because of a transaction
     * reached us in another way. In general this will be because we received funds from someone, hower there are
     * also cases where funds is send from our wallet while !self_committed (for example by a linked desktop wallet
     * or another wallet instance using the same keys as ours).
     */
    declare function notifyNewMutation(mutation: MutationRecord, self_committed: boolean);
    declare function notifyUpdatedTransaction(transaction: TransactionRecord);
    declare function notifyInitWithExistingWallet();
    declare function notifyInitWithoutExistingWallet();
    declare function notifyShutdown();
    declare function notifyCoreReady();
    declare function logPrint(str: string);
}
/** C++ interface to execute RPC commands */
declare class NJSIRpcController
{
    static declare function execute(rpcCommandLine: string, resultListener: NJSIRpcListener);
    static declare function getAutocompleteList(): Array<string>;
}
/**
 * Interface to handle result of RPC commands
 * Calls either onSuccess or onError depending on whether command suceedes or fails
 */
declare class NJSIRpcListener
{
    /**
     * Returns the result and a filtered version of the command with sensitive information like passwords removed
     * Any kind of 'command history' functionality should store this filtered command and not the original command
     */
    declare function onSuccess(filteredCommand: string, result: string);
    /** Returns an error message which might be a plain string or JSON depending on the type of error */
    declare function onError(errorMessage: string);
}
/** C++ interface to control networking related aspects of the software */
declare class NJSIP2pNetworkController
{
    /** Register listener to be notified of networking events */
    static declare function setListener(networklistener: NJSIP2pNetworkListener);
    /** Turn p2p networking off */
    static declare function disableNetwork();
    /** Turn p2p networking on */
    static declare function enableNetwork();
    /** Get connected peer info */
    static declare function getPeerInfo(): Array<PeerRecord>;
}
/** Interface to receive updates about network status */
declare class NJSIP2pNetworkListener
{
    /** Notify that p2p networking has been enabled */
    declare function onNetworkEnabled();
    /** Notify that p2p networking has been disabled */
    declare function onNetworkDisabled();
    /** Notify that number of peers has changed */
    declare function onConnectionCountChanged(numConnections: number);
    /** Notify that amount of data sent/received has changed */
    declare function onBytesChanged(totalRecv: number, totalSent: number);
}
/** C++ interface to control accounts */
declare class NJSIAccountsController
{
    /** Register listener to be notified of account related events */
    static declare function setListener(accountslistener: NJSIAccountsListener);
    /** Set the currently active account */
    static declare function setActiveAccount(accountUUID: string): boolean;
    /** Create an account, possible types are (HD/Mobile/Witness/Mining/Legacy). Returns the UUID of the new account */
    static declare function createAccount(accountName: string, accountType: string): string;
    /** Rename an account */
    static declare function renameAccount(accountUUID: string, newAccountName: string): boolean;
    /** Get a URI that will enable 'linking' of this account in another wallet (for e.g. mobile wallet linking) for an account. Empty on failiure.  */
    static declare function getAccountLinkURI(accountUUID: string): string;
    /** Get a URI that will enable creation of a "witness only" account in another wallet that can witness on behalf of this account */
    static declare function getWitnessKeyURI(accountUUID: string): string;
    /** Delete an account, account remains available in background but is hidden from user */
    static declare function deleteAccount(accountUUID: string): boolean;
    /**
     * Purge an account, account is permenently removed from wallet (but may still reappear in some instances if it is an HD account and user recovers from phrase in future)
     * If it is a Legacy or imported witness key or similar account then it will be gone forever
     * Generally prefer 'deleteAccount' and use this with caution
     */
    static declare function purgeAccount(accountUUID: string): boolean;
    /** List all currently visible accounts in the wallet */
    static declare function listAccounts(): Array<AccountRecord>;
}
/** Interface to receive updates about accounts */
declare class NJSIAccountsListener
{
    /** Notify that the active account has changed */
    declare function onActiveAccountChanged(accountUUID: string);
    /** Notify that the active account name has changed */
    declare function onActiveAccountNameChanged(newAccountName: string);
    /** Notify that an account name has changed */
    declare function onAccountNameChanged(accountUUID: string, newAccountName: string);
    /** Notify that a new account has been added */
    declare function onAccountAdded(accountUUID: string, accountName: string);
    /** Notify that an account has been deleted */
    declare function onAccountDeleted(accountUUID: string);
}
