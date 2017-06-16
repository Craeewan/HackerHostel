const planetData = require('../data/planetData');

const planetObject = (name, planetInfo) => {  
  const obj = {name: name};
  const attributes = [];
  planetInfo.forEach((pair) => {
    // obj[pair.key] = pair.val;
    attributes.push(pair);
  });
  obj.attributes = attributes;
  return obj;
};

const getPlanet = (name) => {
  const planet = planetData.sections[name];
  if (! planet){
    console.log("planet " + name + " not found.");
    return null;
  } else {
    return planetObject(name, planet);
  }
};

module.exports = {getPlanet: getPlanet};
