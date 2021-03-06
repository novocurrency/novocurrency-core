// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#pragma once

#include <cstdint>
#include <utility>

struct WitnessEstimateInfoRecord final {
    /** Current network weight */
    int64_t network_weight;
    /** Weight of resulting witness account */
    int64_t weight;
    /** How many parts this weight will be split into */
    int64_t parts;
    /** The per block probability of resulting account witnesing */
    double estimated_witness_probability;
    /** The estimated number of blocks the resulting account should find per day */
    double estimated_blocks_per_day;
    /** The estimated earnings the account should make per day */
    int64_t estimated_daily_earnings;
    /** The estimated earnings the account should make over its entire lifetime */
    int64_t estimated_lifetime_earnings;

    WitnessEstimateInfoRecord(int64_t network_weight_,
                              int64_t weight_,
                              int64_t parts_,
                              double estimated_witness_probability_,
                              double estimated_blocks_per_day_,
                              int64_t estimated_daily_earnings_,
                              int64_t estimated_lifetime_earnings_)
    : network_weight(std::move(network_weight_))
    , weight(std::move(weight_))
    , parts(std::move(parts_))
    , estimated_witness_probability(std::move(estimated_witness_probability_))
    , estimated_blocks_per_day(std::move(estimated_blocks_per_day_))
    , estimated_daily_earnings(std::move(estimated_daily_earnings_))
    , estimated_lifetime_earnings(std::move(estimated_lifetime_earnings_))
    {}
};
