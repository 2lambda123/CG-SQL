(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{137:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return a?r.a.createElement(h,i(i({ref:t},b),{},{components:a})):r.a.createElement(h,i({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<l;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),l=(a(0),a(137)),o=["components"],i={slug:"virtual-table-into",title:"Introducing Virtual Tables",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},s={permalink:"/blog/virtual-table-into",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2020-12-16-virtual-table-intro.md",source:"@site/blog/2020-12-16-virtual-table-intro.md",description:"Language support for virtual tables has lagged since I always thought they were of little interest to",date:"2020-12-16T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],title:"Introducing Virtual Tables",readingTime:4.205,truncated:!1,prevItem:{title:"Introducing Named Types",permalink:"/blog/named-types-into"},nextItem:{title:"Introducing  Argument Bundles",permalink:"/blog/arg-bungle-intro"}},b=[{value:"Case 1 Example",id:"case-1-example",children:[]},{value:"Case 2 Example",id:"case-2-example",children:[]},{value:"Case 3 Example",id:"case-3-example",children:[]},{value:"Other details",id:"other-details",children:[]}],u={rightToc:b};function c(e){var t=e.components,a=Object(r.a)(e,o);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Language support for virtual tables has lagged since I always thought they were of little interest to\nthe language anyway. The ",Object(l.b)("inlineCode",{parentName:"p"},"CREATE TABLE")," forms in general are only declarations (except if you're doing\nthe schema installer/upgrader output) and so you could just declare say a temp table that corresponds to the\nvirtual table that you made in the same way that you might declare say ",Object(l.b)("inlineCode",{parentName:"p"},"sqlite_master")," if you wanted to use it.\nAnd since you have to register the module anyway, you may as well create the virtual table at the same time."),Object(l.b)("p",null,"So there was no point in adding language support for the thing."),Object(l.b)("p",null,"Furthermore the ",Object(l.b)("inlineCode",{parentName:"p"},"CREATE VIRTUAL TABLE")," form includes no information about the schema of the table so you'd\nneed some kind of declaration anyway in order to tell the language what the columns are for the table you\njust created.  So again you may as well just declare it like a normal table and not include that table in your\nschema upgrade file and be done with it."),Object(l.b)("p",null,"And that was my thinking for the last 2 years. And then I learned something."),Object(l.b)("p",null,"Virtual tables are durable."),Object(l.b)("p",null,"Yeah, I always assumed that virtual tables were temp tables and they vanish and have to be redeclared every\nsession but that is not the case.  They are part of the durable schema so while you must pre-register the\nmodule associated with the virtual table, the virtual table is like other tables in that you only create it\nonce and from then on it's part of the schema every time the database loads until you ",Object(l.b)("inlineCode",{parentName:"p"},"DROP")," it."),Object(l.b)("p",null,"This changes everything."),Object(l.b)("p",null,"With virtual tables being durable they belong in the schema upgrade process.  And if they go there they also\nhave to go into the JSON output.  But we can't use the vanilla syntax that SQLite uses because that syntax is:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"not parseable, because the module arguments can be literally anything (or nothing), even a letter to your gramma."),Object(l.b)("li",{parentName:"ul"},"the arguments do not necessarily say anything about the table's schema at all")),Object(l.b)("p",null,"So in the CQL langauge I change the syntax a bit, the generalized form looks like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"create virtual table virt_table using my_module [(module arguments)]  as (\n  id integer not null,\n  name text\n);\n")),Object(l.b)("p",null,"The part after the ",Object(l.b)("inlineCode",{parentName:"p"},"AS")," is used by CQL as a table declaration for the virtual table.  The grammar for that\nis exactly the same as a normal ",Object(l.b)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement.  However that part is not transmitted to\nSQLite; when the table is created, SQLite sees only the part it cares about, the part before the ",Object(l.b)("inlineCode",{parentName:"p"},"AS"),"."),Object(l.b)("p",null,"Now this leaves the module arguments, they can be one of three things:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"no arguments at all"),Object(l.b)("li",{parentName:"ol"},"a list of identifiers, constants, and parenthesized sublists just like in the ",Object(l.b)("inlineCode",{parentName:"li"},"@attribute")," form"),Object(l.b)("li",{parentName:"ol"},"the words ",Object(l.b)("inlineCode",{parentName:"li"},"arguments following"))),Object(l.b)("h3",{id:"case-1-example"},"Case 1 Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"create virtual table virt_table using my_module as (\n  id integer not null,\n  name text\n);\n")),Object(l.b)("p",null,"becomes (to SQLite)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"CREATE TABLE virt_table USING my_module;\n")),Object(l.b)("p",null,"Note: empty arguments ",Object(l.b)("inlineCode",{parentName:"p"},"USING my_module()")," are not allowed in the SQLite docs but do seem to work in SQLite.\nWe take the position that no args should be done with no parens, at least for now."),Object(l.b)("h3",{id:"case-2-example"},"Case 2 Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"create virtual table virt_table using my_module(foo, 'goo', (1.5, (bar, baz))) as (\n  id integer not null,\n  name text\n);\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'CREATE VIRTUAL TABLE virt_table USING my_module(foo, "goo", (1.5, (bar, baz)));\n')),Object(l.b)("p",null,"This form allows for very flexible arguments but not totally arbitary arguments, so it can still be\nparsed and validated."),Object(l.b)("h3",{id:"case-3-example"},"Case 3 Example"),Object(l.b)("p",null,"This case recognizes the popular choice that the arguments are often the actual schema declaration\nfor the table in question. So"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"create virtual table virt_table using my_module(arguments following) as (\n  id integer not null,\n  name text\n);\n")),Object(l.b)("p",null,"becomes"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"CREATE VIRTUAL TABLE virt_table USING my_module(\n  id INTEGER NOT NULL,\n  name TEXT\n);\n")),Object(l.b)("p",null,"The normalized text (keywords capitalized, whitespace normalized) of the table declaration in the ",Object(l.b)("inlineCode",{parentName:"p"},"as")," clause is used as the arguments."),Object(l.b)("h3",{id:"other-details"},"Other details"),Object(l.b)("p",null,"Virtual tables go into their own section in the JSON and they include the ",Object(l.b)("inlineCode",{parentName:"p"},"module")," and ",Object(l.b)("inlineCode",{parentName:"p"},"moduleArgs")," entries, they are additionally\nmarked ",Object(l.b)("inlineCode",{parentName:"p"},"isVirtual")," in case you want to use the same processing code for virtual tables as normal tables.  The JSON format is otherwise\nthe same, although some things can't happen in virtual tables (e.g. there is no ",Object(l.b)("inlineCode",{parentName:"p"},"TEMP")," option so ",Object(l.b)("inlineCode",{parentName:"p"},'"isTemp"')," must be false in the JSON."),Object(l.b)("p",null,"For purposes of schema processing, virtual tables are on the ",Object(l.b)("inlineCode",{parentName:"p"},"@recreate")," plan, just like indices, triggers, etc.  This is the only option since\nthe ",Object(l.b)("inlineCode",{parentName:"p"},"alter table")," form is not allowed on a virtual table."),Object(l.b)("p",null,'Semantic validation enforces "no alter statements on virtual tables" as well as other things like, no indices, and no triggers, since SQLite\ndoes not support any of those things.'),Object(l.b)("p",null,"Finally, because virtual tables are on the ",Object(l.b)("inlineCode",{parentName:"p"},"@recreate")," plan, you may not have foreign keys that reference virtual tables. Such keys seem\nlike a bad idea in any case."))}c.isMDXComponent=!0}}]);