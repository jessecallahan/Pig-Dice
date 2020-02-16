
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
 

  $("form#playerFormOne").submit(function(event){
    event.preventDefault();
    var roll1 = sumOne();
    

    console.log(roll1)
    $('#player1roll').text(roll1);
    
   
    player1.roll += roll1;
  });
  
  $("form#playerFormTwo").submit(function(event){ //hold button form
    event.preventDefault();
    

    player1.grandTotal += player1.roll;
    $('#placeholder2').text(player1.grandTotal);
    
    player1.roll = 0  //resests dice
    $(".loss2").show();
    $(".loss1").hide();
    console.log(player1)
  });
  //player 2 ////////////////////////////
  function sumOne(){
    return Math.floor(Math.random()*(7 - 1) + 1)
  };
 

  $("form#player2FormOne").submit(function(event){
    event.preventDefault();
    var roll2 = sumOne();
    

    console.log(roll2)
    $('#player2roll').text(roll2);
    
   
    player2.roll += roll2;
  });
  
  $("form#player2FormTwo").submit(function(event){
    event.preventDefault();
    

    player2.grandTotal += player2.roll;
    $('#placeholder3').text(player2.grandTotal);
    player2.roll = 0
    $(".loss2").hide();
    $(".loss1").show();
    console.log(player2)
  });
});


