const express = require('express'),
      router = express.Router(),
      locationsModel = require("../models/locations.js");

router.get("/locations", (req, res) => {
  console.log("----------------------------------------");
  console.log("in get at \"/locations\"");

  const queryPromise = locationsModel.getAllLocations();
  
  queryPromise.then((data) => {
    console.log("here's what we got: ");
    console.log(data);
    res.json({data: data});
  }).catch((error) => {
    console.log("oops, an error: ");
    console.log(error);
    res.send("error encountered");
  });
  
});

router.post("/locations/new", (req, res) => {
  console.log("----------------------------------------");
  console.log("in post at \"/locations/new\"");

  const parsedData = JSON.parse(req.body.data);

  console.log("parsedData:");
  console.log(parsedData);
  
  const queryPromise = locationsModel.addLocation(parsedData);

  console.log("back in post at \"/locations/new\"");
  
  queryPromise.then((data) => {
    console.log("here's what we got: ");
    console.log(data);
    res.json({data: data});
  }).catch((error) => {
    console.log("oops, an error: ");
    console.log(error);
    res.send("error encountered");
  });
  
});


module.exports = router;
