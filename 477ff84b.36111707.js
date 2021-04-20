(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(136)),l={id:"x1",title:"Appendix 1: Command Line Options",sidebar_label:"Appendix 1: Command Line Options"},o={unversionedId:"x1",id:"x1",isDocsHomePage:!1,title:"Appendix 1: Command Line Options",description:"\x3c!---",source:"@site/../CQL_Guide/x1.md",slug:"/x1",permalink:"/cql-guide/x1",version:"current",lastUpdatedBy:"Raoul Foaleng",lastUpdatedAt:1618908983,sidebar_label:"Appendix 1: Command Line Options",sidebar:"someSidebar",previous:{title:"Chapter 14: CQL Query Fragments",permalink:"/cql-guide/ch14"},next:{title:"Appendix 2: CQL Grammar",permalink:"/cql-guide/x2"}},c=[{value:"With No Options",id:"with-no-options",children:[]},{value:"--in file",id:"--in-file",children:[]},{value:"--sem",id:"--sem",children:[]},{value:"--print",id:"--print",children:[]},{value:"--dot",id:"--dot",children:[]},{value:"--cg output1 output2 ...",id:"--cg-output1-output2-",children:[]},{value:"--nolines ...",id:"--nolines-",children:[]},{value:"--generate_copy ...",id:"--generate_copy-",children:[]},{value:"--global_proc name",id:"--global_proc-name",children:[]},{value:"--compress",id:"--compress",children:[]},{value:"--test",id:"--test",children:[]},{value:"--java_package_name",id:"--java_package_name",children:[]},{value:"--java_assembly_query_classname",id:"--java_assembly_query_classname",children:[]},{value:"--c_include_namespace",id:"--c_include_namespace",children:[]},{value:"--objc_c_include_path",id:"--objc_c_include_path",children:[]},{value:"Result Types (--rt *)",id:"result-types---rt-",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"CQL has a variety of command line options but many of them are only interesting for cql development.  Nonetheless this is a comprehensive list:"),Object(i.b)("h3",{id:"with-no-options"},"With No Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CQL reads its input and echos it back as normalized SQL"),Object(i.b)("li",{parentName:"ul"},"this only validates that the input can be parsed"),Object(i.b)("li",{parentName:"ul"},"note CQL is often used after the c pre-processor is run so this kind of invocation is typical:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cc -E -x c foo.sql | cql [args]\n")),Object(i.b)("h3",{id:"--in-file"},"--in file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"reads the given file for the input instead of stdin"),Object(i.b)("li",{parentName:"ul"},"the input should probably have already been run through the C pre-processor as above"),Object(i.b)("li",{parentName:"ul"},"returns non-zero if the file fails to parse")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cql --in test.sql\n")),Object(i.b)("h3",{id:"--sem"},"--sem"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"performs semantic analysis on the input file ONLY"),Object(i.b)("li",{parentName:"ul"},"the return code is zero if there are no errors")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cql --in sem_test.sql --sem\n")),Object(i.b)("h3",{id:"--print"},"--print"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"may be combined with --sem (semantic info will be included)"),Object(i.b)("li",{parentName:"ul"},"prints the internal AST to stdout instead of echoing the inputs\nExample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cql --in sem_test.sql --sem --print >sem_ast.out\n")),Object(i.b)("h3",{id:"--dot"},"--dot"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"prints the internal AST to stdout in DOT format for graph visualization"),Object(i.b)("li",{parentName:"ul"},"this is really only interesting for small graphs for discussion as it rapidly gets insane")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cql --dot --in dottest.sql\n")),Object(i.b)("h3",{id:"--cg-output1-output2-"},"--cg output1 output2 ..."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"any number of output files may be needed for a particular result type, two is common"),Object(i.b)("li",{parentName:"ul"},"the return code is zero if there are no errors"),Object(i.b)("li",{parentName:"ul"},"any --cg option implies --sem")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cql --in foo.sql --cg foo.h foo.c\n")),Object(i.b)("h3",{id:"--nolines-"},"--nolines ..."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Suppress the # directives for lines.  Useful if you need to debug the C code.")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cql --in test.sql --nolines --cg foo.h foo.c\n")),Object(i.b)("h3",{id:"--generate_copy-"},"--generate_copy ..."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Generate a C copy function for the resultset. Most of the stored procedures don't need to generate this thats why is optional.")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cql --in test.sql --cg foo.h foo.c --generate_copy\n")),Object(i.b)("h3",{id:"--global_proc-name"},"--global_proc name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"any loose SQL statements not in a stored proc are gathered and put into a procedure of the given name"),Object(i.b)("li",{parentName:"ul"},"when generating a schema migrate script the global proc name is used as a prefix on all of the artifacts so that there can be several independent migrations linked into a single executable")),Object(i.b)("h3",{id:"--compress"},"--compress"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"for use with the C result type, (or any similar types added to the runtime array in your compiler)"),Object(i.b)("li",{parentName:"ul"},'string literals for the SQL are broken into "fragments" the DML is then represented by an array of fragments'),Object(i.b)("li",{parentName:"ul"},"since DML is often very similar there is a lot of token sharing possible"),Object(i.b)("li",{parentName:"ul"},"the original string is recreated at runtime from the fragments and then executed"),Object(i.b)("li",{parentName:"ul"},"comments show the original string inline for easier debugging and searching")),Object(i.b)("p",null,"NOTE: different result types require a different number of output files with different meanings"),Object(i.b)("h3",{id:"--test"},"--test"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"some of the output types can include extra diagnostics if ",Object(i.b)("inlineCode",{parentName:"li"},"--test")," is included"),Object(i.b)("li",{parentName:"ul"},"that often makes the outputs badly formed so this is generally good for humans only")),Object(i.b)("h3",{id:"--java_package_name"},"--java_package_name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"used by java code generators when they output a class. Allows to specify the name of package the class will be a part of")),Object(i.b)("h3",{id:"--java_assembly_query_classname"},"--java_assembly_query_classname"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fully qualified name of the parent class for the Java assembly. Used by java code generators when they output an extension fragment class.")),Object(i.b)("h3",{id:"--c_include_namespace"},"--c_include_namespace"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"for the C codegen runtimes, it determines the header namespace (as in #include <namespace/file.h) that the headers will have to be referred when included from other sources.")),Object(i.b)("h3",{id:"--objc_c_include_path"},"--objc_c_include_path"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"for ObjC codegen runtimes that need to refer to the generated C code, this represents the header of the C generated code that will be used during inclusion from the ObjC file")),Object(i.b)("h3",{id:"result-types---rt-"},"Result Types (--rt *)"),Object(i.b)("p",null,"These are the various outputs the compiler can produce."),Object(i.b)("h4",{id:"--rt-c"},"--rt c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"requires two output files (foo.h and foo.c)"),Object(i.b)("li",{parentName:"ul"},"this is the standard C compilation of the sql file")),Object(i.b)("h4",{id:"--rt-objc"},"--rt objc"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"objective C wrappers for result sets produced by the stored procedures in the input"),Object(i.b)("li",{parentName:"ul"},"these depend on the output of a standard codegen run so this is additive"),Object(i.b)("li",{parentName:"ul"},"requires one output file (foo.h)")),Object(i.b)("h4",{id:"--rt-java"},"--rt java"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"java wrappers for result sets produced by the stored procedures in the input"),Object(i.b)("li",{parentName:"ul"},"these depend on the output of a standard codegen run so this is additive"),Object(i.b)("li",{parentName:"ul"},"requires one output file (foo.java)")),Object(i.b)("h4",{id:"--rt-schema"},"--rt schema"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"produces the canonical schema for the given input files"),Object(i.b)("li",{parentName:"ul"},"stored procedures etc. are removed"),Object(i.b)("li",{parentName:"ul"},"whitespace etc. is removed"),Object(i.b)("li",{parentName:"ul"},'suitable for use to create the next or first "previous" schema for schema validation'),Object(i.b)("li",{parentName:"ul"},"requires one output file")),Object(i.b)("h4",{id:"--rt-schema_upgrade"},"--rt schema_upgrade"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"produces a CQL schema upgrade script (one file) which can then be compiled with CQL itself"),Object(i.b)("li",{parentName:"ul"},"see the section on schema upgrade/migration"),Object(i.b)("li",{parentName:"ul"},"requires one output file (foo.sql)")),Object(i.b)("h5",{id:"--include_regions-a-b-c"},"--include_regions a b c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the indicated regions will be declared"),Object(i.b)("li",{parentName:"ul"},"used with ",Object(i.b)("inlineCode",{parentName:"li"},"--rt schema_upgrade")," or ",Object(i.b)("inlineCode",{parentName:"li"},"--rt schema")),Object(i.b)("li",{parentName:"ul"},"in the upgrade case excluded regions will not be themselves upgraded, but may be referred, to by things that are being upgraded")),Object(i.b)("h5",{id:"--exclude_regions-x-y-z"},"--exclude_regions x y z"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the indicated regions will still be declared but the upgrade code will be suppressed, the presumption being that a different script already upgrades x y z"),Object(i.b)("li",{parentName:"ul"},"used with ",Object(i.b)("inlineCode",{parentName:"li"},"--rt schema_upgrade"))),Object(i.b)("h4",{id:"--rt-json_schema"},"--rt json_schema"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"produces JSON output suitable for consumption by downstream codegen like the android mlite system"),Object(i.b)("li",{parentName:"ul"},"the JSON includes a definition of the various entities in the input"),Object(i.b)("li",{parentName:"ul"},"see the section on JSON output for details")))}u.isMDXComponent=!0}}]);