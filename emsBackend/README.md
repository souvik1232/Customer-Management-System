# Backend with Node.js and MSSQL

This is a backend repository built using Node.js and MSSQL. It provides API's for interacting with a MSSQL database and the frontend respectively.

## Requirements
Node.js version 12 or higher
MSSQL server

## Installation
Install dependencies : ```npm install```.  
Configure the database connection in `dbconfig.js` :  
```
const config = {
  server: 'your-server',
  user: 'your-username',
  password: "your-password",
  database: 'your-databsename',
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  },
};
```    
Check in SQL Server Manger if SQL SERVER BROWSER is enabled or not , if not enable it and rerun the SQL service.  
Start the server : ```npm run dev```  

This will start the server on port 4000 by default.  

# API Endpoints
The following endpoints are available:  

`GET /users`: Returns a list of all users in the database.  
`POST /users`: Adds a new user to the database.  
`PUT /users/:id`: Updates the user with the specified ID.  
`DELETE /users/:id`: Deletes the user with the specified ID.  
