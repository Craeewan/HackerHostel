const express = require('express'),
      router = express.Router(),

      pgp = require('pg-promise')(),
      db = pgp(
	process.env.DATABASE_URL
	// modify the following string with your user name:
	  || 'postgres://timothygardner@localhost:5432/basic_monsters');

const getAllLocations = () => {
  const queryResultPromise = db.any("SELECT * FROM Locations");

  console.log("queryResultPromise:");
  console.log(queryResultPromise);

  return queryResultPromise;
};

const addLocation = (locationData) => {

  console.log('in models/locations addLocation.');

  console.log("locationData:");
  console.log(locationData);

  const queryString = pgp.as.format(
    "INSERT INTO Locations(name, latitude, longitude) values ($[name], $[latitude], $[longitude])", 
    locationData);
  
  console.log("queryString:");
  console.log(queryString);

  const queryResultPromise = db.any(queryString);

  console.log("queryResultPromise:");
  console.log(queryResultPromise);

  return queryResultPromise;
};

module.exports = {
  getAllLocations: getAllLocations,
  addLocation: addLocation
};
