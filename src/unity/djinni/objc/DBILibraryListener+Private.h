// AUTOGENERATED FILE - DO NOT MODIFY!
// This file generated by Djinni from libunity.djinni

#include "i_library_listener.hpp"
#include <memory>

static_assert(__has_feature(objc_arc), "Djinni requires ARC to be enabled for this file");

@protocol DBILibraryListener;

namespace djinni_generated {

class ILibraryListener
{
public:
    using CppType = std::shared_ptr<::ILibraryListener>;
    using CppOptType = std::shared_ptr<::ILibraryListener>;
    using ObjcType = id<DBILibraryListener>;

    using Boxed = ILibraryListener;

    static CppType toCpp(ObjcType objc);
    static ObjcType fromCppOpt(const CppOptType& cpp);
    static ObjcType fromCpp(const CppType& cpp) { return fromCppOpt(cpp); }

private:
    class ObjcProxy;
};

}  // namespace djinni_generated

