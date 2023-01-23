"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[641],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"x3",title:"Appendix 3: Control Directives",sidebar_label:"Appendix 3: Control Directives"},s=void 0,p={unversionedId:"x3",id:"x3",title:"Appendix 3: Control Directives",description:"\x3c!---",source:"@site/../CQL_Guide/x3.md",sourceDirName:".",slug:"/x3",permalink:"/cql-guide/x3",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tim Cheung",lastUpdatedAt:1674511477,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{id:"x3",title:"Appendix 3: Control Directives",sidebar_label:"Appendix 3: Control Directives"},sidebar:"someSidebar",previous:{title:"Appendix 2: CQL Grammar",permalink:"/cql-guide/x2"},next:{title:"Appendix 4: CQL Error Codes",permalink:"/cql-guide/x4"}},u={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The control directives are those statements that begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," and they are distinguished from other statements because they influence the compiler rather than the program logic.  Some of these are of great importance and discussed elsewhere."),(0,i.kt)("p",null,"The complete list (as of this writing) is:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@ENFORCE_STRICT"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@ENFORCE_NORMAL")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These enable or disable more strict semanic checking the sub options are",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FOREIGN KEY ON UPDATE"),": all FK's must choose some ",(0,i.kt)("inlineCode",{parentName:"li"},"ON UPDATE")," strategy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FOREIGN KEY ON DELETE"),": all FK's must choose some ",(0,i.kt)("inlineCode",{parentName:"li"},"ON DELETE")," strategy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PROCEDURE"),": all procedures must be declared before they are called (eliminating the vanilla ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," call option)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JOIN"),": all joins must be ANSI style, the form ",(0,i.kt)("inlineCode",{parentName:"li"},"FROM A,B")," is not allowed (replace with ",(0,i.kt)("inlineCode",{parentName:"li"},"A INNER JOIN B")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WINDOW FUNC"),": window functions are disallowed (useful if targeting old versions of SQLite)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UPSERT STATEMENT"),": the upsert form is disallowed (useful if targeting old versions of SQLite)")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@SENSITIVE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"marks a column or variable as 'sensitive' for privacy purposes, this behaves somewhat like nullability (See Chapter 3) in that it is radioactive, contaminating anything it touches"),(0,i.kt)("li",{parentName:"ul"},"the intent of this annotation is to make it clear where sensitive data is being returned or consumed in your procedures"),(0,i.kt)("li",{parentName:"ul"},"this information appears in the JSON output for further codegen or for analysis (See Chapter 13)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@DECLARE_SCHEMA_REGION"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@DECLARE_DEPLOYABLE_REGION"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@BEGIN_SCHEMA_REGION"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@END_SCHEMA_REGION")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These directives control the declaration of schema regions and allow you to place things into those regions -- see ",(0,i.kt)("a",{parentName:"li",href:"https://cgsql.dev/cql-guide/ch10"},"Chapter 10"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@SCHEMA_AD_HOC_MIGRATION")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allows for the creation of a ad hoc migration step at a given schema version, (See Chapter 10)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@ECHO")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Emits text into the C output stream, useful for emiting things like function prototypes or preprocessor directives"),(0,i.kt)("li",{parentName:"ul"},"e.g. `echo C, '#define foo bar'")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@RECREATE"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@CREATE"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@DELETE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"used to mark the schema version where an object is created or deleted, or alternatively indicate the the object is always dropped and recreated when it changes (See Chapter 10)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@SCHEMA_UPGRADE_VERSION")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"used to indicate that the code that follows is part of a migration script for the indicated schema version"),(0,i.kt)("li",{parentName:"ul"},"this has the effect of making the schema appear to be how it existed at the indicated version"),(0,i.kt)("li",{parentName:"ul"},"the idea here is that migration procedures operate on previous versions of the schema where (e.g.) some columns/tables hadn't been deleted yet")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@PREVIOUS_SCHEMA")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"indicates the start of the previous version of the schema for comparison (See Chapter 11)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@SCHEMA_UPGRADE_SCRIPT")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CQL emits a schema upgrade script as part of its upgrade features, this script declares tables in their final form but also creates the same tables as they existed when they were first created"),(0,i.kt)("li",{parentName:"ul"},"this directive instructs CQL to ignore the incompatible creations, the first declaration controls"),(0,i.kt)("li",{parentName:"ul"},"the idea here is that the upgrade script is in the business of getting you to the finish line in an orderly fashion and some of the interim steps are just not all the way there yet"),(0,i.kt)("li",{parentName:"ul"},"note that the upgrade script recapitulates the version history, it does not take you directly to the finish line, this is so that all instances get to the same place the same way (and this fleshes out any bugs in migration)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@DUMMY_NULLABLES"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@DUMMY_DEFAULTS"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"@DUMMY_SEED")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"these control the creation of dummy data for ",(0,i.kt)("inlineCode",{parentName:"li"},"insert")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"fetch")," statements (See Chapters 5 and 12)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@FILE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a string literal that corresponds to the current file name with a prefix stripped (to remove build lab junk in the path)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@ATTRIBUTE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the main purpose of ",(0,i.kt)("inlineCode",{parentName:"p"},"@attribute")," is to appear in the JSON output so that it can control later codegen stages in whatever way you deem appropriate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the nested nature of attribute values is sufficiently flexible than you could encode an arbitrary LISP program in an attribute, so really anything you might need to express is possible")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"there are a number of attributes known to the compiler which I list below (complete as of this writing)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:autodrop=(table1, table2, ...)")," when present the indicated tables, which must be temp tables, are dropped when the results of the procedure have been fetched into a rowset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:identity=(column1, column2, ...)")," the indicated columns are used to create a row comparator for the rowset corresponding to the procedure, this appears in a C macro of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"procedure_name_row_same(rowset1, row1, rowset2, row2)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:suppress_getters")," the annotated procedure should not emit its related column getter functions."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Useful if you only indend to call the procedure from CQL."),(0,i.kt)("li",{parentName:"ul"},"Saves code generation and removes the possibility of C code using the getters."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:suppress_result_set"),' the annotated procedure should not emit its related "fetch results" function.'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Useful if you only indend to call the procedure from CQL."),(0,i.kt)("li",{parentName:"ul"},"Saves code generation and removes the possibility of C code using the result set or getters."),(0,i.kt)("li",{parentName:"ul"},"Implies ",(0,i.kt)("inlineCode",{parentName:"li"},"cql:suppress_getters"),"; since there is no result set, getters would be redundant."),(0,i.kt)("li",{parentName:"ul"},"Note: an ",(0,i.kt)("inlineCode",{parentName:"li"},"OUT UNION")," procedure cannot have a suppressed result set since all such a procedure does is produce a result set. This attribute is ignored for out union procedures."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:private")," the annotated procedure will be static in the generated C"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Because the generated function is ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," it cannot be called from other modules and therefore will not go in any CQL exports file (that would be moot since you couldn't call it)."),(0,i.kt)("li",{parentName:"ul"},"This attribute also implies ",(0,i.kt)("inlineCode",{parentName:"li"},"cql:suppress_result_set")," since only CQL code in the same translation unit could possibly call it and hence the result set procedure is useless to other C code."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:generate_copy")," the code generation for the annotated procedure will produce a ",(0,i.kt)("inlineCode",{parentName:"p"},"[procedure_name]_copy")," function that can make complete or partial copies of its result set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:base_fragment=frag_name")," used for base fragments (See ",(0,i.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch14#base-query-fragments"},"Chapter 14"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:extension_fragment=frag_name")," used for extension fragments (See ",(0,i.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch14#extension-query-fragments"},"Chapter 14"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:assembly_fragment=frag_name")," used for assembly fragments (See ",(0,i.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch14#extension-query-fragments"},"Chapter 14"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:shared_fragment")," is used to create shared fragments (See ",(0,i.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch14#shared-fragments"},"Chapter 14"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:no_table_scan")," for query plan processing, indicates that the table in question should never be table scanned in any plan (for better diagnostics)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cql:autotest=([many forms])")," declares various autotest features (See Chapter 12)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@attribute(cql:query_plan_branch=[integer])")," is by the query plan generator to determine which conditional branch to use in query plan analysis when a shared fragment that contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"IF")," statement is used. (See ",(0,i.kt)("a",{parentName:"p",href:"/cql-guide/ch15"},"Chapter 15"),")"))))}d.isMDXComponent=!0}}]);