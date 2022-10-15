"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7695:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=["components"],o={id:"x1",title:"Appendix 1: Command Line Options",sidebar_label:"Appendix 1: Command Line Options"},s=void 0,u={unversionedId:"x1",id:"x1",title:"Appendix 1: Command Line Options",description:"\x3c!---",source:"@site/../CQL_Guide/x1.md",sourceDirName:".",slug:"/x1",permalink:"/cql-guide/x1",draft:!1,tags:[],version:"current",lastUpdatedBy:"Raoul Foaleng",lastUpdatedAt:1665796638,formattedLastUpdatedAt:"10/15/2022",frontMatter:{id:"x1",title:"Appendix 1: Command Line Options",sidebar_label:"Appendix 1: Command Line Options"},sidebar:"someSidebar",previous:{title:"Chapter 15: Query Plan Generation",permalink:"/cql-guide/ch15"},next:{title:"Appendix 2: CQL Grammar",permalink:"/cql-guide/x2"}},p={},d=[{value:"With No Options",id:"with-no-options",level:3},{value:"--in file",id:"--in-file",level:3},{value:"--sem",id:"--sem",level:3},{value:"--ast",id:"--ast",level:3},{value:"--echo",id:"--echo",level:3},{value:"--dot",id:"--dot",level:3},{value:"--cg output1 output2 ...",id:"--cg-output1-output2-",level:3},{value:"--nolines",id:"--nolines",level:3},{value:"--global_proc name",id:"--global_proc-name",level:3},{value:"--compress",id:"--compress",level:3},{value:"--test",id:"--test",level:3},{value:"--dev",id:"--dev",level:3},{value:"--java_package_name name",id:"--java_package_name-name",level:3},{value:"--java_fragment_interface_mode",id:"--java_fragment_interface_mode",level:3},{value:"--c_include_namespace",id:"--c_include_namespace",level:3},{value:"--c_include_path",id:"--c_include_path",level:3},{value:"--objc_c_include_path",id:"--objc_c_include_path",level:3},{value:"Result Types (--rt *)",id:"result-types---rt-",level:3},{value:"--rt c",id:"--rt-c",level:4},{value:"--cqlrt foo.h",id:"--cqlrt-fooh",level:5},{value:"--generate_type_getters",id:"--generate_type_getters",level:5},{value:"--generate_exports",id:"--generate_exports",level:5},{value:"--rt objc",id:"--rt-objc",level:4},{value:"--rt java",id:"--rt-java",level:4},{value:"--rt schema",id:"--rt-schema",level:4},{value:"--rt schema_upgrade",id:"--rt-schema_upgrade",level:4},{value:"--include_regions a b c",id:"--include_regions-a-b-c",level:5},{value:"--exclude_regions x y z",id:"--exclude_regions-x-y-z",level:5},{value:"--min_schema_version n",id:"--min_schema_version-n",level:5},{value:"--schema_exclusive",id:"--schema_exclusive",level:5},{value:"--rt json_schema",id:"--rt-json_schema",level:4},{value:"--rt query_plan",id:"--rt-query_plan",level:4},{value:"--rt stats",id:"--rt-stats",level:4},{value:"--rt udf",id:"--rt-udf",level:4}],c={toc:d};function m(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CQL has a variety of command line (CLI) options but many of them are only interesting for cql development.  Nonetheless this is a comprehensive list:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"note CQL is often used after the c pre-processor is run so this kind of invocation is typical:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cc -E -x c foo.sql | cql [args]\n")),(0,i.kt)("h3",{id:"with-no-options"},"With No Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"emits a usage message")),(0,i.kt)("h3",{id:"--in-file"},"--in file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reads the given file for the input instead of stdin"),(0,i.kt)("li",{parentName:"ul"},"the input should probably have already been run through the C pre-processor as above"),(0,i.kt)("li",{parentName:"ul"},"returns non-zero if the file fails to parse")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cql --in test.sql\n")),(0,i.kt)("h3",{id:"--sem"},"--sem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"performs semantic analysis on the input file ONLY"),(0,i.kt)("li",{parentName:"ul"},"the return code is zero if there are no errors")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cql --in sem_test.sql --sem\n")),(0,i.kt)("h3",{id:"--ast"},"--ast"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"walks the AST and prints it to stdout in human readable text form"),(0,i.kt)("li",{parentName:"ul"},"may be combined with --sem (semantic info will be included)\nExample")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cql --in sem_test.sql --sem --ast >sem_ast.out\n")),(0,i.kt)("h3",{id:"--echo"},"--echo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"walks the AST and emits the text of a program that would create it"),(0,i.kt)("li",{parentName:"ul"},'this has the effect of "beautifying" badly formatted input or "canonicalizing" it',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"some sensible indenting is added but it might not be the original indenting"),(0,i.kt)("li",{parentName:"ul"},"extraneous whitespace, parens, etc. are removed"))),(0,i.kt)("li",{parentName:"ul"},"may be combined with --sem (in which case you see the source after any rewrites for sugar)"),(0,i.kt)("li",{parentName:"ul"},"this also validates that the input can be parsed")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cql --in test.sql --echo >test.out  # test.out is "equivalent" to test.sql\n')),(0,i.kt)("h3",{id:"--dot"},"--dot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prints the internal AST to stdout in DOT format for graph visualization"),(0,i.kt)("li",{parentName:"ul"},"this is really only interesting for small graphs for discussion as it rapidly gets insane")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cql --dot --in dottest.sql\n")),(0,i.kt)("h3",{id:"--cg-output1-output2-"},"--cg output1 output2 ..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"any number of output files may be needed for a particular result type, two is common"),(0,i.kt)("li",{parentName:"ul"},"the return code is zero if there are no errors"),(0,i.kt)("li",{parentName:"ul"},"any --cg option implies --sem")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cql --in foo.sql --cg foo.h foo.c\n")),(0,i.kt)("h3",{id:"--nolines"},"--nolines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Suppress the # directives for lines.  Useful if you need to debug the C code.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cql --in test.sql --nolines --cg foo.h foo.c\n")),(0,i.kt)("h3",{id:"--global_proc-name"},"--global_proc name"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"any loose SQL statements not in a stored proc are gathered and put into a procedure of the given name"),(0,i.kt)("li",{parentName:"ul"},"when generating a schema migrate script the global proc name is used as a prefix on all of the artifacts so that there can be several independent migrations linked into a single executable")),(0,i.kt)("h3",{id:"--compress"},"--compress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for use with the C result type, (or any similar types added to the runtime array in your compiler)"),(0,i.kt)("li",{parentName:"ul"},'string literals for the SQL are broken into "fragments" the DML is then represented by an array of fragments'),(0,i.kt)("li",{parentName:"ul"},"since DML is often very similar there is a lot of token sharing possible"),(0,i.kt)("li",{parentName:"ul"},"the original string is recreated at runtime from the fragments and then executed"),(0,i.kt)("li",{parentName:"ul"},"comments show the original string inline for easier debugging and searching")),(0,i.kt)("p",null,"NOTE: different result types require a different number of output files with different meanings"),(0,i.kt)("h3",{id:"--test"},"--test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"some of the output types can include extra diagnostics if ",(0,i.kt)("inlineCode",{parentName:"li"},"--test")," is included"),(0,i.kt)("li",{parentName:"ul"},"the test output often makes the outputs badly formed so this is generally good for humans only")),(0,i.kt)("h3",{id:"--dev"},"--dev"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"some codegen features only make sense during development, this enables dev mode to turn those one\n** example: ",(0,i.kt)("a",{parentName:"li",href:"/cql-guide/ch15"},"explain query plan"))),(0,i.kt)("h3",{id:"--java_package_name-name"},"--java_package_name name"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"used by java code generators when they output a class. Allows to specify the name of package the class will be a part of")),(0,i.kt)("h3",{id:"--java_fragment_interface_mode"},"--java_fragment_interface_mode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sets the Java codegen mode to generate interfaces for base and extension fragments instead of classes.")),(0,i.kt)("h3",{id:"--c_include_namespace"},"--c_include_namespace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'for the C codegen runtimes, it determines the header namespace (as in #include "namespace/file.h") that goes into the output C file'),(0,i.kt)("li",{parentName:"ul"},"if this option is used, it is prefixed to the first argment to --cg to form the include path in the C file"),(0,i.kt)("li",{parentName:"ul"},'if absent there is no "namespace/" prefix')),(0,i.kt)("h3",{id:"--c_include_path"},"--c_include_path"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'for the C codegen runtimes, it determines the full header path (as in #include "your_arg") that goes into the output C file'),(0,i.kt)("li",{parentName:"ul"},"if this option is used, the first argment to --cg controls only the output path and does not appear in include path at all"),(0,i.kt)("li",{parentName:"ul"},"this form overrides --c_include_namespace if both are specified")),(0,i.kt)("h3",{id:"--objc_c_include_path"},"--objc_c_include_path"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for ObjC codegen runtimes that need to refer to the generated C code, this represents the header of the C generated code that will be used during inclusion from the ObjC file")),(0,i.kt)("h3",{id:"result-types---rt-"},"Result Types (--rt *)"),(0,i.kt)("p",null,"These are the various outputs the compiler can produce."),(0,i.kt)("h4",{id:"--rt-c"},"--rt c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"requires two output files (foo.h and foo.c)"),(0,i.kt)("li",{parentName:"ul"},"this is the standard C compilation of the sql file")),(0,i.kt)("h5",{id:"--cqlrt-fooh"},"--cqlrt foo.h"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"emits ",(0,i.kt)("inlineCode",{parentName:"li"},'#include "foo.h"')," into the C output instead of ",(0,i.kt)("inlineCode",{parentName:"li"},'#include "cqlrt.h"'))),(0,i.kt)("h5",{id:"--generate_type_getters"},"--generate_type_getters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"changes C output for CQL result sets so that the field readers used shared functions to get fields of a certain type"),(0,i.kt)("li",{parentName:"ul"},"this style of codegen makes result-sets more interoperable with each other if they have similar shape so it can be useful")),(0,i.kt)("h5",{id:"--generate_exports"},"--generate_exports"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"adds an additional output file"),(0,i.kt)("li",{parentName:"ul"},"example:  `--in foo.sql --generate_exports --rt c --cg foo.h foo.c foo_exports.sql"),(0,i.kt)("li",{parentName:"ul"},"the output file ",(0,i.kt)("inlineCode",{parentName:"li"},"foo_exports.sql")," includes procedure declarations for the contents of ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.sql")),(0,i.kt)("li",{parentName:"ul"},"basically automatically generates the CQL header file you need to access the procedures in the input from some other file"),(0,i.kt)("li",{parentName:"ul"},"if it were C it would be like auto-generating ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.h")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.c"))),(0,i.kt)("h4",{id:"--rt-objc"},"--rt objc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"objective C wrappers for result sets produced by the stored procedures in the input"),(0,i.kt)("li",{parentName:"ul"},"these depend on the output of a standard codegen run so this is additive"),(0,i.kt)("li",{parentName:"ul"},"requires one output file (foo.h)")),(0,i.kt)("h4",{id:"--rt-java"},"--rt java"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"java wrappers for result sets produced by the stored procedures in the input"),(0,i.kt)("li",{parentName:"ul"},"these depend on the output of a standard codegen run so this is additive"),(0,i.kt)("li",{parentName:"ul"},"requires one output file (foo.java)")),(0,i.kt)("h4",{id:"--rt-schema"},"--rt schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"produces the canonical schema for the given input files"),(0,i.kt)("li",{parentName:"ul"},"stored procedures etc. are removed"),(0,i.kt)("li",{parentName:"ul"},"whitespace etc. is removed"),(0,i.kt)("li",{parentName:"ul"},'suitable for use to create the next or first "previous" schema for schema validation'),(0,i.kt)("li",{parentName:"ul"},"requires one output file")),(0,i.kt)("h4",{id:"--rt-schema_upgrade"},"--rt schema_upgrade"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"produces a CQL schema upgrade script which can then be compiled with CQL itself"),(0,i.kt)("li",{parentName:"ul"},"see the chapter on schema upgrade/migration: ",(0,i.kt)("a",{parentName:"li",href:"https://cgsql.dev/cql-guide/ch10/"},"Chapter 10")),(0,i.kt)("li",{parentName:"ul"},"requires one output file (foo.sql)")),(0,i.kt)("h5",{id:"--include_regions-a-b-c"},"--include_regions a b c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the indicated regions will be declared"),(0,i.kt)("li",{parentName:"ul"},"used with ",(0,i.kt)("inlineCode",{parentName:"li"},"--rt schema_upgrade")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"--rt schema")),(0,i.kt)("li",{parentName:"ul"},"in the upgrade case excluded regions will not be themselves upgraded, but may be referred, to by things that are being upgraded")),(0,i.kt)("h5",{id:"--exclude_regions-x-y-z"},"--exclude_regions x y z"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the indicated regions will still be declared but the upgrade code will be suppressed, the presumption being that a different script already upgrades x y z"),(0,i.kt)("li",{parentName:"ul"},"used with ",(0,i.kt)("inlineCode",{parentName:"li"},"--rt schema_upgrade"))),(0,i.kt)("h5",{id:"--min_schema_version-n"},"--min_schema_version n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the schema upgrade script will not include upgrade steps for schema older than the version specified")),(0,i.kt)("h5",{id:"--schema_exclusive"},"--schema_exclusive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the schema upgrade script assumes it owns all the schema in the database, it aggressively removes other things")),(0,i.kt)("h4",{id:"--rt-json_schema"},"--rt json_schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"produces JSON output suitable for consumption by downstream codegen"),(0,i.kt)("li",{parentName:"ul"},"the JSON includes a definition of the various entities in the input"),(0,i.kt)("li",{parentName:"ul"},"see the section on JSON output for details")),(0,i.kt)("h4",{id:"--rt-query_plan"},"--rt query_plan"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"produces CQL output which can be re-compiled by CQL as normal input"),(0,i.kt)("li",{parentName:"ul"},"the output consists of a set of procedures that will emit all query plans for the DML that was in the input"),(0,i.kt)("li",{parentName:"ul"},"see also ",(0,i.kt)("inlineCode",{parentName:"li"},"--rt udf")," and ",(0,i.kt)("a",{parentName:"li",href:"/cql-guide/ch15"},"Chapter 15"))),(0,i.kt)("h4",{id:"--rt-stats"},"--rt stats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"produces  a simple .csv file with node count information for AST nodes per procedure in the input"),(0,i.kt)("li",{parentName:"ul"},"requires one output file (foo.csv)")),(0,i.kt)("h4",{id:"--rt-udf"},"--rt udf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"produces stub UDF implementations for all UDFS that were seen in the input"),(0,i.kt)("li",{parentName:"ul"},"this output is suitable for use with ",(0,i.kt)("inlineCode",{parentName:"li"},"--rt query_plan")," so that SQL with UDFs will run in a simple context"),(0,i.kt)("li",{parentName:"ul"},"requires two output files (e.g. udfs.h and udfs.c)"),(0,i.kt)("li",{parentName:"ul"},"See also ",(0,i.kt)("a",{parentName:"li",href:"/cql-guide/ch15"},"Chapter 15"))))}m.isMDXComponent=!0}}]);