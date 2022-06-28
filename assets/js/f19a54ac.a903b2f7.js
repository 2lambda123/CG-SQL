"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8476],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2779:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"playground",title:"CG/SQL Playground",sidebar_label:"Playground"},p=void 0,u={unversionedId:"playground",id:"playground",title:"CG/SQL Playground",description:"CQL Playground",source:"@site/../docs/playground.md",sourceDirName:".",slug:"/playground",permalink:"/docs/playground",draft:!1,tags:[],version:"current",frontMatter:{id:"playground",title:"CG/SQL Playground",sidebar_label:"Playground"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Developer Notes",permalink:"/docs/dev-notes"}},s={},c=[{value:"CQL Playground",id:"cql-playground",level:2},{value:"Query Plan Playground",id:"query-plan-playground",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cql-playground"},"CQL Playground"),(0,o.kt)("p",null,"While we do not offer an interactive REPL environment, we have bootstrapped an environment to run simple CQL programs in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/CG-SQL/tree/main/repl"},(0,o.kt)("inlineCode",{parentName:"a"},"repl")," folder of our repository"),". You can run it by doing this from the CQL repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd repl\n$ ./go.sh\n")),(0,o.kt)("p",null,"By default, you'll get this output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"../out/cql ready\nCQL Mini App Thingy\nHello from CQL.\nEdit as you please\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/CG-SQL/tree/main/repl/go.sh"},(0,o.kt)("inlineCode",{parentName:"a"},"go.sh"))," runs the ",(0,o.kt)("inlineCode",{parentName:"p"},"go()")," stored procedure defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/CG-SQL/tree/main/repl/go.sql"},(0,o.kt)("inlineCode",{parentName:"a"},"go.sql")),". You can experiment with the CQL language by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"go.sql")," file, as you please."),(0,o.kt)("p",null,"The contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"go.sh")," also offers a basic demonstration of how CQL should be typically used to transpile files into a C executable."),(0,o.kt)("h2",{id:"query-plan-playground"},"Query Plan Playground"),(0,o.kt)("p",null,"Wihtin the same ",(0,o.kt)("inlineCode",{parentName:"p"},"repl")," directory, we have a script that demonstrates ",(0,o.kt)("a",{parentName:"p",href:"/cql-guide/ch15"},"CQL's query plan generation feature")," with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/CG-SQL/tree/main/repl/go.sql"},"go.sql"),"."),(0,o.kt)("p",null,"Run this script in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/repl")," directory of the CQL repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd repl\n$ ./go_query_plan.sh\n")),(0,o.kt)("p",null,"The script will generate the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPLAIN QUERY PLAN")," of the SQL statements used in ",(0,o.kt)("inlineCode",{parentName:"p"},"go.sql"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'["Query", "Stat", "Graph"],\n[\n  "INSERT INTO my_table(str) VALUES(\\"Hello from CQL.\\"), (\\"Edit as you please.\\")",\n  [\n    [],\n    [{"value": "SCAN", "style": {"fontSize": 14, "color": "red", "fontWeight": "bold"}}, {"value": 1, "style": {"fontSize": 14, "color": "red", "fontWeight": "bold"}}],\n    []\n  ],\n  "\\n?\\n|...SCAN 2 CONSTANT ROWS"\n],\n[\n  "SELECT *\\n  FROM my_table",\n  [\n    [],\n    [{"value": "SCAN", "style": {"fontSize": 14, "color": "red", "fontWeight": "bold"}}, {"value": 1, "style": {"fontSize": 14, "color": "red", "fontWeight": "bold"}}],\n    []\n  ],\n  "\\n?\\n|...SCAN TABLE my_table"\n],\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might notice the above output has a lot of extraneous stuff, like what seems to be CSS styling in JSON format. This is something that will be addressed in the future. In the meantime, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"something like ",(0,o.kt)("inlineCode",{parentName:"a"},"jq"))," to filter stuff out. For example:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./go_query_plan.sh | jq \'.[0][0][1:-1][] | {"query": .[0], "explain": .[2]}\'\n')))))}m.isMDXComponent=!0}}]);