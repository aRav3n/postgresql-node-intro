const { Router } = require('express');
const controller = require('../controllers/controller');
const router = Router();

router.get('/', controller.indexActionGet);
router.get('/new', controller.newActionGet);
router.post('/new', controller.newActionPost);

module.exports = router;