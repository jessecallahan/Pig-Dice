

  var array1 = [];

$(document).ready(function(){
  
function sumOne(){
  return Math.floor(Math.random()*(7 - 1) + 1)
};


$("form#formOne").submit(function(event){
  event.preventDefault();
  var roll1 = sumOne();

  console.log(roll1)
  $('#placeholder').text(roll1);
  
  array1.push(roll1)
var reducer = (accumulator, currentValue) => accumulator + currentValue;
var totalScore = array1.reduce(reducer);
console.log(totalScore)
console.log(array1)
});
});