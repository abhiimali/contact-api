const express = require('express')

const router = express.Router(); 

const { getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContact } = require('../controllers/contactController')


// route to get all contacts 
router.route('/').get(getContacts);

// route to get single contact 
router.route('/:id').get(getContact)

// route to craete contact 
router.route('/').post(createContact);

// route to delete contact 
router.route('/:id').delete(deleteContact);

// update contact 

router.route('/:id').put(updateContact);



module.exports = router ;