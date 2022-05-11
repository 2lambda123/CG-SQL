(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,b=m["".concat(r,".").concat(p)]||m[p]||d[p]||o;return n?i.a.createElement(b,l(l({ref:t},u),{},{components:n})):i.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),o=(n(0),n(162)),r=["components"],l={id:"x9",title:"Appendix 9: Using the CQL Amalgam",sidebar_label:"Appendix 9: Using the CQL Amalgam"},c={unversionedId:"x9",id:"x9",isDocsHomePage:!1,title:"Appendix 9: Using the CQL Amalgam",description:"\x3c!---",source:"@site/../CQL_Guide/x9.md",slug:"/x9",permalink:"/cql-guide/x9",version:"current",lastUpdatedBy:"Raoul Foaleng",lastUpdatedAt:1652254358,sidebar_label:"Appendix 9: Using the CQL Amalgam",sidebar:"someSidebar",previous:{title:"Appendix 8: CQL Best Practices",permalink:"/cql-guide/x8"},next:{title:"Appendix 10: CQL Working Example",permalink:"/cql-guide/x10"}},u=[{value:"Building the Amalgam",id:"building-the-amalgam",children:[]},{value:"Testing the Amalgam",id:"testing-the-amalgam",children:[]},{value:"Using the Amalgam",id:"using-the-amalgam",children:[]},{value:"CQL Amalgam Options",id:"cql-amalgam-options",children:[]},{value:"Amalgam LEAN choices",id:"amalgam-lean-choices",children:[]},{value:"Other Notes",id:"other-notes",children:[]}],s={rightToc:u};function m(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a brief discussion of the CQL Amalgam and its normal usage patterns."),Object(o.b)("h3",{id:"building-the-amalgam"},"Building the Amalgam"),Object(o.b)("p",null,"The amalgam has to include the results of bison and flex, so a normal build must run first.  The simplest\nway to build it starting from the ",Object(o.b)("inlineCode",{parentName:"p"},"sources")," directory is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"make\n./make_amalgam.sh\n")),Object(o.b)("p",null,"The result goes in ",Object(o.b)("inlineCode",{parentName:"p"},"out/cql_amalgam.c"),".  It can then be built using ",Object(o.b)("inlineCode",{parentName:"p"},"cc")," with whatever flags you might\ndesire.  With a few ",Object(o.b)("inlineCode",{parentName:"p"},"-D")," directives it can readily be compiled with Microsoft C and it also works with\nEmscripten (",Object(o.b)("inlineCode",{parentName:"p"},"emcc"),") basically unchanged.  Clang and Gcc of course also work."),Object(o.b)("p",null,"The standard test script ",Object(o.b)("inlineCode",{parentName:"p"},"test.sh")," builds the amalgam and attempts to compile it as well, which ensures\nthat the amalgam can at least compile at all times."),Object(o.b)("h3",{id:"testing-the-amalgam"},"Testing the Amalgam"),Object(o.b)("p",null,"Of course you can do whatever tests you might like by simply compiling the amalgam as is and then using\nit to compile things.  But importantly the test script ",Object(o.b)("inlineCode",{parentName:"p"},"test.sh")," can test the amalgam build like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"test.sh --use_amalgam\n")),Object(o.b)("p",null,"This runs all the normal tests using the binary built from the amalgam rather than the normal binary."),Object(o.b)("p",null,'Normal CQL development practices result in this happening pretty often so the amalgam tends to stay\nin good shape. The code largely works in either form with very few affordances for the amalgam build needed.\nMost developers don\'t even think about the amalgam build flavor; to a first approximation "it just works".'),Object(o.b)("h3",{id:"using-the-amalgam"},"Using the Amalgam"),Object(o.b)("p",null,"To use the amalgam you'll want to do something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C"},'#define CQL_IS_NOT_MAIN 1\n\n// Suppresses a bunch of warnings because the code\n// is in an #include context\n// PR\'s to remove these are welcome :D\n#pragma clang diagnostic ignored "-Wnullability-completeness"\n\n#include "cql_amalgam.c"\n\nvoid go_for_it(const char *your_buffer) {\n  YY_BUFFER_STATE my_string_buffer = yy_scan_string(your_buffer);\n\n  // Note: "--in" is irrelevant because the scanner is\n  // going to read from the buffer above.\n  //\n  // If you don\'t use yy_scan_string, you could use "--in"\n  // to get data from a file.\n\n  int argc = 4;\n  char *argv[] = { "cql", "--cg", "foo.h", "foo.c" };\n\n  cql_main(argc, argv);\n  yy_delete_buffer(my_string_buffer);\n}\n')),Object(o.b)("p",null,"So the general pattern is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"predefine the options you want to use (see below)"),Object(o.b)("li",{parentName:"ul"},"include the amalgam"),Object(o.b)("li",{parentName:"ul"},"add any functions you want that will call the amalgam")),Object(o.b)("p",null,"Most amalgam functions are ",Object(o.b)("inlineCode",{parentName:"p"},"static")," to avoid name conflicts. You will want to create your own public functions such as ",Object(o.b)("inlineCode",{parentName:"p"},"go_for_it")," above that use the amalgam in all the ways you desire."),Object(o.b)("p",null,"You'll want to avoid calling any internal functions other than ",Object(o.b)("inlineCode",{parentName:"p"},"cql_main")," because they are liable to change."),Object(o.b)("p",null,"NOTE: The amalgam is C code not C++ code.  Do not attempt to use it inside of an ",Object(o.b)("inlineCode",{parentName:"p"},'extern "C"')," block in a C++ file.  It won't build.  If you want a C++ API, expose the C functions you need and write a wrapper class."),Object(o.b)("h3",{id:"cql-amalgam-options"},"CQL Amalgam Options"),Object(o.b)("p",null,"The amalgam includes the following useful ",Object(o.b)("inlineCode",{parentName:"p"},"#ifdef")," options to allow you to customize it."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CQL_IS_NOT_MAIN"),Object(o.b)("li",{parentName:"ul"},"CQL_NO_SYSTEM_HEADERS"),Object(o.b)("li",{parentName:"ul"},"CQL_NO_DIAGNOSTIC_BLOCK"),Object(o.b)("li",{parentName:"ul"},"cql_emit_error"),Object(o.b)("li",{parentName:"ul"},"cql_emit_output"),Object(o.b)("li",{parentName:"ul"},"cql_open_file_for_write"),Object(o.b)("li",{parentName:"ul"},"cql_write_file")),Object(o.b)("h4",{id:"cql_is_not_main"},"CQL_IS_NOT_MAIN"),Object(o.b)("p",null,"If this symbol is defined then ",Object(o.b)("inlineCode",{parentName:"p"},"cql_main")," will not be redefined to be ",Object(o.b)("inlineCode",{parentName:"p"},"main"),"."),Object(o.b)("p",null,"As the comments in the source say:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C"},"#ifndef CQL_IS_NOT_MAIN\n\n// Normally CQL is the main entry point.  If you are using CQL\n// in an embedded fashion then you want to invoke its main at\n// some other time. If you define CQL_IS_NOT_MAIN then cql_main\n// is not renamed to main.  You call cql_main when you want.\n\n  #define cql_main main\n#endif\n")),Object(o.b)("p",null,"Set this symbol so that you own main and cql_main is called at your pleasure."),Object(o.b)("h4",{id:"cql_no_system_headers"},"CQL_NO_SYSTEM_HEADERS"),Object(o.b)("p",null,"The amalgam includes the normal ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," directives needed to make it compile, things like stdio and such.\nIn your situation these headers may not be appropriate.  If ",Object(o.b)("inlineCode",{parentName:"p"},"CQL_NO_SYSTEM_HEADERS")," is defined then the amalgam\nwill not include anything; you can then add whatever headers you need before you include the amalgam."),Object(o.b)("h4",{id:"cql_no_diagnostic_block"},"CQL_NO_DIAGNOSTIC_BLOCK"),Object(o.b)("p",null,"The amalgam includes a set of recommended directives for warnings to suppress and include.  If you want\nto make other choices for these you can suppress the defaults by defining ",Object(o.b)("inlineCode",{parentName:"p"},"CQL_NO_DIAGNOSTIC_BLOCK"),";\nyou can then add whatever diagnostic pragmas you want/need."),Object(o.b)("h4",{id:"cql_emit_error"},"cql_emit_error"),Object(o.b)("p",null,"The amalgam uses ",Object(o.b)("inlineCode",{parentName:"p"},"cql_emit_error")," to write its messages to stderr.  The documentation is included in the\ncode which is attached here.  If you want the error messages to go somewhere else, define ",Object(o.b)("inlineCode",{parentName:"p"},"cql_emit_error"),"\nas the name of your error handling function.  It should accept a ",Object(o.b)("inlineCode",{parentName:"p"},"const char *")," and record that string\nhowever you deem appropriate."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C"},'#ifndef cql_emit_error\n\n// CQL "stderr" outputs are emitted with this API.\n//\n// You can define it to be a method of your choice with\n// "#define cql_emit_error your_method" and then your method\n// will get the data instead. This will be whatever output the\n// compiler would have emitted to stderr.  This includes\n// semantic errors or invalid argument combinations.  Note that\n// CQL never emits error fragments with this API; you always\n// get all the text of one error.  This is important if you\n// are filtering or looking for particular errors in a test\n// harness or some such.\n//\n// You must copy the memory if you intend to keep it. "data" will\n// be freed.\n//\n// Note: you may use cql_cleanup_and_exit to force a failure from\n// within this API but doing so might result in unexpected cleanup\n// paths that have not been tested.\n\nvoid cql_emit_error(const char *err) {\n  fprintf(stderr, "%s", err);\n  if (error_capture) {\n    bprintf(error_capture, "%s", err);\n  }\n}\n\n#endif\n')),Object(o.b)("p",null,"Typically you would ",Object(o.b)("inlineCode",{parentName:"p"},"#define cql_emit_error your_error_function")," before you include the amalgam and then\ndefine your_error_function elsewhere in that file (before or after the amalgam is included are both fine)."),Object(o.b)("h4",{id:"cql_emit_output"},"cql_emit_output"),Object(o.b)("p",null,"The amalgam uses ",Object(o.b)("inlineCode",{parentName:"p"},"cql_emit_output")," to write its messages to stdout.  The documentation is included in the\ncode which is attached here.  If you want the standard output to go somewhere else, define ",Object(o.b)("inlineCode",{parentName:"p"},"cql_emit_output"),"\nas the name of your output handling function.  It should accept a ",Object(o.b)("inlineCode",{parentName:"p"},"const char *")," and record that string\nhowever you deem appropriate."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C"},'#ifndef cql_emit_output\n\n// CQL "stdout" outputs are emitted (in arbitrarily small pieces)\n// with this API.\n//\n// You can define it to be a method of your choice with\n// "#define cql_emit_output your_method" and then your method will\n// get the data instead. This will be whatever output the\n// compiler would have emitted to stdout.  This is usually\n// reformated CQL or semantic trees and such -- not the normal\n// compiler output.\n//\n// You must copy the memory if you intend to keep it. "data" will\n// be freed.\n//\n// Note: you may use cql_cleanup_and_exit to force a failure from\n// within this API but doing so might result in unexpected cleanup\n// paths that have not been tested.\n\nvoid cql_emit_output(const char *msg) {\n  printf("%s", msg);\n}\n\n#endif\n')),Object(o.b)("p",null,"Typically you would ",Object(o.b)("inlineCode",{parentName:"p"},"#define cql_emit_output your_output_function")," before you include the amalgam and then\ndefine your_error_function elsewhere in that file (before or after the amalgam is included are both fine)."),Object(o.b)("h4",{id:"cql_open_file_for_write"},"cql_open_file_for_write"),Object(o.b)("p",null,"If you still want normal file i/o for your output but you simply want to control the placement of the output\n(such as forcing it to be on some virtual drive) you can replace this function by defining ",Object(o.b)("inlineCode",{parentName:"p"},"cql_open_file_for_write"),"."),Object(o.b)("p",null,"If all you need to do is control the origin of the ",Object(o.b)("inlineCode",{parentName:"p"},"FILE *")," that is written to, you can replace just this function."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C"},'#ifndef cql_open_file_for_write\n\n// Not a normal integration point, the normal thing to do is\n// replace cql_write_file but if all you need to do is adjust\n// the path or something like that you could replace\n// this method instead.  This presumes that a FILE * is still ok\n// for your scenario.\n\nFILE *_Nonnull cql_open_file_for_write(\n  const char *_Nonnull file_name)\n{\n  FILE *file;\n  if (!(file = fopen(file_name, "w"))) {\n    cql_error("unable to open %s for write\\n", file_name);\n    cql_cleanup_and_exit(1);\n  }\n  return file;\n}\n\n#endif\n')),Object(o.b)("p",null,"Typically you would ",Object(o.b)("inlineCode",{parentName:"p"},"#define cql_open_file_for_write your_open_function")," before you include the amalgam and then\ndefine your_open_function elsewhere in that file (before or after the amalgam is included are both fine)."),Object(o.b)("h4",{id:"cql_write_file"},"cql_write_file"),Object(o.b)("p",null,"The amalgam uses ",Object(o.b)("inlineCode",{parentName:"p"},"cql_write_file")," to write its compilation outputs to the file system.  The documentation is included in the\ncode which is attached here.  If you want the compilation output to go somewhere else, define ",Object(o.b)("inlineCode",{parentName:"p"},"cql_write_file"),"\nas the name of your output handling function.  It should accept a ",Object(o.b)("inlineCode",{parentName:"p"},"const char *")," for the file name and another\nfor the data to be written.  You can then store those compilation results however you deem appropriate."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C"},'#ifndef cql_write_file\n\n// CQL code generation outputs are emitted in one "gulp" with this\n// API. You can define it to be a method of your choice with\n// "#define cql_write_file your_method" and then your method will\n// get the filename and the data. This will be whatever output the\n// compiler would have emitted to one of it\'s --cg arguments.\n// You can then write it to a location of your choice.\n// You must copy the memory if you intend to keep it. "data" will\n// be freed.\n\n// Note: you *may* use cql_cleanup_and_exit to force a failure\n// from within this API.  That\'s a normal failure mode that is\n// well-tested.\n\nvoid cql_write_file(\n  const char *_Nonnull file_name,\n  const char *_Nonnull data)\n{\n  FILE *file = cql_open_file_for_write(file_name);\n  fprintf(file, "%s", data);\n  fclose(file);\n}\n\n#endif\n')),Object(o.b)("p",null,"Typically you would ",Object(o.b)("inlineCode",{parentName:"p"},"#define cql_write_file your_write_function")," before you include the amalgam and then\ndefine your_write_function elsewhere in that file (before or after the amalgam is included are both fine)."),Object(o.b)("h3",{id:"amalgam-lean-choices"},"Amalgam LEAN choices"),Object(o.b)("p",null,"When you include the amalgam, you get everything by default. You may, however, only want some\nlimited subset of the compiler's functions in your build."),Object(o.b)("p",null,"To customize the amalgam, there are a set of configuration pre-processor options.  To opt-in to\nconfiguration, first define ",Object(o.b)("inlineCode",{parentName:"p"},"CQL_AMALGAM_LEAN"),". You then have to opt-in to the various pieces\nyou might want. The system is useless without the parser, so you can't remove that; but you can\nchoose from the list below."),Object(o.b)("p",null,"The options are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CQL_AMALGAM_LEAN` : enable lean mode; this must be set or you get everything"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_CG_C")," : C codegen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_CG_COMMON")," : common code generator pieces"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_GEN_SQL")," : the echoing features"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_JAVA")," : Java code gen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_JSON")," : JSON schema output"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_OBJC")," : Objective-C code gen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_QUERY_PLAN")," : the query plan creator"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_SCHEMA")," : the assorted schema output types"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_SEM")," : semantic analysis (needed by most things)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_TEST_HELPERS")," : test helper output"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_UDF")," : the UDF stubs used by the query plan output"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CQL_AMALGAM_UNIT_TESTS")," : some internal unit tests, which are pretty much needed by nobody")),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"CQL_AMALGAM_SEM")," is necessary for any of the code generation\nfeatures to work. Likewise, several generators require ",Object(o.b)("inlineCode",{parentName:"p"},"CQL_AMALGAM_CG_COMMON")," (e.g., C does)."),Object(o.b)("p",null,"Pick what you want; stubs are created for what you omit to avoid linkage errors."),Object(o.b)("h3",{id:"other-notes"},"Other Notes"),Object(o.b)("p",null,"The amalgam will use malloc/calloc for its allocations and it is designed to release all memory it\nhas allocated when cql_main returns control to you, even in the face of error."),Object(o.b)("p",null,"Internal compilation errors result in an ",Object(o.b)("inlineCode",{parentName:"p"},"assert")," failure leading to an abort.  This is not supposed\nto ever happen but there can always be bugs.  Normal errors just prevent later phases of the compiler\nfrom running so you might not see file output, but rather just error output.  In all cases things\nshould be cleaned up."),Object(o.b)("p",null,"The compiler can be called repeatedly with no troubles; it re-initializes on each use. The compiler is\nnot multi-threaded so if there is threading you should use some mutex arrangement to keep it safe.\nA thread-safe version would require extensive modifications."))}m.isMDXComponent=!0}}]);