const express = require('express');
const dotenv = require('dotenv').config() 
const errorHandler = require('./middleware/errorHandler')
const app = express();


const port = process.env.PORT || 5002 ;
app.listen(port,'localhost', () => { console.log(`Server Running On ${port}`)});

// this middleware is used to parse body of client request at server side 
app.use(express.json());

app.use('/api/contacts' , require('./routes/contactRoutes'));

app.use(errorHandler);


