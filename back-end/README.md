# Express.js + MongoDB API Project

This project is an API built with **Express.js** and **MongoDB** that provides user authentication, CRUD operations, and protected routes. It demonstrates how to handle JWT-based authentication and implement basic CRUD functionality for resources.

## Features
- **User Authentication**: Register and login functionality with JWT tokens.
- **Protected Routes**: Access user profile only after successful authentication.
- **CRUD Operations**: Create, read, update, and delete items.
- **API Documentation**: Detailed API documentation using Postman and cURL.

## Technologies Used
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and item data.
- **JWT**: JSON Web Token for user authentication and authorization.
- **Mongoose**: MongoDB ODM for managing database models.

## Setup and Installation

### Prerequisites
- Node.js (>=14)
- MongoDB instance running locally or through a cloud provider.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-mongo-api.git
   cd express-mongo-api


npm install

.env file 

PORT=4021
MONGO_URI="mongodb://localhost:27017/project"
BCRYPT_SALT_ROUNDS=10
JWT_SECRET = "super_secret_key"
NODE_ENV=development

npm run dev or npm start

POST auth/register

{
  "username": "user123",
  "email": "user@example.com",
  "password": "password123"
}

POST auth/login

{
  "email": "user@example.com",
  "password": "password123"
}

GET auth/login

Products

POST /products

{
    "name": "Macbook",
    "price": 1000,
    "description": "good product",
    "stock": 100,
    "category": "electronics"
}

PUT /products/id

{
    "name": "Macbook",
    "price": 1500,
    "description": "good product",
    "stock": 100,
    "category": "electronics"
}

DELETE /products/id

GET /products/id

GET /products

Users

GET /users

GET users/id

DELETE users/id

PUT users/id

{
    "name": "Another_name"
}

GET users/profile/me

PUT users/profile/me

{
    "name": "Another_name"
}

DELETE users/profile/me
