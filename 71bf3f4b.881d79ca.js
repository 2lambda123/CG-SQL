(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),i=t(6),l=(t(0),t(153)),r=["components"],b={slug:"flow-analysis",title:"Control Flow Analysis in CQL",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},o={permalink:"/blog/flow-analysis",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2021-12-30-flow-analysis.md",source:"@site/blog/2021-12-30-flow-analysis.md",description:"One of the biggest changes to CQL in 2021 was the addition of control flow",date:"2021-12-30T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],title:"Control Flow Analysis in CQL",readingTime:11.395,truncated:!1,nextItem:{title:"Introducing Shared Fragments",permalink:"/blog/shared-fragments-intro"}},c=[{value:"Improving Nullability",id:"improving-nullability",children:[]},{value:"Enforcing Initialization Before Use",id:"enforcing-initialization-before-use",children:[]},{value:"Understanding Control Flow Analysis in CQL",id:"understanding-control-flow-analysis-in-cql",children:[]},{value:"Looking Ahead",id:"looking-ahead",children:[]}],p={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,r);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"One of the biggest changes to CQL in 2021 was the addition of control flow\nanalysis. Given an understanding of how execution can flow within a user's\nprogram, CQL can do things like infer when a nullable variable must contain a\nnonnull value and improve its type appropriately, or issue an error when a\nnonnull variable may be used before it has been initialized."),Object(l.b)("h3",{id:"improving-nullability"},"Improving Nullability"),Object(l.b)("p",null,"As of mid-2021, and with increasing sophistication throughout the remainder of\nthe year, CQL has been able to infer that a variable of a nullable type must not\nbe ",Object(l.b)("inlineCode",{parentName:"p"},"NULL")," within a portion of a user's program:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'DECLARE PROC another_proc(t0 TEXT NOT NULL, t1 TEXT NOT NULL);\n\nCREATE PROC some_proc(t0 TEXT, t1 TEXT)\nBEGIN\n  IF t0 IS NULL RETURN;\n  -- `t0` must be nonnull here if we made it this far\n\n  IF t1 IS NOT NULL THEN\n    -- `t0` and `t1` are nonnull here\n    CALL another_proc(t0, t1);\n  ELSE\n    -- `t0` is nonnull here\n    CALL another_proc(t0, "default");\n  END IF;\nEND;\n')),Object(l.b)("p",null,"The ability of the CQL compiler to infer non-nullability greatly reduces the\nneed to use the functions ",Object(l.b)("inlineCode",{parentName:"p"},"ifnull_crash")," and ",Object(l.b)("inlineCode",{parentName:"p"},"ifnull_throw")," to coerce values to\na nonnull type\u2014functions that, if they are ever used incorrectly, usually result\nin programs misbehaving."),Object(l.b)("p",null,"For a detailed description and many additional examples of what is possible\u2014CQL\ncan handle much more than what is shown above\u2014see ",Object(l.b)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch03#nullability-improvements"},"the user guide's section on\nnullability\nimprovements"),"."),Object(l.b)("h3",{id:"enforcing-initialization-before-use"},"Enforcing Initialization Before Use"),Object(l.b)("p",null,"In CQL, it is possible to declare a variable of a nonnull type without giving it\na value. If the variable is of a non-reference type, it is assigned a default\nvalue of ",Object(l.b)("inlineCode",{parentName:"p"},"0"),". If the variable is of a reference type (",Object(l.b)("inlineCode",{parentName:"p"},"BLOB"),", ",Object(l.b)("inlineCode",{parentName:"p"},"OBJECT"),", or\n",Object(l.b)("inlineCode",{parentName:"p"},"TEXT"),"), however, it is simply set to ",Object(l.b)("inlineCode",{parentName:"p"},"NULL")," despite the nonnull type as no\ndefault value exists."),Object(l.b)("p",null,"To help prevent accessing a reference variable of a nonnull type and getting\nback ",Object(l.b)("inlineCode",{parentName:"p"},"NULL"),", CQL recently began enforcing that such variables are initialized\nbefore use. The following code, therefore, now results in an error:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"DECLARE t TEXT NOT NULL;\nCALL requires_text_notnull(t); -- error!\n")),Object(l.b)("p",null,"Using the same engine for control flow analysis that is behind nullability\nimprovements, CQL can improve a variable to be initialized:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'DECLARE t TEXT NOT NULL;\n\nIF some_condition THEN\n  SET t := "some example text";\n  -- `t` is initialized here\nELSE\n  THROW;\nEND IF;\n-- `t` must be initialized here if we made it this far\n\nCALL requires_text_notnull(t); -- okay!\n')),Object(l.b)("p",null,"Thanks to CQL's ability to understand the control flow of users' programs, the\nabove example works just fine."),Object(l.b)("p",null,"CQL now also enforces that all procedures with ",Object(l.b)("inlineCode",{parentName:"p"},"OUT")," parameters of a nonnull\nreference type properly initialize said parameters before they return:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC some_proc(b BOOL NOT NULL, OUT t TEXT NOT NULL)\nBEGIN\n  IF b THEN\n    SET t := another_proc(t);\n    -- `t` is initialized here\n  ELSE\n    SET t := yet_another_proc(t);\n    -- `t` is initialized here\n  END IF;\n  -- `t` must be initialized here because all possible\n  -- branches initialized it, so `some_proc` is okay!\nEND;\n")),Object(l.b)("p",null,"As with nullability improvements, understanding the nuances of what will be\nconsidered initialized is easier if one has a sense for how control flow\nanalysis works in the compiler."),Object(l.b)("h3",{id:"understanding-control-flow-analysis-in-cql"},"Understanding Control Flow Analysis in CQL"),Object(l.b)("p",null,"To develop an intuition for how control flow analysis works in CQL, let's begin\nby taking a look at the following example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'DECLARE PROC p1(OUT t TEXT NOT NULL);\nDECLARE PROC p2(i INTEGER NOT NULL, OUT t TEXT NOT NULL);\n\nCREATE PROC p0(b BOOL, i INTEGER, OUT t TEXT NOT NULL)\nBEGIN\n  IF i IS NULL THEN\n    IF b THEN\n      CALL p1(t);\n    ELSE\n      SET t := "";\n    END IF;\n    RETURN;\n  END IF;\n\n  IF i == 0 THEN\n    SET t := "";\n  ELSE IF i > 0 THEN\n    SET t := p2(i);\n  ELSE\n    THROW;\n  END IF;\nEND;\n')),Object(l.b)("p",null,"There are a couple of things we must verify in order to ensure the code is\ntype-safe:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"With regard to the parameters of ",Object(l.b)("inlineCode",{parentName:"p"},"p0"),": Since ",Object(l.b)("inlineCode",{parentName:"p"},"t")," is an ",Object(l.b)("inlineCode",{parentName:"p"},"OUT")," parameter of type\n",Object(l.b)("inlineCode",{parentName:"p"},"TEXT NOT NULL"),", ",Object(l.b)("inlineCode",{parentName:"p"},"p0")," must always assign it a value before it returns. If it\ndoes not, a caller of ",Object(l.b)("inlineCode",{parentName:"p"},"p0")," may end up with a variable of a ",Object(l.b)("inlineCode",{parentName:"p"},"NOT NULL")," type\nthat actually contains ",Object(l.b)("inlineCode",{parentName:"p"},"NULL"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"With regard to the calling of ",Object(l.b)("inlineCode",{parentName:"p"},"p2")," in ",Object(l.b)("inlineCode",{parentName:"p"},"p0"),": Since ",Object(l.b)("inlineCode",{parentName:"p"},"p2")," requires a first\nargument of type ",Object(l.b)("inlineCode",{parentName:"p"},"INTEGER NOT NULL"),", some sort of check must be performed to\nensure that ",Object(l.b)("inlineCode",{parentName:"p"},"i")," is not ",Object(l.b)("inlineCode",{parentName:"p"},"NULL")," before ",Object(l.b)("inlineCode",{parentName:"p"},"p2(i)")," is executed."))),Object(l.b)("p",null,"If we carefully study ",Object(l.b)("inlineCode",{parentName:"p"},"p0"),", we can determine that both of the above conditions\nare satisfied. Making this determination, however, is not exactly trivial, and\nreal-world code is often significantly more complicated than this\u2014and it evolves\nover time. For these reasons, having a compiler that can make such\ndeterminations automatically is critical; most modern production compilers\nperform these sorts of checks."),Object(l.b)("p",null,"The easiest way to understand how CQL does its job is to take the above example\nline-by-line. This is not exactly how CQL works under the hood, but it should\nprovide an intuitive sense of how control flow analysis works in the compiler:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"==> CREATE PROC p0(b BOOL, i INTEGER, OUT t TEXT NOT NULL)\n    BEGIN\n      ...\n    END;\n")),Object(l.b)("p",null,"Right away, CQL can see that ",Object(l.b)("inlineCode",{parentName:"p"},"t")," is declared both ",Object(l.b)("inlineCode",{parentName:"p"},"OUT")," and ",Object(l.b)("inlineCode",{parentName:"p"},"TEXT NOT NULL")," and\nthus requires initialization before ",Object(l.b)("inlineCode",{parentName:"p"},"p0")," returns. CQL can, therefore, add a fact\nabout what it is analyzing to its previously null set of facts:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."))),Object(l.b)("p",null,"We can then continue:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"==>   IF i IS NULL THEN\n        ...\n      END IF;\n")),Object(l.b)("p",null,"Here, the compiler notices that we're at an ",Object(l.b)("inlineCode",{parentName:"p"},"IF")," statement. In CQL, ",Object(l.b)("inlineCode",{parentName:"p"},"IF"),"\nstatements contain one or more ",Object(l.b)("strong",{parentName:"p"},"branches"),", and the compiler considers every\n",Object(l.b)("inlineCode",{parentName:"p"},"IF")," to be the start of a ",Object(l.b)("strong",{parentName:"p"},"branch group"),". The same line also indicates the\ncondition for the first branch: ",Object(l.b)("inlineCode",{parentName:"p"},"i IS NULL"),". CQL can update its set of facts:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i IS NULL"),":"))))),Object(l.b)("p",null,"It then proceeds to the next line:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'      IF i IS NULL THEN\n    ==> IF b THEN\n          CALL p1(t);\n        ELSE\n          SET t := "";\n        END IF;\n        RETURN;\n      END IF;\n')),Object(l.b)("p",null,"Another branch group and branch:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i IS NULL"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"b"),":"))))))))),Object(l.b)("p",null,"Continuing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'      IF i IS NULL THEN\n        IF b THEN\n      ==> CALL p1(t);\n        ELSE\n          SET t := "";\n        END IF;\n        RETURN;\n      END IF;\n')),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"p1")," takes an ",Object(l.b)("inlineCode",{parentName:"p"},"OUT")," argument of type ",Object(l.b)("inlineCode",{parentName:"p"},"TEXT NOT NULL"),", this call\ninitializes ",Object(l.b)("inlineCode",{parentName:"p"},"t"),", and so CQL can update its set of facts once again:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i IS NULL"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"b"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))))))))))),Object(l.b)("p",null,"Jumping ahead a couple of lines:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'      IF i IS NULL THEN\n        IF b THEN\n          CALL p1(t);\n        ELSE\n      ==> SET t := "";\n        END IF;\n        RETURN;\n      END IF;\n')),Object(l.b)("p",null,"At this point, we're in another branch. We also have yet another fact to add\nbecause ",Object(l.b)("inlineCode",{parentName:"p"},"t")," is initialized here as well due to the ",Object(l.b)("inlineCode",{parentName:"p"},"SET"),":"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i IS NULL"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"b"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))),Object(l.b)("li",{parentName:"ul"},"In ELSE branch:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))))))))))),Object(l.b)("p",null,"Moving ahead one more line, things get a bit more interesting:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'      IF i IS NULL THEN\n        IF b THEN\n          CALL p1(t);\n        ELSE\n          SET t := "";\n    ==> END IF;\n        RETURN;\n      END IF;\n')),Object(l.b)("p",null,"Here, we're at the end of an ",Object(l.b)("inlineCode",{parentName:"p"},"IF"),", and thus the end of a branch group. Whenever\nCQL reaches the end of a branch group, it ",Object(l.b)("em",{parentName:"p"},"merges")," the effects of all of its\nbranches."),Object(l.b)("p",null,"One very important thing to note here is that the current branch group has an\n",Object(l.b)("inlineCode",{parentName:"p"},"ELSE")," branch, and so the set of branches covers all possible cases. That means\nif something is initialized in every branch within the branch group, we can\nconsider it to be initialized after the branch group has ended: Initialization\nwill always occur. This allows CQL to simplify its set of facts as follows as it\nleaves the branch group:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i IS NULL"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))))))),Object(l.b)("p",null,"Stepping forward one line again, we reach a ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"      IF i IS NULL THEN\n        ...\n    ==> RETURN;\n      END IF;\n")),Object(l.b)("p",null,"We're now at a point where we can exit the procedure. CQL will, therefore,\nverify that if something requires initialization, it has been initialized. Since\nwe have both the facts \"",Object(l.b)("inlineCode",{parentName:"p"},"t"),' requires initialization" and "',Object(l.b)("inlineCode",{parentName:"p"},"t"),' is initialized",\nall is well!'),Object(l.b)("p",null,"The fact that the current branch returns early is added to the set of facts:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i IS NULL"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."),Object(l.b)("li",{parentName:"ul"},"Returns."))))))),Object(l.b)("p",null,"Moving ahead one more line, we reach the end of another branch and branch group,\nand again something interesting happens:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"      ...\n      IF i IS NULL THEN\n        ...\n  ==> END IF;\n")),Object(l.b)("p",null,"Upon ending the branch group, we know that the branch group has exactly one\nbranch, that the branch is entered only when ",Object(l.b)("inlineCode",{parentName:"p"},"i IS NULL"),", and that the branch\nreturns. What that tells CQL is that, if execution is going to continue after\nthe branch group, its sole branch must ",Object(l.b)("em",{parentName:"p"},"not")," have been taken, and so CQL knows\nthe ",Object(l.b)("em",{parentName:"p"},"opposite")," of its condition for entry will be true from this point onward:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"i")," is not null."))),Object(l.b)("p",null,"The next ",Object(l.b)("inlineCode",{parentName:"p"},"IF")," is rather similar to what we've seen already in its structure, so\nwe can jump ahead several lines to the next point of interest:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'      IF i == 0 THEN\n        SET t := "";\n      ELSE IF i > 0 THEN\n    ==> SET t := p2(i);\n      ELSE\n        THROW;\n      END IF;\n')),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Before")," we analyze the above-indicated line, we have the following set of facts:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"i")," is not null."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i == 0"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))),Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i > 0"),":"))))),Object(l.b)("p",null,"In the call ",Object(l.b)("inlineCode",{parentName:"p"},"p2(i)"),", we know that ",Object(l.b)("inlineCode",{parentName:"p"},"i")," was declared to have type ",Object(l.b)("inlineCode",{parentName:"p"},"INTEGER")," and\nthat ",Object(l.b)("inlineCode",{parentName:"p"},"p2")," requires an ",Object(l.b)("inlineCode",{parentName:"p"},"INTEGER NOT NULL"),', but we also have the fact "',Object(l.b)("inlineCode",{parentName:"p"},"i"),' is not\nnull". For this reason, we can consider ',Object(l.b)("inlineCode",{parentName:"p"},"p2(i)")," to be a valid call. We can also\nadd the fact that ",Object(l.b)("inlineCode",{parentName:"p"},"t")," is initialized to our current set of facts:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"...",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i > 0"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE:")," When it comes to code generation, it is not so simple as to say\n",Object(l.b)("inlineCode",{parentName:"p"},"p2(i)")," is valid and proceed as usual. That's because ",Object(l.b)("inlineCode",{parentName:"p"},"p2")," expects an argument\nof type ",Object(l.b)("inlineCode",{parentName:"p"},"INTEGER NOT NULL"),", but we merely have a value of type ",Object(l.b)("inlineCode",{parentName:"p"},"INTEGER")," ",Object(l.b)("em",{parentName:"p"},"that\nwe happen to know")," cannot be null: ",Object(l.b)("inlineCode",{parentName:"p"},"INTEGER NOT NULL")," and ",Object(l.b)("inlineCode",{parentName:"p"},"INTEGER")," do not share\nthe same underlying representation, and so we cannot pass the declared-nullable\nvariable ",Object(l.b)("inlineCode",{parentName:"p"},"i")," directly to ",Object(l.b)("inlineCode",{parentName:"p"},"p2"),". To solve this problem, CQL ",Object(l.b)("em",{parentName:"p"},"rewrites the\nexpression")," such that ",Object(l.b)("inlineCode",{parentName:"p"},"p2(i)")," becomes ",Object(l.b)("inlineCode",{parentName:"p"},"p2(cql_inferred_notnull(i))"),", where\n",Object(l.b)("inlineCode",{parentName:"p"},"cql_inferred_notnull")," is an internal-only function that handles the\nnullable-to-nonnull representational conversion for us. This explains its\npresence in the following examples."),Object(l.b)("p",null,"Jumping ahead again, we encounter a ",Object(l.b)("inlineCode",{parentName:"p"},"THROW"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'      IF i == 0 THEN\n        SET t := "";\n      ELSE IF i > 0 THEN\n        SET t := p2(cql_inferred_notnull(i));\n      ELSE\n    ==> THROW;\n      END IF;\n')),Object(l.b)("p",null,"The fact that the branch will throw is added to the current set of facts:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"i")," is not null."),Object(l.b)("li",{parentName:"ul"},"In branch group:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i == 0"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))),Object(l.b)("li",{parentName:"ul"},"In branch when ",Object(l.b)("inlineCode",{parentName:"li"},"i > 0"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))),Object(l.b)("li",{parentName:"ul"},"In ELSE branch:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Throws."))))))),Object(l.b)("p",null,"We then proceed to the end of the ",Object(l.b)("inlineCode",{parentName:"p"},"IF"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},'      IF i == 0 THEN\n        SET t := "";\n      ELSE IF i > 0 THEN\n        SET t := p2(cql_inferred_notnull(i));\n      ELSE\n        THROW;\n  ==> END IF;\n')),Object(l.b)("p",null,"Once again, CQL merges the effects of the branches in the branch group to finish\nthe analysis of the ",Object(l.b)("inlineCode",{parentName:"p"},"IF"),". Since it can see that ",Object(l.b)("inlineCode",{parentName:"p"},"t")," was initialized in all\nbranches except the one that throws, and since the branches cover all possible\ncases, the set of facts is simplified as follows given the knowledge that, if\n",Object(l.b)("inlineCode",{parentName:"p"},"THROW")," was not encountered, ",Object(l.b)("inlineCode",{parentName:"p"},"t")," must have been initialized:"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," requires initialization."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"i")," is not null."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"t")," is initialized."))),Object(l.b)("p",null,"Moving ahead one final time, we encounter the end of the procedure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"    CREATE PROC p0(b BOOL, i INTEGER, OUT t TEXT NOT NULL)\n    BEGIN\n      ...\n==> END;\n")),Object(l.b)("p",null,'The only thing left to do at this point is to validate that anything requiring\ninitialization has been initialized. Since we have both "',Object(l.b)("inlineCode",{parentName:"p"},"t"),' requires\ninitialization" and "',Object(l.b)("inlineCode",{parentName:"p"},"t"),' is initialized", everything is in order.'),Object(l.b)("h3",{id:"looking-ahead"},"Looking Ahead"),Object(l.b)("p",null,"As a recently generalized piece of functionality within the CQL compiler,\ncontrol flow analysis will soon be used to enforce additional properties of\nusers' programs. In particular, CQL will be able to ensure that cursors are\nalways fetched before they're used and that cursors are always checked to have a\nrow before their fields are accessed."),Object(l.b)("p",null,"Hopefully you now understand the fundamentals of control flow analysis in CQL\nand the benefits it brings to your programs. Best wishes for 2022!"))}s.isMDXComponent=!0},153:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,O=s["".concat(r,".").concat(m)]||s[m]||u[m]||l;return t?i.a.createElement(O,b(b({ref:n},c),{},{components:t})):i.a.createElement(O,b({ref:n},c))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=m;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var c=2;c<l;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);