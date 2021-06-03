(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(137)),s=["components"],c={slug:"boxed-cursors-intro",title:'More Flexible Cursor Patterns Using "Boxing"',author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql","cursors"]},l={permalink:"/blog/boxed-cursors-intro",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2020-11-15-boxed-cursors.md",source:"@site/blog/2020-11-15-boxed-cursors.md",description:"I was reviewing the update posting that just went out and I realized I'd forgotten to mention another big ticket item. So",date:"2020-11-15T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"},{label:"cursors",permalink:"/blog/tags/cursors"}],title:'More Flexible Cursor Patterns Using "Boxing"',readingTime:3.66,truncated:!1,prevItem:{title:"Introducing General Purpose Error Tracing",permalink:"/blog/error-tracing-intro"},nextItem:{title:"One Month Update",permalink:"/blog/update"}},i=[],u={rightToc:i};function b(e){var t=e.components,r=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I was reviewing the update posting that just went out and I realized I'd forgotten to mention another big ticket item. So\nconsider this an appendix to the update."),Object(o.b)("p",null,'In some cases we started seeing a need to "ship cursors around" a little bit more flexibly.\nNote shipping values around is already doable so this new work is largely about being able to create a "statement cursor"\nin one procedure and consume it safely elsewhere.  The general pattern looks like this:'),Object(o.b)("p",null,"Declare a statement cursor as usual, maybe something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare C cursor for select * from shape_source;\n\n-- or\n\ndeclare C cursor for call proc_that_returns_a_shape();\n")),Object(o.b)("p",null,"Make an object that can hold a cursor:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare obj object<T cursor>;\n")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"T")," is the name of a shape. It can be a table name, or a view name, or it can be the name of the canonical procedure that returns the result.  You really want this to be  some kind of global name though.  Something you can get with a ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," in various places. In this case choices for ",Object(o.b)("inlineCode",{parentName:"p"},"T")," might be ",Object(o.b)("inlineCode",{parentName:"p"},"shape_source")," the table or ",Object(o.b)("inlineCode",{parentName:"p"},"proc_that_returns_a_shape")," the procedure."),Object(o.b)("p",null,"Remember you can always make a fake procedure that returns a result to sort of typedef a shape name.  e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare proc my_shape() (id integer not null, name text);\n")),Object(o.b)("p",null,"The procedure here ",Object(o.b)("inlineCode",{parentName:"p"},"my_shape")," doesn\u2019t have to actually ever be created, in fact it\u2019s probably better if it doesn\u2019t.  You won\u2019t call it, you\u2019re just using its hypothetical result as a shape.  This could be useful if you have several procedures like ",Object(o.b)("inlineCode",{parentName:"p"},"proc_that_returns_a_shape")," that all return ",Object(o.b)("inlineCode",{parentName:"p"},"my_shape"),"."),Object(o.b)("p",null,"At this point you could use the cursor maybe something like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"loop fetch C\nbegin\n  -- do stuff with C\nend;\n")),Object(o.b)("p",null,"Those are the usual patterns and they let you consume statement cursors sort of \u201cup\u201d from where it was created, but what if you want some worker procedures that consume a cursor there is no good way to pass your cursor down again.  Well, there wasn't. Now there is.  Let's go back to that box object creation and use it"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"-- recap: declare the box that holds the cursor (T changed to my_shape for this example)\ndeclare obj object<my_shape cursor>;\n\n-- box the cursor into the object (the cursor shape must match the box shape)\nset obj from cursor C;\n")),Object(o.b)("p",null,"The variable ",Object(o.b)("inlineCode",{parentName:"p"},"obj"),' can now be passed around as usual.  Then, later, you can "unbox" it to get a cursor back. Like so'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"-- unboxing a cursor from an object\ndeclare D cursor for obj;\n")),Object(o.b)("p",null,"These primitives will allow cursors to be passed around with managed lifetime.\nExample:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"-- consumes a cursor\ncreate proc cursor_user(box object<my_shape cursor>)\nbegin\n   declare C cursor for box;  -- the cursors shape will be my_shape matching box\n   loop fetch C\n   begin\n      -- do something with C\n   end;\nend;\n\n-- captures a cursor and passes it on\ncreate proc cursor_boxer()\nbegin\n   declare C cursor for select * from something_like_my_shape;\n   declare box object<my_shape cursor>\n   set box from cursor C; -- produces error if shape doesn't match\n   call cursor_user(box);\nend;\n")),Object(o.b)("p",null,"Importantly, once you box a cursor the underlying SQLite statement\u2019s lifetime is managed by the box object with normal\nretain/release semantics so timely release becomes imperative."),Object(o.b)("p",null,"With this pattern it's possible to, for instance, consume some of the rows in one procedure and the rest in another procedure."),Object(o.b)("p",null,"Now, the main reason for doing this is if you have some standard helper methods that can get a cursor from a variety of places and process it.\nBut remember, that boxing isn\u2019t the usual pattern at all and returning cursors in a box, while possible, should be avoided in favor of the simpler\npattern of doing your ",Object(o.b)("inlineCode",{parentName:"p"},"select")," or ",Object(o.b)("inlineCode",{parentName:"p"},"call")," at the end to compute the result as we do now, if only because then then lifetime is very simple in all those cases.\nDurably storing a boxed cursor could lead to all manner of problems -- it's just like holding on to a ",Object(o.b)("inlineCode",{parentName:"p"},"sqlite3_stmt *"),' for a long time.\nActually "just like" is an understatement, it\'s ',Object(o.b)("em",{parentName:"p"},"exactly")," the same as holding on to a statement for a long time with all the same problems because that\nis exactly what's going on here."),Object(o.b)("p",null,"So, good generalization, but possibly less Pit of Success, especially with complex box patterns.  So watch the sharp edges."))}b.isMDXComponent=!0},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,h=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return r?a.a.createElement(h,c(c({ref:t},i),{},{components:r})):a.a.createElement(h,c({ref:t},i))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);