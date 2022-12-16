const asyncHandler = require('express-async-handler')

// @desc  Get All Contacts 
// @route  /api/contacts
// @access Public 

const getContacts =  asyncHandler ( async (req,res) => {
    res.status(200).send({ message :" Getting All Contacts"});
});

// @desc  Get Individual Contact
// @route GET /api/contacts/:id 
// @access Public 

const getContact =   asyncHandler (async (req,res) =>{
    res.status(200).send({ message : ` Get contact   ${req.params.id}`});
});


// @desc  Create  Contact 
// @route POST  /api/contacts
// @access Public 
const createContact = asyncHandler ( async (req,res) => {
    console.log(` Req Body : ` , req.body);
    const {name , email ,phone } = req.body ;
    if(!name || !email || !phone) 
        res.status(400);
        throw new Error(" All Field Are Mandetory ")
    res.status(201).send( { message : "contact Created"});
});

// @desc  Delete single Contacts 
// @route  DELETE /api/contacts/:id
// @access Public 

const deleteContact = asyncHandler ( async (req,res) =>{
    res.status(200).send({ message : `contact Deleted  ${req.params.id}`});
});


// @desc  Update A Contacts 
// @route  Update /api/contacts/:id
// @access Public 

const updateContact = asyncHandler ( async (req,res) => {
    res.status(200).send( { message : `Updated Contact ${req.params.id}`})
});


module.exports = {  getContacts,
                    createContact,
                    updateContact,
                    deleteContact,
                    getContact 
                }