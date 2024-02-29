const express = require('express');
const router = express.Router()
const { deleteContactbelow5 } = require('../controllers/contactControllers')


router.delete('/',deleteContactbelow5 )

module.exports = router
