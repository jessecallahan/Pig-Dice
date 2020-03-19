
player1 = {
  roll: 0,
  grandTotal: 0
};

player2 = {
  roll: 0,
  grandTotal: 0
};

$(document).ready(function () {

  function sumOne() {
    return Math.floor(Math.random() * (7 - 1) + 1)
  };


  $("form#playerFormOne").submit(function (event) {
    event.preventDefault();
    var roll1 = sumOne();


    //$('#diceroll1').append(roll1 + ", ");
    $('#player1roll').text(roll1);

    if (roll1 != 1) {
      if (roll1 === 2) {
        $('#player1roll').html("<img src='img/dice-six-faces-two.png'></img>");
      }
      if (roll1 === 3) {
        $('#player1roll').html("<img src='img/dice-six-faces-three.png'></img>");
      }
      if (roll1 === 4) {
        $('#player1roll').html("<img src='img/dice-six-faces-four.png'></img>");
      }
      if (roll1 === 5) {
        $('#player1roll').html("<img src='img/dice-six-faces-five.png'></img>");
      }
      if (roll1 === 6) {
        $('#player1roll').html("<img src='img/dice-six-faces-six.png'></img>");
      }
      player1.roll += roll1;
      $("#showRoundScore").text(player1.roll)
    } else {
      $('#player1roll').html("<img src='img/dice-six-faces-one.png'></img>");
      player1.roll = 0;
      player1.grandTotal += player1.roll;
      alert("you rolled a one pass the die");
      $('#roundTotal1').text(player1.grandTotal);
      $("#showRoundScore").text(0);
      $(".loss2").show();
      $(".loss1").hide();
    }

  });

  $("form#playerFormTwo").submit(function (event) { //hold button form
    event.preventDefault();


    player1.grandTotal += player1.roll;
    $('#roundTotal1').text(player1.grandTotal);
    $("#showRoundScore").text(0);
    player1.roll = 0  //resests dice
    $(".loss2").show();
    $(".loss1").hide();
    if (player1.grandTotal >= 100) {
      alert("Player 1 Won!") ? "" : location.reload();;
    }
    console.log(player1)
  });


  //player 2 ////////////////////////////
  // $(document).ready(function(){



  $("form#player2FormOne").submit(function (event) {
    event.preventDefault();
    var roll2 = sumOne();


    console.log(roll2)
    //$('#diceroll2').append(roll2 + ", ");
    $('#player2roll').text(roll2);
    if (roll2 != 1) {
      if (roll2 === 2) {
        $('#player2roll').html("<img src='img/dice-six-faces-two.png'></img>");
      }
      if (roll2 === 3) {
        $('#player2roll').html("<img src='img/dice-six-faces-three.png'></img>");
      }
      if (roll2 === 4) {
        $('#player2roll').html("<img src='img/dice-six-faces-four.png'></img>");
      }
      if (roll2 === 5) {
        $('#player2roll').html("<img src='img/dice-six-faces-five.png'></img>");
      }
      if (roll2 === 6) {
        $('#player2roll').html("<img src='img/dice-six-faces-six.png'></img>");
      }

      player2.roll += roll2;
      $("#showRoundScore2").text(player2.roll);
    } else {
      $('#player2roll').html("<img src='img/dice-six-faces-one.png'></img>");
      player2.roll = 0;
      player2.grandTotal += player2.roll;
      alert("you rolled a one pass the die");
      $('#roundTotal2').text(player2.grandTotal);
      $("#showRoundScore").text(0);
      $(".loss2").hide();
      $(".loss1").show();
    }


  });

  $("form#player2FormTwo").submit(function (event) {
    event.preventDefault();


    player2.grandTotal += player2.roll;
    $('#roundTotal2').text(player2.grandTotal);
    $("#showRoundScore2").text(0);
    player2.roll = 0
    $(".loss2").hide();
    $(".loss1").show();
    console.log(player2)
    console.log(player1.grandTotal);
    if (player2.grandTotal >= 100) {
      alert("Player 2 Won!") ? "" : location.reload();;
    }
  });


});





