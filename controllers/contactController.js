// @desc  Get All Contacts 
// @route  /api/contacts
// @access Public 

const getContacts = (req,res) => {
    res.status(200).send({ message :" Getting All Contacts"});
}

// @desc  Get Individual Contact
// @route GET /api/contacts/:id 
// @access Public 

const getContact = (req,res) =>{
    res.status(200).send({ message : ` Get contact   ${req.params.id}`});
}

// @desc  Create  Contact 
// @route POST  /api/contacts
// @access Public 
const createContact = (req,res) => {
    console.log(` Req Body : ` , req.body);
    res.status(201).send( { message : "contact Created"});
}

// @desc  Delete single Contacts 
// @route  DELETE /api/contacts/:id
// @access Public 

const deleteContact = (req,res) =>{
    res.status(200).send({ message : `contact Deleted  ${req.params.id}`});
}

// @desc  Update A Contacts 
// @route  Update /api/contacts/:id
// @access Public 

const updateContact = (req,res) => {
    res.status(200).send( { message : `Updated Contact ${req.params.id}`})
}

module.exports = {  getContacts,
                    createContact,
                    updateContact,
                    deleteContact,
                    getContact 
                }