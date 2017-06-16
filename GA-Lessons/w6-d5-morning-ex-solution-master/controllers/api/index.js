const router = require('express').Router();

router.use('/mascots', require('./mascots'));
router.use('/schools', require('./schools'));

module.exports = router;
