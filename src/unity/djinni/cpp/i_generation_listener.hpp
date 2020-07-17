// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#pragma once

#include <string>

/** Interface to receive updates about block generation */
#ifdef DJINNI_NODEJS
#include "NJSIGenerationListener.hpp" 
#define IGenerationListener NJSIGenerationListener
#else

class IGenerationListener {
public:
    virtual ~IGenerationListener() {}

    /** Signal that block generation has started */
    virtual void onGenerationStarted() = 0;

    /** Signal that block generation has stopped */
    virtual void onGenerationStopped() = 0;

    /** Periodically signal latest block generation statistics */
    virtual void onStatsUpdated(double hashesPerSecond, const std::string & hashesPerSecondUnit, double rollingHashesPerSecond, const std::string & rollingHashesPerSecondUnit, double bestHashesPerSecond, const std::string & bestHashesPerSecondUnit, double arenaSetupTime) = 0;
};
#endif