const express = require('express');
const router = express.Router()
const {getOneContact, setContacts, getAllContacts,updateContact } = require('../controllers/contactControllers')


router.get('/', getAllContacts)
router.post('/', setContacts)
router.get('/:id',getOneContact)
router.put('/:id', updateContact)


module.exports = router
