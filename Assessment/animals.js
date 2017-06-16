$(document).ready(function(){
// Cat
var $cat = $('.cat');
$cat.click(function(){
  var cats = $('.cats')
  $(cats).toggleClass('display');
  console.log(cats);
  });
// Dogs
var $dog = $('.dog');
$cat.click(function(){
  var dogs = $('.dogs')
  $(dogs).toggleClass('display');
  console.log(dogs);
  });
// Birds
var $bird = $('.bird');
$cat.click(function(){
  var birds = $('.birds')
  $(birds).toggleClass('display');
  console.log(birds);
  });
});
