// Copyright (c) 2017 The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef WALLET_FEEBUMPER_H
#define WALLET_FEEBUMPER_H

#include <primitives/transaction.h>

class CWallet;
class CWalletTx;
class uint256;

enum class BumpFeeResult
{
    OK,
    INVALID_ADDRESS_OR_KEY,
    INVALID_REQUEST,
    INVALID_PARAMETER,
    WALLET_ERROR,
    MISC_ERROR,
};

extern int64_t CalculateMaximumSignedTxSize(const CTransaction &tx, const CWallet *pWallet);

class CFeeBumper
{
public:
    CFeeBumper(const CWallet *pWalletIn, const uint256 txidIn, int newConfirmTarget, bool ignoreGlobalPayTxFee, CAmount totalFee, bool newTxReplaceable);
    BumpFeeResult getResult() const { return currentResult; }
    const std::vector<std::string>& getErrors() const { return vErrors; }
    CAmount getOldFee() const { return nOldFee; }
    CAmount getNewFee() const { return nNewFee; }
    uint256 getBumpedTxId() const { return bumpedTxid; }

    /* signs the new transaction,
     * returns false if the tx couldn't be found or if it was
     * impossible to create the signature(s)
     */
    bool signTransaction(CWallet *pWallet);

    /* commits the fee bump,
     * returns true, in case of CWallet::CommitTransaction was successful
     * but, eventually sets vErrors if the tx could not be added to the mempool (will try later)
     * or if the old transaction could not be marked as replaced
     */
    bool commit(CWallet *pWalletNonConst);

private:
    bool preconditionChecks(const CWallet *pWallet, const CWalletTx& wtx);

    const uint256 txid;
    uint256 bumpedTxid;
    CAmount nOldFee;
    CAmount nNewFee;
    CMutableTransaction mtx;
    std::vector<std::string> vErrors;
    BumpFeeResult currentResult;
};

#endif
