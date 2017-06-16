const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;