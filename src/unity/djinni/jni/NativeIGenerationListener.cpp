// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#include "NativeIGenerationListener.hpp"  // my header
#include "Marshal.hpp"

namespace djinni_generated {

NativeIGenerationListener::NativeIGenerationListener() : ::djinni::JniInterface<::IGenerationListener, NativeIGenerationListener>() {}

NativeIGenerationListener::~NativeIGenerationListener() = default;

NativeIGenerationListener::JavaProxy::JavaProxy(JniType j) : Handle(::djinni::jniGetThreadEnv(), j) { }

NativeIGenerationListener::JavaProxy::~JavaProxy() = default;

void NativeIGenerationListener::JavaProxy::onGenerationStarted() {
    auto jniEnv = ::djinni::jniGetThreadEnv();
    ::djinni::JniLocalScope jscope(jniEnv, 10);
    const auto& data = ::djinni::JniClass<::djinni_generated::NativeIGenerationListener>::get();
    jniEnv->CallVoidMethod(Handle::get().get(), data.method_onGenerationStarted);
    ::djinni::jniExceptionCheck(jniEnv);
}
void NativeIGenerationListener::JavaProxy::onGenerationStopped() {
    auto jniEnv = ::djinni::jniGetThreadEnv();
    ::djinni::JniLocalScope jscope(jniEnv, 10);
    const auto& data = ::djinni::JniClass<::djinni_generated::NativeIGenerationListener>::get();
    jniEnv->CallVoidMethod(Handle::get().get(), data.method_onGenerationStopped);
    ::djinni::jniExceptionCheck(jniEnv);
}
void NativeIGenerationListener::JavaProxy::onStatsUpdated(double c_hashesPerSecond, const std::string & c_hashesPerSecondUnit, double c_rollingHashesPerSecond, const std::string & c_rollingHashesPerSecondUnit, double c_bestHashesPerSecond, const std::string & c_bestHashesPerSecondUnit, double c_arenaSetupTime) {
    auto jniEnv = ::djinni::jniGetThreadEnv();
    ::djinni::JniLocalScope jscope(jniEnv, 10);
    const auto& data = ::djinni::JniClass<::djinni_generated::NativeIGenerationListener>::get();
    jniEnv->CallVoidMethod(Handle::get().get(), data.method_onStatsUpdated,
                           ::djinni::get(::djinni::F64::fromCpp(jniEnv, c_hashesPerSecond)),
                           ::djinni::get(::djinni::String::fromCpp(jniEnv, c_hashesPerSecondUnit)),
                           ::djinni::get(::djinni::F64::fromCpp(jniEnv, c_rollingHashesPerSecond)),
                           ::djinni::get(::djinni::String::fromCpp(jniEnv, c_rollingHashesPerSecondUnit)),
                           ::djinni::get(::djinni::F64::fromCpp(jniEnv, c_bestHashesPerSecond)),
                           ::djinni::get(::djinni::String::fromCpp(jniEnv, c_bestHashesPerSecondUnit)),
                           ::djinni::get(::djinni::F64::fromCpp(jniEnv, c_arenaSetupTime)));
    ::djinni::jniExceptionCheck(jniEnv);
}

}  // namespace djinni_generated
