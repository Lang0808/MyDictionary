const router = require('express-promise-router')();
const wordController = require('../controller/word.controller');

router.post('/word/addWord', wordController.addWord);

module.exports = router;