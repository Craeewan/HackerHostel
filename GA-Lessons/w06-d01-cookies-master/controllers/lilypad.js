const express = require('express'),
      router = express.Router();

router.get("/lilypad", (req, res) => {
  const cookies = req.cookies;
  res.cookie('number', cookies.number ?  Number(cookies.number) + 1 : 1);
  res.render("lilypad", {number: cookies.number || 0});
});

router.get("/clear", (req, res) => {
  res.clearCookie('number');
  res.redirect("/lilypad");
});


module.exports = router;
