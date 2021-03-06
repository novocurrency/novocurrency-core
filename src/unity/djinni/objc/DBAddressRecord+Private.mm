// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#import "DBAddressRecord+Private.h"
#import "DJIMarshal+Private.h"
#include <cassert>

namespace djinni_generated {

auto AddressRecord::toCpp(ObjcType obj) -> CppType
{
    assert(obj);
    return {::djinni::String::toCpp(obj.address),
            ::djinni::String::toCpp(obj.name),
            ::djinni::String::toCpp(obj.desc),
            ::djinni::String::toCpp(obj.purpose)};
}

auto AddressRecord::fromCpp(const CppType& cpp) -> ObjcType
{
    return [[DBAddressRecord alloc] initWithAddress:(::djinni::String::fromCpp(cpp.address))
                                               name:(::djinni::String::fromCpp(cpp.name))
                                               desc:(::djinni::String::fromCpp(cpp.desc))
                                            purpose:(::djinni::String::fromCpp(cpp.purpose))];
}

}  // namespace djinni_generated
