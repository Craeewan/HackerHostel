const router = require('express').Router();

router.use('/pokemon', require('./controllers/pokemon'));
router.use('/api', require('./controllers/api'));
router.get('/', (req, res) => res.render('index'));

module.exports = router;
