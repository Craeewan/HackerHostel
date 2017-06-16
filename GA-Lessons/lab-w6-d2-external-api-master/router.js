const router = require('express').Router();

router.use('/jokes', require('./controllers/jokes'));
router.use('/api', require('./controllers/api'));
router.get('/', (req, res) => res.render('index'));

module.exports = router;