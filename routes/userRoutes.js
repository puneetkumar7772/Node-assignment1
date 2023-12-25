const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController');


router.post('/users',userController.userRegister);



module.exports = router;