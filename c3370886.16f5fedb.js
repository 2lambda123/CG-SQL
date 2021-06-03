(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(137)),i=["components"],c={slug:"error-tracing-macro",title:"Error Tracing Helper Macro",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql","errors"]},l={permalink:"/blog/error-tracing-macro",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2020-11-18-error-tracing-macro.md",source:"@site/blog/2020-11-18-error-tracing-macro.md",description:"Following up on the last blog entry, I thought it would be useful to present a simple error tracing macro that you can use",date:"2020-11-18T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"},{label:"errors",permalink:"/blog/tags/errors"}],title:"Error Tracing Helper Macro",readingTime:2.33,truncated:!1,prevItem:{title:"A quick tutorial on LIKE forms",permalink:"/blog/like-forms-tutorial"},nextItem:{title:"Introducing General Purpose Error Tracing",permalink:"/blog/error-tracing-intro"}},u=[],s={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Following up on the last blog entry, I thought it would be useful to present a simple error tracing macro that you can use\nto see what kind of error flow is going on when you're having trouble understanding why a procedure is returning\nan error code. The idea is we want to create a macro that we can use like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"BEGIN_VERBOSE_STDERR_TRACING;\n\n-- Some procedure(s) that you want to trace\n\nEND_VERBOSE_STDERR_TRACING;\n")),Object(a.b)("p",null,"We can do that with something like the below macros.  These particular ones cause the output to go to ",Object(a.b)("inlineCode",{parentName:"p"},"stderr")," via ",Object(a.b)("inlineCode",{parentName:"p"},"fprintf")," but if that isn't what you need you can simply edit the macro. The macros looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'-- manually force tracing on by redefining the cql_error_trace macro\n#define BEGIN_VERBOSE_STDERR_TRACING \\\n    @echo c, "#undef cql_error_trace\\n"; \\\n    @echo c, "#define cql_error_trace() fprintf(stderr, \\"CQL Trace at %s:%d in %s: %d %s\\\\n\\", __FILE__, __LINE__, _PROC_, _rc_, sqlite3_errmsg(_db_))\\n"\n\n#define END_VERBOSE_STDERR_TRACING \\\n    @echo c, "#undef cql_error_trace\\n"; \\\n    @echo c, "#define cql_error_trace()\\n"\n')),Object(a.b)("p",null,"So basically it's telling CQL to emit a ",Object(a.b)("inlineCode",{parentName:"p"},"#define")," into its output stream.  In this case:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'#define cql_error_trace() fprintf(stderr, "CQL Trace at %s:%d in %s: %d %s\\n", __FILE__, __LINE__, _PROC_, _rc_, sqlite3_errmsg(_db_))\n')),Object(a.b)("p",null,"You could change that to any function you like, you can have it dump the errors where you like, or you can make it some dummy function you add so that you can set a breakpoint on it."),Object(a.b)("p",null,"Whatever you do, do not leave your code with this sort of tracing enabled -- it's far too expensive in terms of code size.  But it's perfect if you have this one procedure that is failing and it's hard for you to see where."),Object(a.b)("p",null,"Obviously if you're making a custom trace thingy you don't need the macro at all, you can just emit your own ",Object(a.b)("inlineCode",{parentName:"p"},"#define")," with ",Object(a.b)("inlineCode",{parentName:"p"},"@echo")," as needed."),Object(a.b)("p",null,"Note: ",Object(a.b)("inlineCode",{parentName:"p"},"@echo")," is quite a sledgehammer so don't use it lightly and not in production code but it is quite helpful for this sort of thing.  CQL tests often use it to help make things visible to the tests.  If you use ",Object(a.b)("inlineCode",{parentName:"p"},"@echo")," in weird ways you might not get working code when the codegen changes in the future."),Object(a.b)("p",null,"The relevant state that is available to you inside a macro like this is:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"__FILE__")," the current filename (comes from the C pre-processor, this is the .c file name not the .sql)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"__LINE__")," the current line number (comes from the C pre-processor, this is the .c line number)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"_rc_")," the current SQLite result code (always the current return code in every CQL procedure that uses SQLite)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"_db_")," the current SQLite database pointer (always the current database in every CQL procedure that uses SQLite)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"_PROC_")," the current procedure name (CQL has a ",Object(a.b)("inlineCode",{parentName:"li"},"#define")," for this for you)")))}p.isMDXComponent=!0},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);