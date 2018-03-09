# posgtres-express-example

## :orange_book: Description

Simple postgres + express example application for a todo list like API.

## :package: Packages

- [Nodemon](https://github.com/remy/nodemon): Allows the server to automatically restart after changes are detected. This prevents the need for manually stopping and starting the server every time changes are made. It also allows you to find errors faster if when making changes to the code, you notice errors start appearing in the terminal.

## :wrench: Setup

- Start by creating the postgres database by running: `createdb todo-example`.
- Run the database migration(s) by running:
  - `sequelize db:migrate`

## :bulb: Ideas to extend this app

If you wanted to extend this app and make this application more complex, you could try:

- Create a `List` model and make each `Todo` fall under a specific list, or even multiple lists!
- Create users and assign each `List` (or `Todo`s if you didn't want to do the lists) to a user or multiple users.
- Authenticate the requests to `update` or `delete` `Todo`s so that only the user who created it can change it.
