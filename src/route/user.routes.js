const router = require('express-promise-router')();
const userController = require('../controller/user.controller');

router.post('/user/login', userController.login);
router.post('/user/signup', userController.signup);

module.exports = router;