// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#import "DBMutationRecord+Private.h"
#import "DJIMarshal+Private.h"
#include <cassert>

namespace djinni_generated {

auto MutationRecord::toCpp(ObjcType obj) -> CppType
{
    assert(obj);
    return {::djinni::I64::toCpp(obj.change),
            ::djinni::I64::toCpp(obj.timestamp),
            ::djinni::String::toCpp(obj.txHash)};
}

auto MutationRecord::fromCpp(const CppType& cpp) -> ObjcType
{
    return [[DBMutationRecord alloc] initWithChange:(::djinni::I64::fromCpp(cpp.change))
                                          timestamp:(::djinni::I64::fromCpp(cpp.timestamp))
                                             txHash:(::djinni::String::fromCpp(cpp.txHash))];
}

}  // namespace djinni_generated
