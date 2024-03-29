const express = require('express');
const dotenv = require('dotenv').config() 
const errorHandler = require('./middleware/errorHandler')
const dbConnection = require('./config/dbConnection')
dbConnection();
const app = express();


const port = process.env.PORT || 5002 ;

// this middleware is used to parse body of client request at server side 
app.use(express.json());

app.get('/' , (req,res) => {
    res.send(" Welcome To Contact API Build By @abhiimali ")
});

app.use('/api/contacts' , require('./routes/contactRoutes'));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);


app.listen(port,'localhost', () => { console.log(`Server Running On ${port}`)});
