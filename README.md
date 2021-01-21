<p  align="center">

<a href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo_text.svg"  width="320"  alt="Nest Logo" /></a>

</p>

I developed this CRUD to know how the nest.js framework works. Over time, I will further improve the knowledge gained.

#### What did I learn from developing this application?

- Creation, structure and operation of controllers;
- Providers (Business rules);
- Dependency injection;
- Modules (Grouping for sole import responsibility);
- Decorators.

## Requirements

- Node version 12.18.4 or lasted
- Npm version 6.14.6 or lasted
- Database (MongoDB)

## Installation
    command: npm install

## Routes

|            URL    |Method|Description|
|----------------|-------------------------------|-----------------------------|
|/documents|GET||
|/documents/:id|GET|Id document|
|/documents|POST|{"description": "your value"}|
|/documents/:id|PUT|Id document, {"description": "your value"}|
|/documents/:id|DELETE|Id document|