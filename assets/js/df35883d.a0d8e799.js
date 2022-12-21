"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[800],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,p=f["".concat(l,".").concat(d)]||f[d]||c[d]||o;return n?a.createElement(p,s(s({ref:t},m),{},{components:n})):a.createElement(p,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6654:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={slug:"shared-fragments-intro",title:"Introducing Shared Fragments",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},l=void 0,u={permalink:"/blog/shared-fragments-intro",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2021-12-14-shared-fragments.md",source:"@site/blog/2021-12-14-shared-fragments.md",title:"Introducing Shared Fragments",description:"Shared fragments are a real game-changer for CQL.",date:"2021-12-14T00:00:00.000Z",formattedDate:"December 14, 2021",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],readingTime:7.845,hasTruncateMarker:!1,authors:[{name:"CG/SQL Team",title:"Maintainer of CG/SQL",url:"https://github.com/facebookincubator",imageURL:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4"}],frontMatter:{slug:"shared-fragments-intro",title:"Introducing Shared Fragments",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},prevItem:{title:"Control Flow Analysis in CQL",permalink:"/blog/flow-analysis"},nextItem:{title:"Introducing @RC builtin variable",permalink:"/blog/result-variable"}},m={authorsImageUrls:[void 0]},c=[{value:"Generics",id:"generics",level:3},{value:"Conditionals",id:"conditionals",level:3},{value:"Validation",id:"validation",level:3}],f={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Shared fragments are a real game-changer for CQL."),(0,o.kt)("p",null,"Remember, these are designed to let you write part of a query and then substitute in parameters.  So it's like a parameterized view in normal SQL terms.  But actually it's more powerful than that, fragments also provide features that are more like Java generics.  Let's do some examples."),(0,o.kt)("p",null,"Suppose we have a procedure which looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC get_stuff(to_include_ text, to_exclude_ text)\nBEGIN\n  WITH\n  to_exclude_recursive_query (tok, rest) AS (\n    SELECT\n      '',\n      to_exclude_ || ','\n    UNION ALL\n    SELECT\n      substr(rest, 1, instr(rest, ',') - 1),\n      substr(rest, instr(rest, ',') + 1)\n    FROM to_exclude_recursive_query\n    WHERE rest <> ''\n  ),\n  to_exclude (id) AS (\n    SELECT CAST(tok AS LONG)\n    FROM to_exclude_recursive_query\n    WHERE tok <> ''\n  )\n  to_include_recursive_query (tok, rest) AS (\n    SELECT\n      '',\n      to_include_ || ','\n    UNION ALL\n    SELECT\n      substr(rest, 1, instr(rest, ',') - 1),\n      substr(rest, instr(rest, ',') + 1)\n    FROM to_include_recursive_query\n    WHERE rest <> ''\n  ),\n  to_include (id) AS (\n    SELECT CAST(tok AS LONG)\n    FROM to_include_recursive_query\n    WHERE tok <> ''\n  )\n  SELECT * from stuff S\n  WHERE\n    S.id in (select * from to_include) AND\n    S.id not in (select * from to_exclude);\nEND;\n")),(0,o.kt)("p",null,"With shared fragments you could write something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC split_commas(str text)\nBEGIN\n  WITH splitter(tok, rest) AS (\n    SELECT '', IFNULL(str || ',', '')\n    UNION ALL\n    SELECT\n      substr(rest, 1, instr(rest, ',') - 1),\n      substr(rest, instr(rest, ',') + 1)\n    FROM splitter\n    WHERE rest <> '')\n  select tok from splitter where tok <> '';\nEND;\n\n@attribute(cql:shared_fragment)\nCREATE PROC ids_from_string(str text)\nBEGIN\n  WITH toks(tok) AS (CALL split_commas(str))\n  SELECT CAST(tok AS LONG) AS id from toks;\nEND;\n")),(0,o.kt)("p",null,"We now have a shared fragment called ",(0,o.kt)("inlineCode",{parentName:"p"},"split_commas")," which can be anywhere like maybe in a standard include file.  There are some immediate benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the fragment is compiled on its own before usage so any errors are reported in the fragment",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"in contrast, with macros you get errors when you try to use the macro and they are all charged to the line the macro appears on so it's hopeless figuring out what's wrong"))),(0,o.kt)("li",{parentName:"ul"},"the text of the shared fragment will be the same, so it can be re-used in all locations, this can be a big binary size savings",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"in contrast, macros are pre-processed before CQL ever sees the text so it doesn't \"know\" it's the same code"))),(0,o.kt)("li",{parentName:"ul"},"fragments compose cleanly as we'll see; and they have typed arguments"),(0,o.kt)("li",{parentName:"ul"},"fragments can be independently tested outside of the context in which they appear",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"make a test context and explore the fragment, no worries about it breaking on edge cases later")))),(0,o.kt)("p",null,"The first fragment called ",(0,o.kt)("inlineCode",{parentName:"p"},"split_commas")," does exactly what it sounds like, it takes a string argument and makes a list of the strings in it."),(0,o.kt)("p",null,"The second fragment uses the first to split a string and then it converts all the strings to long integers."),(0,o.kt)("p",null,"Now instead of the above we could write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"#include <stringsplit.sql> /* whereever you put the fragments */\n\nCREATE PROC get_stuff(to_include_ text, to_exclude_ text)\nBEGIN\n  WITH\n    to_include(id) AS (CALL ids_from_string(to_include_)),\n    to_exclude(id) AS (CALL ids_from_string(to_exclude_))\n  SELECT * from stuff S\n  WHERE\n    S.id in (select * from to_include) AND\n    S.id not in (select * from to_exclude);\nEND;\n")),(0,o.kt)("p",null,"And of course since ",(0,o.kt)("inlineCode",{parentName:"p"},"ids_from_string")," is somewhere shared (",(0,o.kt)("inlineCode",{parentName:"p"},"stringsplit.sql"),") so these fragments can be used\nall over your code and you'll only pay for the text one time.  This gives you great flexibility, very much\nlike parameterized views. You can have any number of these fragments, they will share code, they compose like crazy\nand there is no schema cost!"),(0,o.kt)("h3",{id:"generics"},"Generics"),(0,o.kt)("p",null,"A series of useful fragments for generating data would go a long way but there are other applications\nof fragments and you might want to operate on various data sources without hard coding them all.  This is\nwhere the generic form of fragments comes in. Consider a case where you want to be able to filter ",(0,o.kt)("inlineCode",{parentName:"p"},"stuff"),"\nby say name and age.  You could create this fragment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC filter_stuff(\n  pattern_ text not null,\n  min_age_ integer not null,\n  max_age_ integer not null)\nBEGIN\n  WITH\n    source(*) LIKE stuff\n  SELECT * from source S\n  WHERE\n    S.name LIKE pattern_ AND\n    S.age BETWEEN min_age_ and max_age_;\nEND;\n")),(0,o.kt)("p",null,"Now imagine that we had added the shared fragment annotation to ",(0,o.kt)("inlineCode",{parentName:"p"},"get_stuff")," (just like the above).\nWe could then write the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC the_right_stuff(\n  to_include_ text,\n  to_exclude_ text,\n  pattern_ text not null,\n  min_age_ integer not null,\n  max_age_ integer not null)\nBEGIN\n  WITH\n    get_stuff(*) AS (call get_stuff(to_include_, to_exclude_)),\n    filter_stuff(*) AS (call filter_stuff(pattern_, min_age_, max_age_)\n      using get_stuff as source)\n  SELECT * from filter_stuff S\n  ORDER BY name\n  LIMIT 5;\nEND;\n")),(0,o.kt)("p",null,"Or with some sugar to forward arguments and assume the CTE name matches, more economically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC the_right_stuff(\n  to_include_ text,\n  to_exclude_ text,\n  pattern_ text not null,\n  min_age_ integer not null,\n  max_age_ integer not null)\nBEGIN\n  WITH\n    (call get_stuff(*)),\n    (call filter_stuff(*) using get_stuff as source)\n  SELECT * from filter_stuff S\n  ORDER BY name\n  LIMIT 5;\nEND;\n")),(0,o.kt)("p",null,"The arg syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"(*)")," simply indicates that the arg names in the caller should match to the same names in the callee.  In\ngeneral ",(0,o.kt)("inlineCode",{parentName:"p"},"call foo(*)")," expands to ",(0,o.kt)("inlineCode",{parentName:"p"},"call foo(from arguments like foo arguments)"),".  ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," is rather more economical than that."),(0,o.kt)("p",null,"In this example ",(0,o.kt)("inlineCode",{parentName:"p"},"filter_stuff")," doesn't know where its data will be coming from, you bind its table parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"source"),"\nto a compatible data source of your choice. For example, this would also be legal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC almost_the_right_stuff(\n  pattern_ text not null,\n  min_age_ integer not null,\n  max_age_ integer not null)\nBEGIN\n  WITH\n    (call filter_stuff(*) using stuff as source)\n  SELECT * from filter_stuff S\n  ORDER BY name\n  LIMIT 5;\nEND;\n")),(0,o.kt)("h3",{id:"conditionals"},"Conditionals"),(0,o.kt)("p",null,"It's often desirable to have some options in the generated SQL without having to fork your entire query.  Shared\nfragments address this as well with the conditional form.  In this form the top level of the fragment is an\n",(0,o.kt)("inlineCode",{parentName:"p"},"IF")," statement and there are a number of alternatives.  Here are some simple modifications to the above that illustrate\nsome of the possibilities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC filter_stuff(\n  pattern_ text,\n  min_age_ integer not null,\n  max_age_ integer not null)\nBEGIN\n  IF pattern_ IS NOT NULL THEN\n    WITH\n        source(*) LIKE stuff\n    SELECT * from source S\n    WHERE\n        S.name LIKE pattern_ AND\n        S.age BETWEEN min_age_ and max_age_;\n  ELSE\n    WITH\n        source(*) LIKE stuff\n    SELECT * from source S\n    WHERE\n        S.age BETWEEN min_age_ and max_age_;\n  END IF;\nEND;\n")),(0,o.kt)("p",null,"In the above if the input pattern is NULL then it is not considered, it won't be part of the generated SQL at all. Note that\n",(0,o.kt)("inlineCode",{parentName:"p"},"source")," (same name) appears in both branches and therefore must be the same type as it will be fulfilled by one actual table\nparameter."),(0,o.kt)("p",null,"Now the above could have been achieved with something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"pattern_ IS NULL OR S.name LIKE pattern_\n")),(0,o.kt)("p",null,"But that would have no useful selectivity.  But in general you might be able to avoid joins and so forth\nwith your constraints.  Consider something like this hypothetical:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC filter_stuff(\n  pattern_ text,\n  min_age_ integer not null,\n  max_age_ integer not null)\nBEGIN\n  IF pattern_ IS NOT NULL THEN\n    WITH\n        source(*) LIKE stuff\n    SELECT DISTINCT S.* from source S\n    INNER JOIN keywords K\n    WHERE\n        K.keyword LIKE pattern_ AND\n        S.age BETWEEN min_age_ and max_age_;\n  ELSE\n    WITH\n        source(*) LIKE stuff\n    SELECT * from source S\n    WHERE\n        S.age BETWEEN min_age_ and max_age_;\n  END IF;\nEND;\n")),(0,o.kt)("p",null,"Here we save the DISTINCT and the JOIN if there is no pattern which might be important.  Of course\nthere are probably better ways to match keywords but this is just an illustration of what's possible."),(0,o.kt)("p",null,"There are numerous ways this flexibility can be used, again a simple example, a real schema\ntransform would be more complex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC get_stuff(\n  to_include_ text,\n  to_exclude_ text,\n  schema_v2 bool not null)\nBEGIN\n  IF schema_v2 THEN\n    WITH\n        to_include(id) AS (CALL ids_from_string(to_include_)),\n        to_exclude(id) AS (CALL ids_from_string(to_exclude_))\n    SELECT * from stuff_2 S\n    WHERE\n        S.id in (select * from to_include) AND\n        S.id not in (select * from to_exclude);\n  ELSE\n    WITH\n        to_include(id) AS (CALL ids_from_string(to_include_)),\n        to_exclude(id) AS (CALL ids_from_string(to_exclude_))\n    SELECT * from stuff S\n    WHERE\n        S.id in (select * from to_include) AND\n        S.id not in (select * from to_exclude);\n   END IF;\nEND;\n")),(0,o.kt)("h3",{id:"validation"},"Validation"),(0,o.kt)("p",null,"All of this requires a bunch of checking, at least this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the LIKE forms can only appear in a shared fragment"),(0,o.kt)("li",{parentName:"ul"},"the CALL forms must refer to shared fragments"),(0,o.kt)("li",{parentName:"ul"},"the CALL args must be compatible"),(0,o.kt)("li",{parentName:"ul"},"the number and type of the provided tables in USING must be correct"),(0,o.kt)("li",{parentName:"ul"},"the shared fragment must be a single select statement or an IF statement with an ELSE",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the statement lists of the IF/ELSE combo must all be single select statements"),(0,o.kt)("li",{parentName:"ul"},"all the choices in the IF block must return the same shape (this is normal for procedures)"))),(0,o.kt)("li",{parentName:"ul"},"the shared fragment can't have any out arguments"),(0,o.kt)("li",{parentName:"ul"},"the provided fragment arguments cannot themselves use the nested SELECT construct")),(0,o.kt)("p",null,"I think this is a total game changer for SQL authoring and should go a long way to making it easier to get your work done\non SQLite. A good base set of shared fragments as part any suite of procedures seems like a good idea."),(0,o.kt)("p",null,"There are more details in the section on shared fragments in ",(0,o.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch14"},"Chapter 14")," of The Guide."),(0,o.kt)("p",null,"These features are in the current build as of today (12/14/2021)."),(0,o.kt)("p",null,"Happy Holidays and stay safe."))}d.isMDXComponent=!0}}]);