const express = require('express');
const router = express.Router()
const { getContactsAbove18WithNameAh } = require('../controllers/contactControllers')

router.get('/', getContactsAbove18WithNameAh)


module.exports = router
