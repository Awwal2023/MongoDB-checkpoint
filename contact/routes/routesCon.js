const express = require('express');
const router = express.Router()
const { getContactsAbove18, getContactsAbove18WithNameAh, updateContact, deleteContactbelow5 } = require('../controllers/contactControllers')

router.get('/', getContactsAbove18)
router.get('/', getContactsAbove18WithNameAh)
router.put('/:id', updateContact)
router.delete('/',deleteContactbelow5 )

module.exports = router
