const router = require('express').Router();
const {getAllContacts, getSingleContact,updateContact,deleteContact, addContact} = require('./cotactController')


router.get('/:id',getSingleContact);
router.put('/:id',updateContact);
router.delete('/:id',deleteContact);
router.post('/',addContact);
router.get('/',getAllContacts);

module.exports= router