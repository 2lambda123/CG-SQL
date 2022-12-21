"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5842],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),b=l,p=u["".concat(r,".").concat(b)]||u[b]||h[b]||o;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7130:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return h}});var n=a(3117),l=a(102),o=(a(7294),a(3905)),i=["components"],s={slug:"backed-tables",title:"Introducing Backed Tables",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},r=void 0,d={permalink:"/blog/backed-tables",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2022-10-05-backed-tables.md",source:"@site/blog/2022-10-05-backed-tables.md",title:"Introducing Backed Tables",description:"Introduction and Context",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],readingTime:17.125,hasTruncateMarker:!1,authors:[{name:"CG/SQL Team",title:"Maintainer of CG/SQL",url:"https://github.com/facebookincubator",imageURL:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4"}],frontMatter:{slug:"backed-tables",title:"Introducing Backed Tables",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},prevItem:{title:"Introducing Parent/Child Result Sets",permalink:"/blog/parent-child"},nextItem:{title:"Introducing Blob Storage",permalink:"/blog/blob-storage"}},c={authorsImageUrls:[void 0]},h=[{value:"Introduction and Context",id:"introduction-and-context",level:2},{value:"How do I define one of these backed tables?",id:"how-do-i-define-one-of-these-backed-tables",level:3},{value:"How do I read this data?",id:"how-do-i-read-this-data",level:3},{value:"Why does the type hash include only the non-null fields?",id:"why-does-the-type-hash-include-only-the-non-null-fields",level:3},{value:"What do <code>cql_blob_get</code> and <code>cql_blob_get_type</code> turn into?",id:"what-do-cql_blob_get-and-cql_blob_get_type-turn-into",level:3},{value:"What does this end up looking like?",id:"what-does-this-end-up-looking-like",level:3},{value:"How do I insert data like this?",id:"how-do-i-insert-data-like-this",level:3},{value:"How does the delete operation work?",id:"how-does-the-delete-operation-work",level:3},{value:"What about updating tables?",id:"what-about-updating-tables",level:3},{value:"Appendix",id:"appendix",level:3}],u={toc:h};function b(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-and-context"},"Introduction and Context"),(0,o.kt)("p",null,"Most production databases include some tables that are fairly generic, they use maybe a simple key-value combination to store some simple\nsettings or something like that.  In the course of feature development this kind of thing comes up pretty often and in large client\napplications (like Messenger, but certainly not limited to Messenger) there are many small features that need a little bit of state.\nIt's easy enough to model whatever state you need with a table or two but this soon results in an explosion of tiny tables.  In some cases\nthere are only a few rows of configuration data and indeed the situation can be so bad that the text of the schema for the little state table is\nlarger than the sum of all the data you will ever store there.  This is a bit tragic because SQLite has initialization cost associated with\neach table.  So these baby tables are really not paying for themselves at all.  What we'd like to do is use some kind of generic table\nas the backing store for many of these small tables while preserving type safety.  The cost of access might be a bit higher but since\ndata volumes are expected to be low anyway this would be a good trade-off.  And we can have as many as we like.  In some cases the state doesn't\neven need to be persisted, so we're talking about tables in an in-memory database.  Here low cost of initialization is especially important.\nAnd lastly, if your product has dozens or even hundreds of small features like this, the likelihood that all of them are even used in a session\nis quite low and so again, having a low fixed cost for the schema is a good thing.  No need to create 100 in-memory tables on the off chance that\nthey are needed."),(0,o.kt)("p",null,"See also the related feature: ",(0,o.kt)("a",{parentName:"p",href:"https://cgsql.dev/blog/blob-storage"},"blob storage"),"."),(0,o.kt)("h3",{id:"how-do-i-define-one-of-these-backed-tables"},"How do I define one of these backed tables?"),(0,o.kt)("p",null,"First you need a place to store the data, we define a backing table in the usual way.  A simple backing table is just a key/value store and looks\nlike this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@ATTRIBUTE(cql:backing_table)\nCREATE TABLE backing(\n  k BLOB PRIMARY KEY,\n  v BLOB NOT NULL\n);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"backing_table")," attribute indicates that the table we're about to define is to be used for backing storage.  At present it is signficantly restricted.\nIt has to have exactly two columns, both of which are blobs, one is the key and one is the value.  It should be either baseline schema or annotated with\n",(0,o.kt)("inlineCode",{parentName:"p"},"@create")," as it is expected to be precious data.  If it's an in-memory table the versioning is somewhat moot but really the backing store is not supposed\nto change over time, that's the point.   In future versions we expect to allow some number of additional physical columns which can be used by the backed\ntables (discussed below) but for now it's this simple pattern."),(0,o.kt)("p",null,"Backed table looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@ATTRIBUTE(cql:backed_by=backing)\nCREATE TABLE backed(\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  bias REAL\n);\n\n@ATTRIBUTE(cql:backed_by=backing)\nCREATE TABLE backed2(\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL\n);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"backed_by")," attribute indicates that the table we're about to define is not really going to be its own table.  As a result, you will not be\nable to (e.g.) ",(0,o.kt)("inlineCode",{parentName:"p"},"DROP")," the table or ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE INDEX"),"  or ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TRIGGER")," on it, and there will be no schema upgrade for it should you request one.\nIt may not contain constraints as there would be no way to enforce them.  But as compensation for these restrictions it can be changed freely and\nhas no physical schema cost associated with it."),(0,o.kt)("h3",{id:"how-do-i-read-this-data"},"How do I read this data?"),(0,o.kt)("p",null,"To understand how this works imagine that we had a view for each backed table which simply read the blobs out of the backing store and then extracted the backed columns using some blob extraction functions. This would work, but then we'd be trading view schema for table schema so the schema savings we're trying to achieve would go up in smoke."),(0,o.kt)("p",null,'We might be lost here but CQL already has something very "view like" and that\'s the shared fragment structure.  So what we do instead of views is to automatically create a shared fragment just like the view we could have made.  They look like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@ATTRIBUTE(cql:shared_fragment)\nCREATE PROC _backed ()\nBEGIN\n  SELECT\n   rowid,\n   cql_blob_get(T.k, backed.id) AS id,\n   cql_blob_get(T.v, backed.name) AS name,\n   cql_blob_get(T.v, backed.bias) AS bias\n    FROM backing AS T\n    WHERE cql_blob_get_type(T.k) = 2105552408096159860L;\nEND;\n")),(0,o.kt)("p",null,"So some things to notice right away:"),(0,o.kt)("p",null,"First, this fragment has the right shape, but the shared fragment doesn't directly call blob extractors.  Rather it uses these ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_blob_get"),".\nThe point of this is to make the actual blob functions configurable.  The test suites include some very simple extraction functions for blobs\nwith just integers in them, but you can create whatever blob format you want. You could use the ",(0,o.kt)("a",{parentName:"p",href:"https://cgsql.dev/blog/blob-storage"},"blob storage"),"\nfeature for encoding or you can encode it as you see fit.  You can even have different encodings in different backed tables."),(0,o.kt)("p",null,"Second, there is a type code embedded in the procedure.  The type code is a hash of the type name and the names and types of all the not-null fields\nin the backed table.  The hash is arbitrary but repeatable, any system can compute the same hash and find the records they want without having to share\nheaders. The actual hash is open source but it's just a SHA256 reduced to 64 bits with some name canonicalization.  Shortly the JSON will also include\nthe relevant hashes so you can easily consume them without even having to know the hash function."),(0,o.kt)("p",null,"Here's the slightly smaller shared fragment for ",(0,o.kt)("inlineCode",{parentName:"p"},"backed2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@ATTRIBUTE(cql:shared_fragment)\nCREATE PROC _backed2 ()\nBEGIN\n  SELECT\n    rowid,\n    cql_blob_get(T.k, backed2.id) AS id,\n    cql_blob_get(T.v, backed2.name) AS name\n    FROM backing AS T\n    WHERE cql_blob_get_type(T.k) = -1844763880292276559L;\nEND;\n")),(0,o.kt)("p",null,"As you can see it's very similar -- the type hash is different and of course it has different columns."),(0,o.kt)("h3",{id:"why-does-the-type-hash-include-only-the-non-null-fields"},"Why does the type hash include only the non-null fields?"),(0,o.kt)("p",null,"The idea is that the backed table might change over time and you can add new optional fields without invalidating your existing data.  If you change\nthe name of the type or if you add new not null fields the type identity changes and any data you have in the backing table will basically be\nignored because the type hash will not match."),(0,o.kt)("h3",{id:"what-do-cql_blob_get-and-cql_blob_get_type-turn-into"},"What do ",(0,o.kt)("inlineCode",{parentName:"h3"},"cql_blob_get")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"cql_blob_get_type")," turn into?"),(0,o.kt)("p",null,"You can configure them as you see fit.  By default cql_blob_get turns into either ",(0,o.kt)("inlineCode",{parentName:"p"},"bgetkey")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bgetval")," depending on if you are\nreading from the key blob or the value blob.  The directives for configuring this function are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@blob_get_key bgetkey offset;\n@blob_get_val bgetval;\n")),(0,o.kt)("p",null,'You can configure the system to ask for the column by offset (this is normal for the primary key because it has a fixed number of columns\nfor any given key type and they are all mandatory), or by hash code (this is normal for the value type because it might be missing some\ncolumns and so offset is probably not appropriate).  However both are configurable so you want to do key by hashcode simply omit the "offset"\npart of the directive.  Likewise if your values are offset addressable you can add "offset" to the value directive.  Here the offset means\nthe zero based ordinal of the column in the key or the value.'),(0,o.kt)("p",null,"The type access functions are similarly configurable (they never need a code or an offset)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@blob_get_key_type bgetkey_type;\n@blob_get_val_type bgetval_type;\n")),(0,o.kt)("h3",{id:"what-does-this-end-up-looking-like"},"What does this end up looking like?"),(0,o.kt)("p",null,"Armed with these basic transforms we can already do a simple transform to make select statement work.  Suppose CQL sees:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare C cursor for select * from backed;\n")),(0,o.kt)("p",null,"We can make this work with a simple transform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," DECLARE C CURSOR FOR WITH\n  backed (*) AS (CALL _backed())\n  SELECT *\n    FROM backed;\n")),(0,o.kt)("p",null,"Now remember  ",(0,o.kt)("inlineCode",{parentName:"p"},"_backed")," was the automatically created shared fragment.  Basically, if we see a select statement that mentions any backed table\nwe simply add a call to the corresponding shared fragment in the WITH clause.  This effectively creates that \"view\" we need.  And because we're\nusing the shared fragment form, all users of this fragment will share the text.  So there's no schema and the text of the backed appears only\nonce in the binary.  More precisely we get this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\nbacked (rowid, id, name, bias) AS (\n  SELECT\n    rowid,\n    bgetkey(T.k, 0),                      -- 0 is offset of backed.id in key blob\n    bgetval(T.v, -6639502068221071091L),  -- note hash of backed.name\n    bgetval(T.v, -3826945563932272602L)   -- note hash of backed.bias\n  FROM backing AS T\n  WHERE bgetkey_type(T.k) = 2105552408096159860L)\nSELECT rowid, id, name, bias\n  FROM backed;\n")),(0,o.kt)("p",null,"Now with this in mind we can see that it would be very beneficial to also add this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX backing_index ON backing(bgetkey_type(k));\n")),(0,o.kt)("p",null,"or more cleanly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX backing_index ON backing(cql_blob_get_type(k));\n")),(0,o.kt)("p",null,"Either of these result in a computed index on the row type stored in the blob.  Other physical indices might be helpful too and these can potentially\nbe shared by many backed tables, or used in partial indicies."),(0,o.kt)("p",null,"Of course your type function might be named something other than the default ",(0,o.kt)("inlineCode",{parentName:"p"},"bgetkey_type"),"."),(0,o.kt)("p",null,"Now consider a slightly more complex example:"),(0,o.kt)("p",null,"A slightly more complex example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"select T1.* from backed T1 join backed2 T2 where T1.id = T2.id;\n")),(0,o.kt)("p",null,"becomes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WITH\n  backed (rowid, id, name, bias) AS (CALL _backed()),\n  backed2 (rowid, id, name) AS (CALL _backed2())\n  SELECT T1.*\n    FROM backed AS T1\n    INNER JOIN backed2 AS T2\n    WHERE T1.id = T2.id;\n")),(0,o.kt)("p",null,'Now even though two different backed tables will be using the backing store the select "just works".  All the compiler had to do was add both backed\ntable fragments.  And of course if ',(0,o.kt)("inlineCode",{parentName:"p"},"backed")," was joined against itself, that would also just work."),(0,o.kt)("h3",{id:"how-do-i-insert-data-like-this"},"How do I insert data like this?"),(0,o.kt)("p",null,"Consider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'insert into backed values (1, "n001", 1.2), (2, "n002", 3.7);\n')),(0,o.kt)("p",null,"This has to insert into the backing storage and convert the various values into key and value blobs.  A simple transform does this job as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},' WITH\n  _vals (id, name, bias) AS (\n    VALUES(1, "n001", 1.2), (2, "n002", 3.7)\n  )\n  INSERT INTO backing(k, v) SELECT\n    cql_blob_create(backed, V.id, backed.id),\n    cql_blob_create(backed,\n      V.name, backed.name,\n      V.bias, backed.bias)\n    FROM _vals AS V;\n')),(0,o.kt)("p",null,"What's going on here? Well, the issue is that the data to be inserted can be arbitrarily complicated.  It might refer to all kinds of things.\nIn this case it's just literal values but in general it could be anything.  So the transform takes the original values and puts them in a\n_vals(...) CTE.  Then we insert into the backing store by converting _vals into blobs -- one for the key and one for the value.\nThere is only the one place we need to do this for any given insert statement no matter now many items or how complex the insertion is."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cql_blob_create")," similarly expands to a user configured function with optional hash codes and mandatory field types.  There is default\nconfiguration that corresponds to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@blob_create_key bcreatekey offset;\n@blob_create_val bcreateval;\n")),(0,o.kt)("p",null,"The final SQL looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'WITH\n_vals (id, name, bias) AS (\n  VALUES(1, "n001", 1.2), (2, "n002", 3.7)\n)\nINSERT INTO backing(k, v) SELECT\n  bcreatekey(2105552408096159860, V.id, 1), -- type 1 is integer, offset implied\n  bcreateval(2105552408096159860,\n    -6639502068221071091, V.name, 4,  -- hash as before, type 4 is text,\n    -3826945563932272602, V.bias, 3)  -- hash as before, type 3 is real,\n  FROM _vals AS V\n')),(0,o.kt)("p",null,"Note that both blobs have the same overall type code (2105552408096159860) as before.  The key blob did not use per-field type codes, so the argument\npositions give the implied offset.  In contrast the value blob is using hash codes (offset was not specified).  This configuration is typical."),(0,o.kt)("p",null,"A more complex insert works just as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into backed\n  select id+10, name||'x', bias+3 from backed where id < 3;\n")),(0,o.kt)("p",null,"The above insert statement is a bit of a mess.  It's taking some of the backed data and using it to create new backed data.  But the simple transforms we have  work just as before.  We add the needed ",(0,o.kt)("inlineCode",{parentName:"p"},"backed")," CTE and create ",(0,o.kt)("inlineCode",{parentName:"p"},"_vals")," like before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n  backed (*) AS (CALL _backed()),\n  _vals (id, name, bias) AS (\n    SELECT id + 10, name || 'x', bias + 3\n    FROM backed\n    WHERE id < 3\n  )\n  INSERT INTO backing(k, v)\n   SELECT\n     cql_blob_create(backed, V.id, backed.id),\n     cql_blob_create(backed, V.name, backed.name, V.bias, backed.bias)\n   FROM _vals AS V;\n")),(0,o.kt)("p",null,"Looking closely at the above we see a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cql_blob_create")," will expand as before (not shown)"),(0,o.kt)("li",{parentName:"ul"},"we added ",(0,o.kt)("inlineCode",{parentName:"li"},"backed(*)")," as usual"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_vals")," once again just has the exact unchanged insert clause"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"insert into backing(k, v)")," part is identical, the same recipe always works")),(0,o.kt)("h3",{id:"how-does-the-delete-operation-work"},"How does the delete operation work?"),(0,o.kt)("p",null,"Now let's look at a simple delete example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from backed where id = 7;\n")),(0,o.kt)("p",null,"Now remember we're again looking for a pattern that will generalize when the where condition gets crazy. But fortunately this is not so hard.\nThe following form is fully general:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n  backed (*) AS (CALL _backed())\nDELETE FROM backing\n  WHERE rowid IN (\n    SELECT rowid\n    FROM backed\n    WHERE id = 7\n  );\n")),(0,o.kt)("p",null,"All we had to do here was:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add the usual ",(0,o.kt)("inlineCode",{parentName:"li"},"_backed")," CTE"),(0,o.kt)("li",{parentName:"ul"},"move the original ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE")," clause into a subordinate ",(0,o.kt)("inlineCode",{parentName:"li"},"SELECT")," that gives us the rowids to delete.")),(0,o.kt)("p",null,"With the backed table in scope, any ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clause works. If other backed tables are mentioned, the compiler\nsimply adds those as usual."),(0,o.kt)("p",null,"Here's a more complicated delete, it's a bit crazy but illustrative:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from backed where\n  id in (select id from backed2 where name like '%x%');\n")),(0,o.kt)("p",null,"So this is using rows in ",(0,o.kt)("inlineCode",{parentName:"p"},"backed2")," to decide which rows to deleted in ",(0,o.kt)("inlineCode",{parentName:"p"},"backed"),".  The same simple transform works directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n  backed2 (*) AS (CALL _backed2()),\n  backed (*) AS (CALL _backed())\nDELETE FROM backing\n  WHERE rowid IN (\n    SELECT rowid\n    FROM backed\n    WHERE id IN (\n      SELECT id FROM backed2 WHERE name LIKE '%x%'\n    )\n  );\n")),(0,o.kt)("p",null,"What happened here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE")," clause went directly into the body of the rowid select"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backed")," was used as before but now we also need ",(0,o.kt)("inlineCode",{parentName:"li"},"backed2"))),(0,o.kt)("p",null,"The delete pattern does not need any additional cql helpers beyond what we've already seen."),(0,o.kt)("h3",{id:"what-about-updating-tables"},"What about updating tables?"),(0,o.kt)("p",null,"The update statement is the most complicated of the bunch and it requires all the tricks from all the previous statements plus one more."),(0,o.kt)("p",null,"First, we'll need two more blob helpers that are configurable.  By default they look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@blob_update_key bupdatekey offset;\n@blob_update_val bupdateval;\n")),(0,o.kt)("p",null,"These are used to replace particular columns in a stored blob.  Now let's start with a very simple update to see now it all works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"update backed set name = 'foo' where id = 5;\n")),(0,o.kt)("p",null,"Fundamentally we need to do these things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the target of the update has to end up being the backing table"),(0,o.kt)("li",{parentName:"ul"},"we need the backed table CTE so we can do the filtering"),(0,o.kt)("li",{parentName:"ul"},"we want to use the rowid trick to figure out which rows to update which handles our where clause"),(0,o.kt)("li",{parentName:"ul"},"we need to modify the existing key and/or value blobs rather than create them from scratch")),(0,o.kt)("p",null,"Let's see how this looks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n  backed (*) AS (CALL _backed())\nUPDATE backing\n  SET v = cql_blob_update(v, 'foo', backed.name)\n    WHERE rowid IN (SELECT rowid\n    FROM backed\n    WHERE id = 5);\n")),(0,o.kt)("p",null,"Tearing this down a bit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we needed the normal CTE so that we can use ",(0,o.kt)("inlineCode",{parentName:"li"},"backed")," rows"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE")," clause moved into a ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE rowid")," sub-select just like in the ",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE")," case"),(0,o.kt)("li",{parentName:"ul"},"we changed the SET targets to be ",(0,o.kt)("inlineCode",{parentName:"li"},"k")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"v")," very much like the ",(0,o.kt)("inlineCode",{parentName:"li"},"INSERT")," case, except we used an update helper that takes the current blob and creates a new blob to store",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the helper is varargs so as we'll see it can mutate many columns in one call")))),(0,o.kt)("p",null,"This gives us a working update statement... with one hitch.  It's possible to use the existing column values in the update expressions and there's no way to use our ",(0,o.kt)("inlineCode",{parentName:"p"},"backed")," CTE to get them since the final update has to be all relative to the backing table."),(0,o.kt)("p",null,"Let's look at another example to illustrate the problem:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"update backed set name = name || 'y' where bias < 5;\n")),(0,o.kt)("p",null,"So this is adding the letter 'y' to some rows.  Kind of goofy but similar mutations do happen and have to work.  To make this work the reference to\n",(0,o.kt)("inlineCode",{parentName:"p"},"name")," inside of the set expression has to change. We end up with something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n  backed (*) AS (CALL _backed())\nUPDATE backing\n  SET v = cql_blob_update(v,\n    cql_blob_get(v, backed.name) || 'y',\n    backed.name)\n  WHERE rowid IN (SELECT rowid\n    FROM backed\n    WHERE bias < 5);\n")),(0,o.kt)("p",null,"Importantly the reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," in the set expression was changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_blob_get(v, backed.name)")," -- extracting the name from the value blob. After which it is appended with 'y' as usual."),(0,o.kt)("p",null,"The rest of the pattern is just as it was, in fact literally everything else is unchanged.  But it's easy to see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clause could be arbitrarily complex and it just works.  Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE")," statement has no ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," clause only the fields in the target table might need to be rewritten, so in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"bias")," were possible but only ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," was mentioned."),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_blob_get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_blob_update")," are expanded the result looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\nbacked (rowid, id, name, bias) AS (\n  SELECT\n    rowid,\n    bgetkey(T.k, 0),\n    bgetval(T.v, -6639502068221071091L),\n    bgetval(T.v, -3826945563932272602L)\n  FROM backing AS T\n  WHERE bgetkey_type(T.k) = 2105552408096159860L\n)\nUPDATE backing\nSET v =\n  bupdateval(\n    v,\n    -6639502068221071091L, bgetval(v, -6639502068221071091L) || 'y', 4\n  )\n  WHERE rowid IN (SELECT rowid\n  FROM backed\n  WHERE bias < 5);\n")),(0,o.kt)("p",null,"The blob update function for the value blob requires the original blob, the hash or offset to update, the new value, and the type of the new value.\nThe blob update function for the key blob is the same (blob, hash/offset, value) but the type is not required since the key blob necessarily has all\nthe fields present because they are necessarily not null.  Therefore the type codes are already all present and so the type of every column is known.\nThe value blob might be missing nullable values hence their type might not be stored/known."),(0,o.kt)("p",null,"To illustrate these cases we can make another small example; we'll set up yet another small table that uses the same backing store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@attribute(cql:backed_by=backing)\ncreate table meta(\n name text,\n state long,\n prev_state long,\n primary key(name, state)\n);\n")),(0,o.kt)("p",null,"This update mixes all kinds of values around..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"update meta\n set state = state + 1, prev_state = state\n where name = 'foo';\n")),(0,o.kt)("p",null,"And the final output will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\nmeta (rowid, name, state, prev_state) AS (\n  SELECT\n    rowid,\n    bgetkey(T.k, 0),\n    bgetkey(T.k, 1),\n    bgetval(T.v, -4464241499905806900)\n  FROM backing AS T\n  WHERE bgetkey_type(T.k) = 3397981749045545394\n)\nSET\n  k = bupdatekey(k, bgetkey(k, 1) + 1, 1),\n  v = bupdateval(v, -4464241499905806900, bgetkey(k, 1),  2)\n  WHERE rowid IN (SELECT rowid\n  FROM meta\n  WHERE name = 'foo');\n")),(0,o.kt)("p",null,"As expected the ",(0,o.kt)("inlineCode",{parentName:"p"},"bupdatekey")," call gets the column offset (1) but not the type code (2).  ",(0,o.kt)("inlineCode",{parentName:"p"},"bupdateval")," gets a hash code and a type."),(0,o.kt)("p",null,"All of these transforms are live in the code as of a few days ago."),(0,o.kt)("p",null,"The upshot is that, if you write some simple encoding and decoding functions, you can have very flexible blob storage."),(0,o.kt)("h3",{id:"appendix"},"Appendix"),(0,o.kt)("p",null,"If you want to refer to your blob functions in your own code, such as for indices you'll also need to do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare select function bgetkey_type(b blob) long;\ndeclare select function bgetval_type(b blob) long;\ndeclare select function bgetkey(b blob, iarg integer) long;\ndeclare select function bgetval(b blob, iarg integer) long;\ndeclare select function bcreateval no check blob;\ndeclare select function bcreatekey no check blob;\ndeclare select function bupdateval no check blob;\ndeclare select function bupdatekey no check blob;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bgetval")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bgetkey")," are not readily declarable generally because their result is polymorphic so it's preferable to use ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_blob_get")," as above which then does the rewrite for you.  But it is helpful to have a UDF declaration for each of the above, especially if you want the ",(0,o.kt)("inlineCode",{parentName:"p"},"--rt query_plan")," output to work seamlessly.  Typically ",(0,o.kt)("inlineCode",{parentName:"p"},"bgetval")," would only be needed in the context of a ",(0,o.kt)("inlineCode",{parentName:"p"},"create index")," statement."))}b.isMDXComponent=!0}}]);