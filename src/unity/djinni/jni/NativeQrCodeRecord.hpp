// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#pragma once

#include "djinni_support.hpp"
#include "qr_code_record.hpp"

namespace djinni_generated {

class NativeQrCodeRecord final {
public:
    using CppType = ::QrCodeRecord;
    using JniType = jobject;

    using Boxed = NativeQrCodeRecord;

    ~NativeQrCodeRecord();

    static CppType toCpp(JNIEnv* jniEnv, JniType j);
    static ::djinni::LocalRef<JniType> fromCpp(JNIEnv* jniEnv, const CppType& c);

private:
    NativeQrCodeRecord();
    friend ::djinni::JniClass<NativeQrCodeRecord>;

    const ::djinni::GlobalRef<jclass> clazz { ::djinni::jniFindClass("com/novo/jniunifiedbackend/QrCodeRecord") };
    const jmethodID jconstructor { ::djinni::jniGetMethodID(clazz.get(), "<init>", "(I[B)V") };
    const jfieldID field_mWidth { ::djinni::jniGetFieldID(clazz.get(), "mWidth", "I") };
    const jfieldID field_mPixelData { ::djinni::jniGetFieldID(clazz.get(), "mPixelData", "[B") };
};

}  // namespace djinni_generated
