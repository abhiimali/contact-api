## contact-api   

###  [See Live API  ](https://contact-api-wwfd.onrender.com/api/contacts)


A contact manager is a software application that is used to store and manage a list of contacts. This can include personal and professional contacts, as well as contact information such as names, phone numbers, email addresses. 

A Node.js REST API is an API that uses the Node.js runtime  to build and expose a set of endpoints that can be used to perform CRUD (create, read, update, delete) operations on a contact manager's database.

This readme file provides a short introduction to the Node.js REST API for a contact manager app.

##### API Documentation  :  [Postman API Documentation ](https://documenter.getpostman.com/view/26470243/2s93XyTNGE)

### Endpoints
The API provides the following endpoints:

- `GET /api/contacts: Retrieves all contacts for the authenticated user.`
- `GET /api/contacts/:id: Retrieves a single contact by ID for the authenticated user.`
- `POST /api/contacts: Creates a new contact for the authenticated user.`
- `PUT /api/contacts/:id: Updates an existing contact by ID for the authenticated user.`
- `DELETE /api/contacts/:id: Deletes a single contact by ID for the authenticated user.`
- `POST  /api/register  create user account using username , email and password.`
- `POST  /api/login  Login User  Via email and password.`

##### For more detailed information about each endpoint, including expected request and response formats, please refer to the [ API Documentation ](https://documenter.getpostman.com/view/26470243/2s93XyTNGE).

##  Technologies and Tools Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A popular and flexible web application framework for Node.js.
- JSON Web Tokens (JWT): A standard for securely transmitting information between parties as a JSON object.
- MongoDB: A NoSQL document database that uses JSON-like documents with optional schemas.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a schema-based solution to model application data.
- Atlas MongoDB: A cloud-based database service for MongoDB.
- dotenv: A zero-dependency module that loads environment variables from a .env file

## Local Installation
**To install and run the API locally, follow these steps:**

- Clone this repository to your local machine using `git clone https://github.com/your-username/contact-api.git`
- Navigate to the root directory of the project using `cd contact-api`
- Install the dependencies using `npm install`
- Create a .env file based on the .env.example file and fill in your own environment variables, such as the database URL & PORT Number  
- Start the server using `npm start`
- The API should now be running at http://localhost:5002 [ Default Port in case you not specified one ]

### some potential impacts of a contact manager API:

- **Improved Efficiency:** By providing a centralized API to manage contact information, businesses can reduce the time and resources required to manage contacts, leading to increased efficiency.

- **Increased Integration:** A contact manager API can be integrated with other applications and platforms, allowing for seamless data exchange and increased collaboration.

- **Enhanced Data Security:**  A contact manager API can provide robust security features, such as encryption, access control, and auditing, to protect sensitive customer information.


