const express = require('express');
const router = express.Router()
const {getOneContact, setContacts, getContactsAbove18, getAllContacts, getContactsAbove18WithNameAh, updateContact, deleteContactbelow5 } = require('../controllers/contactControllers')


router.get('/', getAllContacts)
router.post('/', setContacts)
router.get('/id',getOneContact)
router.get('/', getContactsAbove18)
router.get('/', getContactsAbove18WithNameAh)
router.put('/id', updateContact)
router.delete('/',deleteContactbelow5 )

module.exports = router
