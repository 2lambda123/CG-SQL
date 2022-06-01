"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6769],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"ch08",title:"Chapter 8: Functions",sidebar_label:"Chapter 8: Functions"},s=void 0,c={unversionedId:"ch08",id:"ch08",title:"Chapter 8: Functions",description:"\x3c!---",source:"@site/../CQL_Guide/ch08.md",sourceDirName:".",slug:"/ch08",permalink:"/cql-guide/ch08",draft:!1,tags:[],version:"current",lastUpdatedBy:"Ashwin Kashyap",lastUpdatedAt:1654122479,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"ch08",title:"Chapter 8: Functions",sidebar_label:"Chapter 8: Functions"},sidebar:"someSidebar",previous:{title:"Chapter 7: CQL Result Sets",permalink:"/cql-guide/ch07"},next:{title:"Chapter 9: Statements Summary and Error Checking",permalink:"/cql-guide/ch09"}},u={},p=[{value:"Function Types",id:"function-types",level:3},{value:"Ordinary Scalar Functions",id:"ordinary-scalar-functions",level:4},{value:"SQL Scalar Functions",id:"sql-scalar-functions",level:4},{value:"SQL Table Valued Functions",id:"sql-table-valued-functions",level:4},{value:"SQL Functions with Unchecked Parameter Types",id:"sql-functions-with-unchecked-parameter-types",level:3},{value:"Notes on Builtin Functions",id:"notes-on-builtin-functions",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CQL stored procs have a very simple contract so it is easy to declare procedures and then implement them in regular C; the C functions just have to conform to the contract.  However, CQL procedures have their own calling conventions and this makes it very inconvenient to use external code that is not doing database things and wants to return values.  Even a random number generator or something would be difficult to use because it could not be called in the context of an expression.  To allow for this CQL adds declared functions"),(0,r.kt)("p",null,"In another example of the two-headed nature of CQL, there are two ways to declare functions.  As we have already\nseen you can make function-like procedures and call them like functions simply by making a procedure with an ",(0,r.kt)("inlineCode",{parentName:"p"},"out")," parameter. However, there are also cases where it is reasonable to make function calls to external functions of other kinds.  There are three major types of functions you might wish to call."),(0,r.kt)("h3",{id:"function-types"},"Function Types"),(0,r.kt)("h4",{id:"ordinary-scalar-functions"},"Ordinary Scalar Functions"),(0,r.kt)("p",null,"These functions are written in regular C and provide for the ability to do operations on in-memory objects.  For instance,\nyou could create functions that allow you to read and write from a dictionary.  You can declare these functions like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"declare function dict_get_value(dict object, key_ text not null) text;\n")),(0,r.kt)("p",null,"Such a function is not known to SQLite and therefore cannot appear in SQL statements.  CQL will enforce this."),(0,r.kt)("p",null,"The above function returns a text reference, and, importantly, this is a borrowed reference.  The dictionary\nis presumably holding on to the reference and as long as it is not mutated the reference is valid.  CQL will\nretain this reference as soon as it is stored and release it automatically when it is out of scope.  So, in\nthis case, the dictionary continues to own the object."),(0,r.kt)("p",null,"It is also possible to declare functions that create objects.  Such as this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"declare function dict_create() create object;\n")),(0,r.kt)("p",null,"This declaration tells CQL that the function will create a new object for our use.  CQL does not retain the\nprovided object, rather assuming ownership of the presumably one reference count the object already has.\nWhen the object goes out of scope it is released as usual."),(0,r.kt)("p",null,"If we also declare this procedure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"declare procedure dict_add(\n    dict object not null,\n    key_ text not null,\n    value text not null);\n")),(0,r.kt)("p",null,"then with this family of declarations we could write something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'create proc create_and_init(out dict object not null)\nbegin\n  set dict := dict_create();\n  call dict_add(dict, "k1", "v1");\n  call dict_add(dict, "k2", "v2");\n  if (dict_get_value(dict, "k1") == dict__get_value(dict, "k2)) then\n    call printf("insanity has ensued\\n");\n  end if;\nend;\n')),(0,r.kt)("p",null,"Note: Ordinary scalar functions may not use the database in any way. When they are invoked they will not\nbe provided with the database pointer and so they will be unable to do any database operations.  To do\ndatabase operations, use regular procedures.  You can create a function-like-procedure using the ",(0,r.kt)("inlineCode",{parentName:"p"},"out")," convention\ndiscussed previously."),(0,r.kt)("h4",{id:"sql-scalar-functions"},"SQL Scalar Functions"),(0,r.kt)("p",null,"SQLite includes the ability to add new functions to its expressions using ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite3_create_function"),".  In\norder to use this function in CQL, you must also provide its prototype definition to the compiler.  You\ncan do so following this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"declare select function strencode(t text not null) text not null;\n")),(0,r.kt)("p",null,"This introduces the function ",(0,r.kt)("inlineCode",{parentName:"p"},"strencode")," to the compiler for use in SQL constructs.  With this done you\ncould write a procedure something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table foo(id integer, t text);\n\ncreate procedure bar(id_ integer)\nbegin\n   select strencode(T1.t) from foo T1 where T1.id = id_;\nend;\n")),(0,r.kt)("p",null,'This presumably returns the "encoded" text, whatever that might be.  Note that if ',(0,r.kt)("inlineCode",{parentName:"p"},"sqlite3_create_function"),"\nis not called before this code runs, a run-time error will ensue.  Just as CQL must assume that declared\ntables really are created, it also assumes that declared function really are created.  This is another case\nof telling the compiler in advance what the situation will be at runtime."),(0,r.kt)("p",null,"SQLite allows for many flexible kinds of user defined functions.  CQL doesn't concern itself with the details of the implementation of the function, it only needs the signature so that it can validate calls."),(0,r.kt)("p",null,"Note that SQL Scalar Functions cannot contain ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," parameters. To pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", you should instead pass\nthe memory address of this object using a ",(0,r.kt)("inlineCode",{parentName:"p"},"LONG INT")," parameter. To access the address of an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," at runtime, you should use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ptr()")," function. See ",(0,r.kt)("a",{parentName:"p",href:"#notes-on-builtin-functions"},"the notes section below")," for more information."),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/c3ref/create_function.html"},"Create Or Redefine SQL Functions"),"."),(0,r.kt)("h4",{id:"sql-table-valued-functions"},"SQL Table Valued Functions"),(0,r.kt)("p",null,'More recent versions of SQLite also include the ability to add table-valued functions to statements in place of actual tables. These functions can use their arguments to create a "virtual table" value for use in place of a table.  For this\nto work, again SQLite must be told of the existence of the table.  There are a series of steps to make this happen\nbeginning with ',(0,r.kt)("inlineCode",{parentName:"p"},"sqlite3_create_module"),' which are described in the SQLite documents under "The Virtual Table Mechanism Of SQLite."'),(0,r.kt)("p",null,"Once that has been done, a table-valued function can be defined for most object types.  For instance it is possible to\ncreate a table-valued function like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"declare select function dict_contents(dict object not null)\n   (k text not null, v text not null);\n")),(0,r.kt)("p",null,"This is just like the previous type of select function but the return type is a table shape.  Once the above has been done you can legally write something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create proc read_dict(dict object not null, pattern text)\nbegin\n  if pattern is not null then\n    select k, v from dict_contents(dict) T1 where T1.k LIKE pattern;\n  else\n    select k, v from dict_contents(dict);\n  end if;\nend;\n")),(0,r.kt)("p",null,"This construct is very general indeed but the runtime set up for it is much more complicated than scalar functions\nand only more modern versions of SQLite even support it."),(0,r.kt)("h3",{id:"sql-functions-with-unchecked-parameter-types"},"SQL Functions with Unchecked Parameter Types"),(0,r.kt)("p",null,"Certain SQL functions like ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/json1.html#jex"},(0,r.kt)("inlineCode",{parentName:"a"},"json_extract"))," are variadic (they accept variable number of arguments). To use such functions within CQL, you can declare a SQL function to have untyped parameters by including the ",(0,r.kt)("inlineCode",{parentName:"p"},"NO CHECK")," clause instead of parameter types."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"declare select function json_extract no check text;\n")),(0,r.kt)("p",null,"This is also supported for SQL table-valued functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"declare select function table_valued_function no check (t text, i int);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: currently the ",(0,r.kt)("inlineCode",{parentName:"p"},"NO CHECK")," clause is not supported for non SQL ",(0,r.kt)("a",{parentName:"p",href:"#Ordinary-Scalar-Functions"},"Ordinary Scalar Functions"),".")),(0,r.kt)("h3",{id:"notes-on-builtin-functions"},"Notes on Builtin Functions"),(0,r.kt)("p",null,"Some of the SQLite builtin functions are hard-coded;  these are the functions that have semantics that are not readily captured with a simple prototype.  Other SQLite functions can be declared with ",(0,r.kt)("inlineCode",{parentName:"p"},"declare select function ...")," and then used."),(0,r.kt)("p",null,"CQL's hard-coded builtin list includes:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Aggregate Functions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"count"),(0,r.kt)("li",{parentName:"ul"},"max"),(0,r.kt)("li",{parentName:"ul"},"min"),(0,r.kt)("li",{parentName:"ul"},"sum"),(0,r.kt)("li",{parentName:"ul"},"total"),(0,r.kt)("li",{parentName:"ul"},"avg"),(0,r.kt)("li",{parentName:"ul"},"average"),(0,r.kt)("li",{parentName:"ul"},"group_concat")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Scalar Functions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ifnull"),(0,r.kt)("li",{parentName:"ul"},"nullif"),(0,r.kt)("li",{parentName:"ul"},"upper"),(0,r.kt)("li",{parentName:"ul"},"char"),(0,r.kt)("li",{parentName:"ul"},"abs"),(0,r.kt)("li",{parentName:"ul"},"instr"),(0,r.kt)("li",{parentName:"ul"},"coalesce"),(0,r.kt)("li",{parentName:"ul"},"last_insert_rowid"),(0,r.kt)("li",{parentName:"ul"},"printf"),(0,r.kt)("li",{parentName:"ul"},"strftime"),(0,r.kt)("li",{parentName:"ul"},"date"),(0,r.kt)("li",{parentName:"ul"},"time"),(0,r.kt)("li",{parentName:"ul"},"datetime"),(0,r.kt)("li",{parentName:"ul"},"julianday"),(0,r.kt)("li",{parentName:"ul"},"substr"),(0,r.kt)("li",{parentName:"ul"},"replace"),(0,r.kt)("li",{parentName:"ul"},"round"),(0,r.kt)("li",{parentName:"ul"},"trim"),(0,r.kt)("li",{parentName:"ul"},"ltrim"),(0,r.kt)("li",{parentName:"ul"},"rtrim")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Window Functions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"row_number"),(0,r.kt)("li",{parentName:"ul"},"rank"),(0,r.kt)("li",{parentName:"ul"},"dense_rank"),(0,r.kt)("li",{parentName:"ul"},"percent_rank"),(0,r.kt)("li",{parentName:"ul"},"cume_dist"),(0,r.kt)("li",{parentName:"ul"},"ntile"),(0,r.kt)("li",{parentName:"ul"},"lag"),(0,r.kt)("li",{parentName:"ul"},"lead"),(0,r.kt)("li",{parentName:"ul"},"first_value"),(0,r.kt)("li",{parentName:"ul"},"last_value"),(0,r.kt)("li",{parentName:"ul"},"nth_value")),(0,r.kt)("p",null,"Special Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nullable"),(0,r.kt)("li",{parentName:"ul"},"sensitive"),(0,r.kt)("li",{parentName:"ul"},"ptr")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," casts an operand to the nullable version of its type and otherwise does nothing.  This cast might be useful if you need an exact type match in a situation.  It is stripped from any generated SQL and generated C so it has no runtime effect at all other than the indirect consequences of changing the storage class of its operand."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Sensitive")," casts an operand to the sensitive version of its type and otherwise does nothing.  This cast might be useful if you need an exact type match in a situation.  It is stripped from any generated SQL and generated C so it has no runtime effect at all other than the indirect consequences of changing the storage class of its operand."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ptr")," is used to cause a reference type variable to be bound as a long integer to SQLite. This is a way of giving object pointers to SQLite UDFs. Not all versions of Sqlite support\nbinding object variables, so passing memory addresses is the best we can do on all versions."))}h.isMDXComponent=!0}}]);