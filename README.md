# Dex: SQL Query builder for Deno

Dex is an SQL Query builder for the Deno runtime. Internally Dex is a port of the library Knex, with the following changes made:

 * Dex only supports the query building features of Knex, and doesn't support the execution of the generated statements. To execute the statements, use a database driver built for Deno such as the [Sqlite Module](https://deno.land/x/sqlite/) or the [Postgres Module](https://deno.land/x/postgres/).
 * Internally Dex uses ESM syntax instead of CommonJS syntax
 * NodeJS APIs (such as fs and path) have been replaced with Deno APIs and libraries
 * Some NPM dependencies have been replaced (such as replacing the Colorette dependency with the Deno std colors library, and the uuid library with Deno's uuid library), some have been removed (such as the mkdirp dependency), and the remaining NPM dependencies wrapped using the DEW transformation.


## Versions

There are currently 3 versions of Dex you can use:

 * **mod.js**: This version of Dex uses frozen dependencies which have been linked within the repository. I recommend using this version of Dex, since as long as this repository remains up and as long as their are no breaking changes with new versions of Deno, then this version of Dex will remain working. This version of Dex works with Deno 1.0.0-rc
 * **mod-dyn.js**: This version of Dex uses dynamic dependencies that are pulled from [JSPM.io](https://jspm.io/), the [JSPM Core](https://github.com/jspm/jspm-core) repository, and the [Deno Standard Library](https://deno.land/std/), and use the same semantic versioning that knex uses. The advantage of using this version is that if the dependency maintainers make a bug fix to the dependencies, then these bug fixes will flow through to the dex library when you refresh your Deno cache. However, there is no guarantee that the links to these external dependencies won't break in the future, and if there are any breaking changes in one of these dependencies, then dex may no longer work after the change.


## Installation

You can install and use Dex by simply importing the library from this repository:

```javascript
import Dex from "https://deno.land/x/dex/mod.ts";
```

When you first run your JavaScript/TypeScript file, the Dex library will be fetched, cached, and compiled, and will be available to use in your application


## Dialects

The Dex query builder currently supports the following SQL dialects:

 * **MS SQL**
 * **MySQL**
 * **MySQL2**
 * **OracleDB**
 * **Postgres**
 * **Redshift**
 * **Sqlite3**


## Basic Usage

Below are a few examples of building queries with Dex. Since Dex internally is based on Knex, many of the query building examples on the Knex documentation will work with Dex. See the Knex documentation [here](https://knexjs.org/).

```javascript
import Dex from "https://deno.land/x/dex/mod.ts";

// Setting the dialect for the query builder
let dex = Dex({client: "sqlite3"});


// Creating a table named Users with many types
let tableQuery = dex.schema.createTable("Users", (table) => {
	table.increments("userId").primary(); // auto incrementing primary key
	table.string("username", 32); // varchar of max length 32
	table.string("firstName"); // varchar of max length 255
	table.string("lastName"); // varchar of max length 255
	table.integer("age").unsigned().notNullable(); // unsigned, non-nullable integer
	table.decimal("funds", 2); // decimal with 2 point precision
	table.float("lastLoginTime") // floating point number with 8 point precision
	table.date("joinDate"); // date only (not datetime)
	table.boolean("isNewUser"); // boolean
	table.text("description"); // text
	table.timestamps(null, true); // createdAt and updatedAt datetimes
}).toString();

console.log(tableQuery);

/**
 * ========================================
 *  Table Query Result
 * ========================================
 *
 * create table `Users` (`userId` integer not null primary key autoincrement, `username` varchar(32), `firstName` varchar(255), `lastName` varchar(255), `age` integer not null, `funds` float, `lastLoginTime` float, `joinDate` date, `isNewUser` boolean, `description` text, `created_at` datetime not null default CURRENT_TIMESTAMP, `updated_at` datetime not null default CURRENT_TIMESTAMP)
 */



// Creating and inserting data into the Names table
tableQuery = dex.schema.createTable("Names", (table) => {
	table.string("firstname");
	table.string("lastname");
}).toString();

let insertQuery = dex.queryBuilder()
	.insert([
		{firstname: "hello", lastname: "world"},
		{firstname: "deno", lastname: "land"},
		{firstname: "first", lastname: "last"},
	])
	.into("Names")
	.toString();

console.log(tableQuery);
console.log(insertQuery);

/**
 * ========================================
 *  Table Query Result
 * ========================================
 *
 * create table `Names` (`firstname` varchar(255), `lastname` varchar(255))
 *
 *
 * ========================================
 *  Insert Query Result
 * ========================================
 *
 * insert into `Names` (`firstname`, `lastname`) select 'hello' as `firstname`, 'world' as `lastname` union all select 'deno' as `firstname`, 'land' as `lastname` union all select 'first' as `firstname`, 'last' as `lastname`
 */



// Selecting all data from the Names table
let selectQuery = dex.select().from("Names").toString();

console.log(selectQuery);

/**
 * ========================================
 *  SELECT Query Result
 * ========================================
 *
 * select * from `Names`
 */



// Selecting specific data from the Names table with a WHERE statement
let whereQuery = dex.select("firstname").from("Names").where({firstname: "hello"}).toString();

console.log(whereQuery);

/**
 * ========================================
 *  WHERE Query Result
 * ========================================
 *
 * select `firstname` from `Names` where `firstname` = 'hello'
 */



// Using all of the available dialects with SELECT, WHERE, and LIMIT statements
const CONFIG_ARRAY = [
	{client: 'mssql',},
	{client: 'mysql',},
	{client: 'mysql2',},
	{client: 'oracledb',},
	{client: 'postgres',},
	{client: 'redshift',},
	{client: 'sqlite3', useNullAsDefault: true},
]

CONFIG_ARRAY.forEach(config => {
	dex = Dex(config);
	
	let sqlQuery = dex.queryBuilder()
		.select("MyColumn")
		.from("MyTable")
		.where({
			myFirstRow: "Hello",
			mySecondRow: "World",
		})
		.limit(15)
		.toString();
	
	console.log(sqlQuery);
});

/**
 * ========================================
 *  MS SQL Query Result
 * ========================================
 *
 * select top (15) [MyColumn] from [MyTable] where [FirstName] = 'Hello' and [LastName] = 'World'
 *
 *
 * ========================================
 *  MySQL Query Result
 * ========================================
 *
 * select `MyColumn` from `MyTable` where `FirstName` = 'Hello' and `LastName` = 'World' limit 15
 *
 *
 * ========================================
 *  MySQL2 Query Result
 * ========================================
 *
 * select `MyColumn` from `MyTable` where `FirstName` = 'Hello' and `LastName` = 'World' limit 15
 *
 *
 * ========================================
 *  OracleDB Query Result
 * ========================================
 *
 * select * from (select "MyColumn" from "MyTable" where "FirstName" = 'Hello' and "LastName" = 'World') where rownum <= 15
 *
 *
 * ========================================
 *  Postgres Query Result
 * ========================================
 *
 * select "MyColumn" from "MyTable" where "FirstName" = 'Hello' and "LastName" = 'World' limit 15
 *
 *
 * ========================================
 *  Redshift Query Result
 * ========================================
 *
 * select "MyColumn" from "MyTable" where "FirstName" = 'Hello' and "LastName" = 'World' limit 15
 *
 *
 * ========================================
 *  Sqlite3 Query Result
 * ========================================
 *
 * select `MyColumn` from `MyTable` where `FirstName` = 'Hello' and `LastName` = 'World' limit 15
 */
```


## License
MIT License

Copyright (c) 2020 Anthony Mancini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
