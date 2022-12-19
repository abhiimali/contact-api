const asyncHandler = require('express-async-handler')

const Contact = require('../models/contactModel')
// @desc  Get All Contacts 
// @route  /api/contacts
// @access Public 

const getContacts =  asyncHandler ( async (req,res) => {

    const contact = await Contact.find();
    res.status(200).json( {contact} );
    res.end();
});

// @desc  Get Individual Contact
// @route GET /api/contacts/:id 
// @access Public 

const getContact =   asyncHandler (async (req,res) =>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        res.status(404).json(" Contact Not Found ");        
    }
    res.status(200).json(contact);
});


// @desc  Create  Contact 
// @route POST  /api/contacts
// @access Public 
const createContact = asyncHandler ( async (req,res) => {
    console.log(` Req Body : ` , req.body);
    const {name , email ,phone } = req.body ;
    if(!name || !email || !phone) 
    {

        res.status(400);
        throw new Error(" All Field Are Mandetory ")

    }
    

    const contact = await  Contact.create({
        name,
        email,
        phone
    });    
    res.status(201).json(contact);
    res.end();
});

// @desc  Delete single Contacts 
// @route  DELETE /api/contacts/:id
// @access Public 

const deleteContact = asyncHandler ( async (req,res) =>{
    const contact = await  Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error(" Contact Not Found ");
    }
    const deletedContact = await Contact.findByIdAndRemove(req.params.id);

    res.status(200).json(deletedContact);
});


// @desc  Update A Contacts 
// @route  Update /api/contacts/:id
// @access Public 

const updateContact = asyncHandler ( async (req,res) => {

     const contact = await Contact.findById(req.params.id);
     if(!contact) {
        throw new Error(" Not Found ");

     }

     const updatedContact =  await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true }
     )
      res.status(200).json(updatedContact);
});


module.exports = {  getContacts,
                    createContact,
                    updateContact,
                    deleteContact,
                    getContact 
                }