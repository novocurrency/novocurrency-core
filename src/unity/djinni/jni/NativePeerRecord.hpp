// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#pragma once

#include "djinni_support.hpp"
#include "peer_record.hpp"

namespace djinni_generated {

class NativePeerRecord final {
public:
    using CppType = ::PeerRecord;
    using JniType = jobject;

    using Boxed = NativePeerRecord;

    ~NativePeerRecord();

    static CppType toCpp(JNIEnv* jniEnv, JniType j);
    static ::djinni::LocalRef<JniType> fromCpp(JNIEnv* jniEnv, const CppType& c);

private:
    NativePeerRecord();
    friend ::djinni::JniClass<NativePeerRecord>;

    const ::djinni::GlobalRef<jclass> clazz { ::djinni::jniFindClass("com/florin/jniunifiedbackend/PeerRecord") };
    const jmethodID jconstructor { ::djinni::jniGetMethodID(clazz.get(), "<init>", "(JLjava/lang/String;Ljava/lang/String;IIIILjava/lang/String;J)V") };
    const jfieldID field_mId { ::djinni::jniGetFieldID(clazz.get(), "mId", "J") };
    const jfieldID field_mIp { ::djinni::jniGetFieldID(clazz.get(), "mIp", "Ljava/lang/String;") };
    const jfieldID field_mHostname { ::djinni::jniGetFieldID(clazz.get(), "mHostname", "Ljava/lang/String;") };
    const jfieldID field_mStartHeight { ::djinni::jniGetFieldID(clazz.get(), "mStartHeight", "I") };
    const jfieldID field_mSyncedHeight { ::djinni::jniGetFieldID(clazz.get(), "mSyncedHeight", "I") };
    const jfieldID field_mCommonHeight { ::djinni::jniGetFieldID(clazz.get(), "mCommonHeight", "I") };
    const jfieldID field_mLatency { ::djinni::jniGetFieldID(clazz.get(), "mLatency", "I") };
    const jfieldID field_mUserAgent { ::djinni::jniGetFieldID(clazz.get(), "mUserAgent", "Ljava/lang/String;") };
    const jfieldID field_mProtocol { ::djinni::jniGetFieldID(clazz.get(), "mProtocol", "J") };
};

}  // namespace djinni_generated
