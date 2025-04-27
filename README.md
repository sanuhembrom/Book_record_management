# Book_record_management

Server >> Storing certain book data
       >> User Register 
       >> Subscriber


This is book record management API Server/Backend for the library system or management of reords or manuals or books

Fine system:
User: 06/03/2023 - 06/06/2023
07/06/2023 => 50*3=150/-

3 months (Basic)
6 months (Standard)
12 months (Premium)

If the subscription type is standard && if the subscription date is 06/03/2023
=> then subscription valid till 06/09/2025

>> 23/06/2023 => we need to pay a fine of 100+50


missed by renewal date >> 50/-
missed by subscription date >> 100/- 
missed by renewal && subscription date >> 150/-





# Routes and Endpoints

## /users
POST: Create a new user
GET: Get all the user info here

## /users/{id}
GET: Get a user by their ID
DELETE: Delete a user by id (chk if he/she still have an issued book) && (is there any fine to paid)

## /users/subscription-details{id}
GET: Get user subscription details 
        >> Date of Subscription 
        >> Valid till
        >> Is there any fine

## /books
GET: Get all the books
POST: Create/Add a new book

## /books/{id}
GET: Get all the book by id
PUT: Update a book by id

## /books/issued
GET: Get all issued books

## /books/issued/withFine
GET: get all issued books with their fine

## npm  init
## npm i nodemon --save-dev
## npm run dev


...each
"name": "Jane", 
      "surname": "Doe",
      "email": "user@gmail.com",
      "subcriptionType": "Premium",
      "subcriptionDate": "01/01/2022"

...data
  "data": {
        "name": "sanu",
        "surname": "Hembrom"
  }

name: "sanu",
surname: "Hembrom",
email: user@gmail.com