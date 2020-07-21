// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#pragma once

#include "djinni_support.hpp"
#include "i_rpc_listener.hpp"

namespace djinni_generated {

class NativeIRpcListener final : ::djinni::JniInterface<::IRpcListener, NativeIRpcListener> {
public:
    using CppType = std::shared_ptr<::IRpcListener>;
    using CppOptType = std::shared_ptr<::IRpcListener>;
    using JniType = jobject;

    using Boxed = NativeIRpcListener;

    ~NativeIRpcListener();

    static CppType toCpp(JNIEnv* jniEnv, JniType j) { return ::djinni::JniClass<NativeIRpcListener>::get()._fromJava(jniEnv, j); }
    static ::djinni::LocalRef<JniType> fromCppOpt(JNIEnv* jniEnv, const CppOptType& c) { return {jniEnv, ::djinni::JniClass<NativeIRpcListener>::get()._toJava(jniEnv, c)}; }
    static ::djinni::LocalRef<JniType> fromCpp(JNIEnv* jniEnv, const CppType& c) { return fromCppOpt(jniEnv, c); }

private:
    NativeIRpcListener();
    friend ::djinni::JniClass<NativeIRpcListener>;
    friend ::djinni::JniInterface<::IRpcListener, NativeIRpcListener>;

    class JavaProxy final : ::djinni::JavaProxyHandle<JavaProxy>, public ::IRpcListener
    {
    public:
        JavaProxy(JniType j);
        ~JavaProxy();

        void onSuccess(const std::string & filteredCommand, const std::string & result) override;
        void onError(const std::string & errorMessage) override;

    private:
        friend ::djinni::JniInterface<::IRpcListener, ::djinni_generated::NativeIRpcListener>;
    };

    const ::djinni::GlobalRef<jclass> clazz { ::djinni::jniFindClass("com/novo/jniunifiedbackend/IRpcListener") };
    const jmethodID method_onSuccess { ::djinni::jniGetMethodID(clazz.get(), "onSuccess", "(Ljava/lang/String;Ljava/lang/String;)V") };
    const jmethodID method_onError { ::djinni::jniGetMethodID(clazz.get(), "onError", "(Ljava/lang/String;)V") };
};

}  // namespace djinni_generated
