
player1 = {
  roll: 0,
  grandTotal: 0
};

player2 = {
  roll: 0,
  grandTotal: 0
};

$(document).ready(function(){
  
  function sumOne(){
    return Math.floor(Math.random()*(7 - 1) + 1)
  };
 

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var roll1 = sumOne();

    console.log(roll1)
    $('#placeholder').text(roll1);
    
   
    player1.roll += roll1;
  });
  
  $("form#formTwo").submit(function(event){
    event.preventDefault();
    

    player1.grandTotal += player1.roll;
    $('#placeholder2').text(player1.grandTotal);
    console.log(player1)
  });
  
});


