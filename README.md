# Express.js and Knex.js in TypeScript

Server in Node.js, using the Express.js framework and the Knex.js library to connect to the database. The server allows GET, POST, PUT and DELETE operations to be performed on the '**websites**' table in the MySQL database. The 'websites' table contains four columns: id, url, description and date. Responses returned by the server are in JSON format.

## Endpoint

Endpoint "**/api/websites**". It supports four different HTTP requests: GET, POST, PUT and DELETE. All requests require a valid "Content-Type" header - POST, PUT and DELETE requests require **JSON** or **www-form-urlencoded format**.

- **GET** -> Returns a list of all web pages from the database.
- **POST** -> Adds a new website to the database. Required parameters:
  - **url** - website address (string)
  - **description** - description of the websitej (string)
  - **date** (opcional) - date the website was added to the database in the format YYYY-MM-DD (string)
- **PUT** -> Updates an existing website in the database. Required parameters (\*only one of these is required):
  - **id** - website identifier (number)
  - **url** \* - website address (string)
  - **description** \* - description of webpage (string)
  - **date** \* - date of website update in the database in the format YYYY-MM-DD (string)
- **DELETE** -> Removes the website from the database. Required parameter:
  - **id** - website identifier (number)

## Answers

The server returns the relevant error codes if there are problems processing the request. Possible error codes are:

- **400** -> Invalid request (e.g. missing required parameters).
- **404** - The requested resource was not found.
- **500** - Server error.

## Installation and Run

#### 1. Clone the repo

```sh
git clone https://github.com/lukas60055/express-knex-mysql
```

#### 2. Install NPM packages

```sh
npm install
```

#### 3. Create an .env file and set the server port and connection to the MySQL database

```sh
PORT=

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

#### 4. Build application

```sh
npm run build
```

#### 5. Database migration

```sh
npm run migrate
```

#### 6. Start the server (one of the commands)

```sh
npm run dev
npm run start
```

#### \*7. Filling the 'websites' table with data

```sh
npm run seed
```
