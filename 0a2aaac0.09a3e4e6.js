(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||i;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(151)),r=["components"],l={id:"dev-notes",title:"Developer Notes on CQL Development",sidebar_label:"Developer Notes"},s={unversionedId:"dev-notes",id:"dev-notes",isDocsHomePage:!1,title:"Developer Notes on CQL Development",description:"1. If you aren't good with yacc/lex you probably should do some homework before you start. CQL development is all about building and walking a syntax tree.  It's possible to make local changes without knowing the details but it can be hard to figure out where to make changes without context.",source:"@site/../docs/dev_notes.md",slug:"/dev-notes",permalink:"/docs/dev-notes",version:"current",sidebar_label:"Developer Notes",sidebar:"someSidebar",previous:{title:"Testing CG/SQL",permalink:"/docs/testing"}},c=[],u={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you aren't good with ",Object(i.b)("inlineCode",{parentName:"p"},"yacc"),"/",Object(i.b)("inlineCode",{parentName:"p"},"lex")," you probably should do some homework before you start. CQL development is all about building and walking a syntax tree.  It's possible to make local changes without knowing the details but it can be hard to figure out where to make changes without context.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"CQL development is basically test driven, to create a new feature:"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Add the language feature to ",Object(i.b)("inlineCode",{parentName:"li"},"test.sql")),Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"test.sh"),"; it will fail due to parse error"),Object(i.b)("li",{parentName:"ol"},"Add the syntax to ",Object(i.b)("inlineCode",{parentName:"li"},"cql.y")," and create the necessary tree pieces in ",Object(i.b)("inlineCode",{parentName:"li"},"ast.h")),Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"test.sh"),"; accept any file differences to install this as the new reference baseline."),Object(i.b)("li",{parentName:"ol"},"Add a test case to ",Object(i.b)("inlineCode",{parentName:"li"},"sem_test.sql")," that uses your new feature. ",Object(i.b)("inlineCode",{parentName:"li"},"sem_test.sql")," can contain pattern matching for the semantic output."),Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"test.sh"),"; it will fail because it will find an AST node it doesn't understand"),Object(i.b)("li",{parentName:"ol"},"edit ",Object(i.b)("inlineCode",{parentName:"li"},"sem.c")," to do the analysis for your new node type"),Object(i.b)("li",{parentName:"ol"},"adjust the verification in ",Object(i.b)("inlineCode",{parentName:"li"},"sem_test.sql")," accordingly"),Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"test.sh")," until it passes making fixes as needed"),Object(i.b)("li",{parentName:"ol"},"there will be new diff output and it will be spitting out the diffs; if you are happy with the new output, accept the diffs to update the reference outputs; note the pattern matching validations will still fail if the output goes bad even if the reference comparison is good, the reference output is a double check"),Object(i.b)("li",{parentName:"ol"},"add code that uses your new feature to ",Object(i.b)("inlineCode",{parentName:"li"},"cg_test.sql"),", this is the code gen test, verifications using pattern matching are also allowed there"),Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"test.sh")),Object(i.b)("li",{parentName:"ol"},"it will fail because codegen doesn't know about your new feature"),Object(i.b)("li",{parentName:"ol"},"edit ",Object(i.b)("inlineCode",{parentName:"li"},"cg_c.c")," (or a different code gen if you're doing test helpers or some such) to support your new code"),Object(i.b)("li",{parentName:"ol"},"cycle running ",Object(i.b)("inlineCode",{parentName:"li"},"test.sh")," until it passes"),Object(i.b)("li",{parentName:"ol"},"accept each diff when you're happy with the new output"),Object(i.b)("li",{parentName:"ol"},"Add code that runs your new feature using run_test.sql"),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"test.sh"),", if your codegen was perfect it could pass; it probably won't at first"),Object(i.b)("li",{parentName:"ol"},"fix your code until it's done; you shouldn't need to accept any more diffs at this point"),Object(i.b)("li",{parentName:"ol"},"run ",Object(i.b)("inlineCode",{parentName:"li"},"cov.sh")," to confirm 100% coverage"),Object(i.b)("li",{parentName:"ol"},"sanity check the GCC build (I use a linux box for this)"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get a solid code review and land as usual."))),Object(i.b)("p",null,"By the time you have done this you will have passed the tests dozens of times and you will know exactly what your code is doing to the entire battery of cql combinations.  Missing tests can be painful and cause downstream regressions so be ruthless about adding enough combinations and validating the essential parts.  The snapshot diffing is helpful but the real gating is done by the pattern matching logic."),Object(i.b)("p",null,"Note: none of this works unless you are standing the main source directory"),Object(i.b)("p",null,"Note: the test scripts make a lot of turds, at this point almost everything should be going into the ",Object(i.b)("inlineCode",{parentName:"p"},"out"),"\ndirectory but it wasn't always so.  You can use ",Object(i.b)("inlineCode",{parentName:"p"},"make clean")," to get rid of the build stuff wherever it may be.\nAlternatively use source control to get rid of any junk."))}b.isMDXComponent=!0}}]);