# posgtres-express-example

## :orange_book: Description

Simple postgres + express example application for a todo list like API.

## :package: Packages

- [Nodemon](https://github.com/remy/nodemon): Allows the server to automatically restart after changes are detected. This prevents the need for manually stopping and starting the server every time changes are made. It also allows you to find errors faster if when making changes to the code, you notice errors start appearing in the terminal.

## Setup

- Start by creating the postgres database by running: `createdb todo-example`.
- Generate the Todo model by running:
  - `sequelize model:create --name Todo --attributes title:string`
