(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(154)),i=["components"],c={slug:"result-variable",title:"Introducing @RC builtin variable",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},l={permalink:"/blog/result-variable",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2021-02-21-result-variable.md",source:"@site/blog/2021-02-21-result-variable.md",description:"We've long needed a way to see the most recent SQLite result code SQLite in the context",date:"2021-02-21T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],title:"Introducing @RC builtin variable",readingTime:.72,truncated:!1,prevItem:{title:"Introducing Shared Fragments",permalink:"/blog/shared-fragments-intro"},nextItem:{title:"Introducing Select .. If Nothing",permalink:"/blog/select-if-nothing"}},u=[],s={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We've long needed a way to see the most recent SQLite result code SQLite in the context\nof say a ",Object(a.b)("inlineCode",{parentName:"p"},"catch")," block (most other times you can assume SQLITE_OK was the last\nresult code otherwise control flow would transfer elsewhere. Sometimes SQLITE_ROW\nor SQLITE_DONE might be the current result code."),Object(a.b)("p",null,"Soon we'll provide a sample header that declares the most common error codes in an enum but\nfor now you could do something like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sql"},"-- pasted from the sqlite.c\n#define SQLITE_BUSY         5   /* The database file is locked */\n\n-- this is a contrived example\ncreate proc get_first_foo(out can_retry bool not null)\nbegin\n\n  -- can_retry is set to 0 automatically, language semantics guarantee this\n\n  begin try\n    select foo from bar limit 1;\n  end try;\n  begin catch\n    set can_retry := (@rc == SQLITE_BUSY);\n    throw; -- rethrow the original error\n  end catch;\nend;\n")))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);