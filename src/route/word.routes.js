const router = require('express-promise-router')();
const wordController = require('../controller/word.controller');

router.post('/word/addWord', wordController.addWord);
router.post('/word/searchWord', wordController.searchWord);
router.post('/word/getRandomTen', wordController.getRandomTen);

module.exports = router;