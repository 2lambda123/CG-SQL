(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(133)),i={slug:"free-empty-results",title:"Change in No-Result Semantics",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},c={permalink:"/blog/free-empty-results",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2021-02-10-free-empty-results.md",source:"@site/blog/2021-02-10-free-empty-results.md",description:"Important change in CQL semantics.",date:"2021-02-10T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],title:"Change in No-Result Semantics",readingTime:.915,truncated:!1,prevItem:{title:"Introducing Select .. If Nothing",permalink:"/blog/select-if-nothing"},nextItem:{title:'Introducing Type "Kinds"',permalink:"/blog/type-kinds-intro"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Important change in CQL semantics."),Object(a.b)("p",null,'Previously if you did an early return, or fall through the end, from a procedure that is supposed to return a result set\nbut did not in fact provide one, you would get a fake SQLITE_ERROR.  Now you get an empty result set for "free".'),Object(a.b)("p",null,"This interpretation seems much more natural and avoids a lot of really annoying stub selects to comply with the contract."),Object(a.b)("p",null,"This also works for the ",Object(a.b)("inlineCode",{parentName:"p"},"out")," statement in the same fashion."),Object(a.b)("p",null,"If you want to return an error, use ",Object(a.b)("inlineCode",{parentName:"p"},"throw"),". This is a lot more natural..."),Object(a.b)("p",null,"examples:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sql"},"-- this gives you an empty result set if x <= 0\ncreate proc maybe_return(x integer)\nbegin\n   if x > 0 then\n     select * from foo where foo.y > x;\n   end if;\nend;\n\n-- so does this\ncreate proc maybe_return(x integer)\nbegin\n  if x <= 0 then\n     return;\n  end if;\n  select * from foo where foo.y > x;\nend;\n\n-- so does this\ncreate proc maybe_out(x integer)\nbegin\n  if x <= 0 then\n    declare C cursor for select etc.\n    out C;\n  end if;\nend;\n")))}s.isMDXComponent=!0}}]);