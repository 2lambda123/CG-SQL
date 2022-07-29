"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[280],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=l,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2314:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],i={id:"ch02",title:"Chapter 2: Using Data",sidebar_label:"Chapter 2: Using Data"},s=void 0,c={unversionedId:"ch02",id:"ch02",title:"Chapter 2: Using Data",description:"\x3c!---",source:"@site/../CQL_Guide/ch02.md",sourceDirName:".",slug:"/ch02",permalink:"/cql-guide/ch02",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vaishnavi Mantha",lastUpdatedAt:1659071119,formattedLastUpdatedAt:"7/29/2022",frontMatter:{id:"ch02",title:"Chapter 2: Using Data",sidebar_label:"Chapter 2: Using Data"},sidebar:"someSidebar",previous:{title:"Chapter 1: Introduction",permalink:"/cql-guide/ch01"},next:{title:"Chapter 3: Expressions, Literals, Nullability, Sensitivity",permalink:"/cql-guide/ch03"}},u={},p=[{value:"A Sample Program",id:"a-sample-program",level:3},{value:"Providing a Suitable Database",id:"providing-a-suitable-database",level:3},{value:"Declaring Schema",id:"declaring-schema",level:3},{value:"Explaining The New Hello World",id:"explaining-the-new-hello-world",level:3},{value:"Introducing Cursors",id:"introducing-cursors",level:3},{value:"Going Crazy",id:"going-crazy",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The point of using CQL is to facilitate access to a SQLite database so we'll switch gears to a slightly more complicated setup.  We'll\nstill keep things fairly simple but let's start to use some database features.  Note: it is not the intent of this tutorial to also be\na primer for the SQLite programming language which is so ably documented on ",(0,o.kt)("a",{parentName:"p",href:"https://sqlite.org/"},"https://sqlite.org/"),".  Please refer to that site for details\non the meaning of the SQL statements used here if you are new to SQL."),(0,o.kt)("h3",{id:"a-sample-program"},"A Sample Program"),(0,o.kt)("p",null,"Suppose we have the following program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="hello.sql"',title:'"hello.sql"'},"-- needed to allow vararg calls to C functions\ndeclare procedure printf no check;\n\ncreate table my_data(t text not null);\n\ncreate proc hello()\nbegin\n  insert into my_data(t) values(\"Hello, world\\n\");\n  declare t text not null;\n  set t := (select * from my_data);\n  call printf('%s', t);\nend;\n")),(0,o.kt)("p",null,'That looks like an interesting little baby program and it appears as though it would once again print that most famous of salutations, "Hello, world".'),(0,o.kt)("p",null,"Well, it doesn't.  At least, not yet.  Let's walk through the various things that are going to go wrong as this will teach us everything we need to know about activating CQL from some environment of your choice."),(0,o.kt)("h3",{id:"providing-a-suitable-database"},"Providing a Suitable Database"),(0,o.kt)("p",null,"CQL is just a compiler, it doesn't know how the code it creates will be provisioned any more than say clang does.\nIt creates functions with predictable signatures so that they can be called from C just as easily as the SQLite API\nitself, and using the same currency.  Our new version of ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," now requires a database handle because it performs\ndatabase operations.  Also there are now opportunities for the database operations to fail, and so ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," now provides a\nreturn code."),(0,o.kt)("p",null,"A new minimal ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," program might look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'#include <stdlib.h>\n#include <sqlite3.h>\n\n#include "hello.h"\n\nint main(int argc, char **argv)\n{\n  sqlite3 *db;\n  int rc = sqlite3_open(":memory:", &db);\n  if (rc != SQLITE_OK) {\n    exit(1); /* not exactly world class error handling but that isn\'t the point */\n  }\n  rc = hello(db);\n  if (rc != SQLITE_OK) {\n    exit(2);\n  }\n\n  sqlite3_close(db);\n}\n')),(0,o.kt)("p",null,"If we re-run CQL and look in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.h")," output file we'll see that the declaration of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," function is now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="hello.h"',title:'"hello.h"'},"...\nextern CQL_WARN_UNUSED cql_code hello(sqlite3 *_Nonnull _db_);\n...\n")),(0,o.kt)("p",null,"This indicates that the database is used and a SQLite return code is provided.  We're nearly there.  If you attempt\nto build the program as before there will be several link-time errors due to missing functions.  Typically these\nare resolved by providing the SQLite library to the command line and also adding the CQL runtime.\nThe new command line looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cc -o hello main.c hello.c cqlrt.c -lsqlite3\n$ ./hello\nHello, world\n")),(0,o.kt)("p",null,"The cql runtime can be anywhere you want it to be, and of course the usual C separate compilation methods\ncan be applied. More on that later."),(0,o.kt)("p",null,"But actually, that program doesn't quite work yet.  If you run it, you'll get an error result code, not the message\n\"Hello, world\"."),(0,o.kt)("p",null,"Let's talk about the final missing bit."),(0,o.kt)("h3",{id:"declaring-schema"},"Declaring Schema"),(0,o.kt)("p",null,'In CQL a loose piece of Data Definition Language (henceforth DDL) does not actually create or drop anything.\nIn most CQL programs the normal situation is that "something" has already created the database and put some\ndata in it.  You need to tell the CQL compiler about the schema so that it knows what the tables are and what to\nexpect to find in those tables.  This is because typically you\'re reconnecting to some sort of existing database.\nSo, in CQL, loose DDL simply ',(0,o.kt)("em",{parentName:"p"},"declares")," schema, it does not create it.  To create schema you have to put the DDL\ninto a procedure you can run.  If you do that, then the DDL still serves a declaration, but also the schema will be\ncreated when the procedure is executed."),(0,o.kt)("p",null,"We need to change our program a tiny bit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="hello.sql"',title:'"hello.sql"'},"-- needed to allow vararg calls to C functions\ndeclare procedure printf no check;\n\ncreate proc hello()\nbegin\n  create table my_data(t text not null);\n  insert into my_data(t) values(\"Hello, world\\n\");\n  declare t text not null;\n  set t := (select * from my_data);\n  call printf('%s', t);\n  drop table my_data;\nend;\n")),(0,o.kt)("p",null,"If we rebuild the program, it will now behave as expected."),(0,o.kt)("h3",{id:"explaining-the-new-hello-world"},"Explaining The New Hello World"),(0,o.kt)("p",null,"Let's go over every important line of the new program, starting from main."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int rc = sqlite3_open(":memory:", &db);\n')),(0,o.kt)("p",null,"This statement gives us an empty, private, in-memory only database to work with.  This is the simplest case\nand it's still very useful.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite_open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite_open_v2")," functions can be used to create a variety of\ndatabases per the SQLite documentation."),(0,o.kt)("p",null,"We'll need such a database to use our procedure, and we use it in the call here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"rc = hello(db);\n")),(0,o.kt)("p",null,"This provides a valid db handle to our procedure.  Note that the procedure doesn't know what database it is\nsupposed to operate on, it expects to be handed a suitable database on a silver platter.  In fact any given proc\ncould be used with various databases at various times.  Just like SQLite, CQL does not enforce any particular\ndatabase setup; it does what you tell it to."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," runs we begin with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table my_data(t text not null);\n")),(0,o.kt)("p",null,"This will create the ",(0,o.kt)("inlineCode",{parentName:"p"},"my_data")," table with a single column ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", of type ",(0,o.kt)("inlineCode",{parentName:"p"},"text not null"),".  That will work because\nwe know we're going to call this with a fresh/empty database.  More typically you might do ",(0,o.kt)("inlineCode",{parentName:"p"},"create table if not exists ...")," or otherwise have a general attach/create phase or something to that effect.  We'll dispense with that here."),(0,o.kt)("p",null,"Next we'll run the insert statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'insert into my_data(t) values("Hello, world\\n");\n')),(0,o.kt)("p",null,"This will add a single row to the table.  Note that we have again used double quotes, meaning that this is a C string literal.  This is highly convenient given the escape sequences.  Normally SQLite text has the newlines directly embedded in it; that practice isn't very compiler friendly, hence the alternative."),(0,o.kt)("p",null,"Next we declare a local variable to hold our data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare t text not null;\n")),(0,o.kt)("p",null,"Then, we can read back our data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"set t := (select * from my_data);\n")),(0,o.kt)("p",null,"This form of database reading has very limited usability but it does work for this case and it is illustrative.\nThe presence of ",(0,o.kt)("inlineCode",{parentName:"p"},"(select ...)")," indicates to the CQL compiler that the parenthesized expression should be given to\nSQLite for evaluation according to the SQLite rules.  The expression is statically checked at compile time to\nensure that it has exactly one result column. In this case the ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," is just column ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", and actually it would have\nbeen clearer to use ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," directly here but then there wouldn't be a reason to talk about ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," and multiple columns.\nAt run time, the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," query must return exactly one row or an error code will be returned.  It's not uncommon\nto see ",(0,o.kt)("inlineCode",{parentName:"p"},"(select ... limit 1)")," to force the issue.  But that still leaves the possibility of zero rows, which would\nbe an error.  We'll talk about more flexible ways to read from the database later."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can declare a variable and assign it in one step with the ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," keyword, e.g."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"let t := (select * from my_data);\n")),(0,o.kt)("p",{parentName:"blockquote"},"The code would normally be written in this way but for discussion purposes, these examples continue to avoid ",(0,o.kt)("inlineCode",{parentName:"p"},"LET"),".")),(0,o.kt)("p",null,"At this point it seems wise to bring up the unusual expression evaluation properties of CQL.\nCQL is by necessity a two-headed beast.  On the one side there is a rich expression evaluation language for\nworking with local variables. ","[What about the other side?]"," Those expressions are compiled into C logic that emulates the behavior of SQLite\non the data.  It provides complex expression constructs such as ",(0,o.kt)("inlineCode",{parentName:"p"},"IN")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CASE")," but it is ultimately evaluated by C\nexecution.  Alternately, anything that is inside of a piece of SQL is necessarily evaluated by SQLite itself.\nTo make this clearer let's change the example a little bit before we move on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"set t := (select \"__\"||t||' '||1.234 from my_data);\n")),(0,o.kt)("p",null,"This is a somewhat silly example but it illustrates some important things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"even though SQLite doesn't support double quotes, that's no problem because CQL will convert the expression into single quotes with the correct escape values as a matter of course during compilation"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"||")," concatenation operator is evaluated by SQLite"),(0,o.kt)("li",{parentName:"ul"},"you can mix and match both kinds of string literals, they will all be the single quote variety by the time SQLite sees them"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"||")," operator has lots of complex formatting conversions (such as converting real values to strings)"),(0,o.kt)("li",{parentName:"ul"},"in fact the conversions are so subtle as to be impossible to emulate in loose C code with any economy, so, like a few other operators, ",(0,o.kt)("inlineCode",{parentName:"li"},"||")," is only supported in the SQLite context")),(0,o.kt)("p",null,"Returning now to our code as written, we see something very familiar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"call printf('%s', t);\n")),(0,o.kt)("p",null,"Note that we've used the single quote syntax here for no good reason other than illustration. There are no escape\nsequences here so either form would do the job. Importantly, the string literal will not create a string object as before\nbut the text variable ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," is of course a string reference.  Before it can be used in a call to an un-declared function it\nmust be converted into a temporary C string.  This might require allocation in general, that allocation is automatically\nmanaged."),(0,o.kt)("p",null,'Also, note that CQL assumes that calls to "no check" functions should be emitted as written.  In this way you can use\n',(0,o.kt)("inlineCode",{parentName:"p"},"printf")," even though CQL knows nothing about it."),(0,o.kt)("p",null,"Lastly we have:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop table my_data;\n")),(0,o.kt)("p",null,"This is not strictly necessary because the database is in memory anyway and the program is about to exit but there\nit is for illustration."),(0,o.kt)("p",null,"Now the Data Manipulation Language (i.e. insert and select here; and henceforth DML) and the DDL might fail for various reasons.  If that happens the proc will ",(0,o.kt)("inlineCode",{parentName:"p"},"goto")," a cleanup handler and return the failed return code instead of running the rest of the code.  Any temporary memory allocations will be freed and any pending\nSQLite statements will be finalized.  More on that later when we discuss error handling."),(0,o.kt)("p",null,'With that we have a much more complicated program that prints "Hello, world"'),(0,o.kt)("h3",{id:"introducing-cursors"},"Introducing Cursors"),(0,o.kt)("p",null,"In order to read data with reasonable flexibility, we need a more powerful construction.\nLet's change our example again and start using some database features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare procedure printf no check;\n\ncreate proc hello()\nbegin\n  create table my_data(\n    pos integer not null primary key,\n    txt text not null\n  );\n\n  insert into my_data values(2, 'World');\n  insert into my_data values(0, 'Hello');\n  insert into my_data values(1, 'There');\n\n  declare C cursor for select * from my_data order by pos;\n\n  loop fetch C\n  begin\n    call printf(\"%d: %s\\n\", C.pos, C.txt);\n  end;\n  close C;\n\n  drop table my_data;\nend;\n")),(0,o.kt)("p",null,"Reviewing the essential parts of the above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table my_data(\n  pos integer not null primary key,\n  txt text not null\n);\n")),(0,o.kt)("p",null,"The table now includes a position column to give us some ordering.  That is the primary key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into my_data values(2, 'World');\n")),(0,o.kt)("p",null,"The insert statements provide both columns, not in the printed order.  The insert form where the columns are not\nspecified indicates that all the columns will be present, in order; this is more economical to type.  CQL will generate errors at compile time if there are any missing columns or if any of the values are not type compatible with the indicated column."),(0,o.kt)("p",null,"The most important change is here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare C cursor for select * from my_data order by pos;\n")),(0,o.kt)("p",null,"We've created a non-scalar variable ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", a cursor over the indicated result set.  The results will be ordered by ",(0,o.kt)("inlineCode",{parentName:"p"},"pos"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"loop fetch C\nbegin\n  ...\nend;\n")),(0,o.kt)("p",null,"This loop will run until there are no results left (it might not run at all if there are zero rows, that is not an error).\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"FETCH")," construct allows you to specify target variables, but if you do not do so, then a synthetic structure is\nautomatically created to capture the projection of the ",(0,o.kt)("inlineCode",{parentName:"p"},"select"),".  In this case the columns are ",(0,o.kt)("inlineCode",{parentName:"p"},"pos")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"txt"),".\nThe automatically created storage exactly matches the type of the columns in the select list which could itself be tricky to calculate\nif the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," is complex.  In this case the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," is quite simple and the columns of the result directly match the schema for ",(0,o.kt)("inlineCode",{parentName:"p"},"my_data"),".\nAn integer and a string reference.  Both not null."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'call printf("%d: %s\\n", C.pos, C.txt);\n')),(0,o.kt)("p",null,"The storage for the cursor is given the same names as the columns of the projection of the select, in this case the columns were not renamed so ",(0,o.kt)("inlineCode",{parentName:"p"},"pos")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"txt")," are the fields in the cursor.\nDouble quotes were used in the format string to get the newline in there easily."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"close C;\n")),(0,o.kt)("p",null,"The cursor is automatically released at the end of the procedure but in this case we'd like to release it before the\n",(0,o.kt)("inlineCode",{parentName:"p"},"drop table")," happens so there is an explicit ",(0,o.kt)("inlineCode",{parentName:"p"},"close"),". This is frequently elided in favor of the automatic cleanup.\nThere is an ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," cursor statement as well but it doesn't do anything.  It's there because many systems have that\nconstruct and it does balance the ",(0,o.kt)("inlineCode",{parentName:"p"},"close"),"."),(0,o.kt)("p",null,"If you compile and run this program, you'll get this output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cc -x c -E hello.sql | cql --cg hello.h hello.c\n$ cc -o hello main.c hello.c cqlrt.c -lsqlite3\n$ ./hello\n0: Hello\n1: There\n2: World\n")),(0,o.kt)("p",null,"So the data was inserted and then sorted."),(0,o.kt)("h3",{id:"going-crazy"},"Going Crazy"),(0,o.kt)("p",null,"We've only scratched the surface of what SQLite can do and most DML constructs are supported by CQL.\nThis includes common table expressions, and even recursive versions of the same. But remember, when it\ncomes to DML, the CQL compiler only has to validate the types and figure out what the result shape will be --\nSQLite always does all the heavy lifting of evaluation. All of this means with remarkably little additional code,\nthe example below from the SQLite documentation can be turned into a CQL stored proc using the constructs\nwe have defined above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'-- needed to allow vararg calls to C functions\ndeclare procedure printf no check;\n\ncreate proc mandelbrot()\nbegin\n  -- this is basically one giant select statement\n  declare C cursor for\n    with recursive\n      -- x from -2.0 to +1.2\n      xaxis(x) as (select -2.0 union all select x + 0.05 from xaxis where x < 1.2),\n\n      -- y from -1.0 to +1.0\n      yaxis(y) as (select -1.0 union all select y + 0.1 from yaxis where y < 1.0),\n\n      m(iter, cx, cy, x, y) as (\n        -- initial seed iteration count 0, at each of the points in the above grid\n        select 0 iter, x cx, y cy, 0.0 x, 0.0 y from xaxis, yaxis\n        union all\n        -- the next point is always iter +1, same (x,y) and the next iteration of z^2 + c\n        select iter+1 iter, cx, cy, x*x-y*y + cx x, 2.0*x*y + cy y from m\n        -- stop condition, the point has escaped OR iteration count > 28\n        where (m.x*m.x + m.y*m.y) < 4.0 and m.iter < 28\n      ),\n      m2(iter, cx, cy) as (\n       -- find the last iteration for any given point to get that count\n       select max(iter), cx, cy from m group by cx, cy\n      ),\n      a(t) as (\n        -- convert the iteration count to a printable character, grouping by line\n        select group_concat(substr(" .+*#", 1 + min(iter/7,4), 1), \'\')\n        from m2 group by cy\n      )\n    -- group all the lines together\n    select rtrim(t) line from a;\n\n  -- slurp out the data\n  loop fetch C\n  begin\n    call printf("%s\\n", C.line);\n  end;\nend;\n')),(0,o.kt)("p",null,"This code uses all kinds of SQLite features to produce this text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$\n                                    ....#\n                                   ..#*..\n                                 ..+####+.\n                            .......+####....   +\n                           ..##+*##########+.++++\n                          .+.##################+.\n              .............+###################+.+\n              ..++..#.....*#####################+.\n             ...+#######++#######################.\n          ....+*################################.\n #############################################...\n          ....+*################################.\n             ...+#######++#######################.\n              ..++..#.....*#####################+.\n              .............+###################+.+\n                          .+.##################+.\n                           ..##+*##########+.++++\n                            .......+####....   +\n                                 ..+####+.\n                                   ..#*..\n                                    ....#\n                                    +.\n")),(0,o.kt)("p",null,"Which probably doesn't come up very often but it does illustrate several things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WITH RECURSIVE")," actually provides a full lambda calculus so arbitrary computation is possible"),(0,o.kt)("li",{parentName:"ul"},"You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"WITH RECURSIVE")," to create table expressions that are sequences of numbers easily, with no reference to any real data")),(0,o.kt)("p",null,"Note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A working version of this code can be found in the ",(0,o.kt)("inlineCode",{parentName:"li"},"sources/demo")," directory of CG/SQL project."),(0,o.kt)("li",{parentName:"ul"},"Additional demo code is available in ",(0,o.kt)("a",{parentName:"li",href:"https://cgsql.dev/cql-guide/x10"},"Appendix 10"),".")))}h.isMDXComponent=!0}}]);