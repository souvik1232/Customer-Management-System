# Backend with Node.js and MSSQL

This is a backend repository built using Node.js and MSSQL. It provides an API for interacting with a MSSQL database.

## Requirements
Node.js version 12 or higher
MSSQL server

## Installation
Clone the repository : ```git clone https://github.com/your-username/backend.git```.  
Install dependencies : ```npm install```.  
Configure the database connection :  
```
const config = {
  server: 'your-server',
  user: 'your-username',
  password: "12345678",
  database: 'your-password',
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  },
};
```  
Start the server : ```npm run dev```  

This will start the server on port 4000 by default.  

# API Endpoints
The following endpoints are available:  

`GET /users`: Returns a list of all users in the database.  
`POST /users`: Adds a new user to the database.  
`PUT /users/:id`: Updates the user with the specified ID.  
`DELETE /users/:id`: Deletes the user with the specified ID.  
