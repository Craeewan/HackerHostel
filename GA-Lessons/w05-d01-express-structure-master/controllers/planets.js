const express = require('express'),
      planet = require('../models/planet'),
      router = express.Router();

router.get('/:name', (req, res) => {
  const planetData = planet.getPlanet(req.params.name);
  res.render("planet", planetData);
});

module.exports = router;  
