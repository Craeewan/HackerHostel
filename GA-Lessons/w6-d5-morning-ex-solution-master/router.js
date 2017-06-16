const router = require('express').Router();

router.use('/mascots', require('./controllers/mascots'));
router.use('/schools', require('./controllers/schools'));
router.use('/api', require('./controllers/api'));
router.get('/', (req, res) => res.render('index'));

module.exports = router;