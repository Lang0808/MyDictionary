const router = require('express-promise-router')();
const wordController = require('../controller/word.controller');

router.post('/word/addWord', wordController.addWord);
router.post('/word/searchWord', wordController.searchWord);
router.post('/word/getRandomTen', wordController.getRandomTen);
router.post('/word/fewWord', wordController.getFewWord);
router.post('/word/getWordInDetail', wordController.getWordInDetail);
router.post('/word/changeWord', wordController.changeWord);
router.post('/word/loadWord', wordController.loadWord);

module.exports = router;