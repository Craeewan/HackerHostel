const router = require('express').Router();

const controller = require('./controller');

router.get('/pokemon', controller.index);
router.get('/pokemon/:id', controller.show);

// your work here

module.exports = router;
