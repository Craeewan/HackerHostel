const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);
router.get('/:id', controller.show);

// your work here
module.exports = router;
