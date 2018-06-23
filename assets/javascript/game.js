$(document).ready(function () {
    
//set up 4 characters
    var char1 = {
        health: 100,
        attack: Math.round(Math.random()*20)
    }
    
    var char2 = {
        health: 150,
        attack: Math.round(Math.random()*20)
    }

    var char3 = {
        health: 200,
        attack: Math.round(Math.random()*20)
    }

    var char4 = {
        health: 250,
        attack: Math.round(Math.random()*20)
    }

    var wins = 0;
    var losses = 0;

    $( "#attackHeading" ).hide();
    $( "#defendHeading" ).hide();
    $("#charOneInfo").append("HP: " + char1.health);
    $("#charTwoInfo").append("HP: " + char2.health);
    $("#charThreeInfo").append("HP: " + char3.health);
    $("#charFourInfo").append("HP: " + char4.health);

//reset

function reset() {

    char1 = {
        health: 100,
        attack: Math.round(Math.random()*20)
    }
    
    char2 = {
        health: 150,
        attack: Math.round(Math.random()*20)
    }

    char3 = {
        health: 200,
        attack: Math.round(Math.random()*20)
    }

    char4 = {
        health: 250,
        attack: Math.round(Math.random()*20)
    }

    pick = false;
    attacker = "";
    defender = "";
    defeated = [];

    $("#stats1").empty();
    $("#stats2").empty();
    $("#infoCard1, #infoCard2, #infoCard3, #infoCard4").appendTo("#charChoice");
    $("#charOne, #charTwo, #charThree, #charFour").removeClass("newDefender");
    $("#infoCard1, #infoCard2, #infoCard3, #infoCard4").show();
    $( "#attackBtn" ).hide();
    $( "#attackHeading" ).hide();
    $( "#defendHeading" ).hide();
    $("#charOneInfo").html("HP: " + char1.health);
    $("#charTwoInfo").html("HP: " + char2.health);
    $("#charThreeInfo").html("HP: " + char3.health);
    $("#charFourInfo").html("HP: " + char4.health);
}

//choose a character and the rest go down as enemies
    
    var pick = false;
    var attacker = "";

    $( "#attackBtn" ).hide();
    
    $("#charOne").on("click", function () {
        if (pick === false) {
            $("#infoCard2, #infoCard3, #infoCard4").appendTo("#enemies");
            $("#charTwo, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char1;
            $( "#attackHeading" ).show();
        }
    });

    $("#charTwo").on("click", function () {
        if (pick === false) {
            $("#infoCard1, #infoCard3, #infoCard4").appendTo("#enemies");
            $("#charOne, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char2;
            $( "#attackHeading" ).show();
        }
    });

    $("#charThree").on("click", function () {
        if (pick === false) {
            $("#infoCard1, #infoCard2, #infoCard4").appendTo("#enemies");
            $("#charOne, #charTwo, #charFour").addClass("newDefender");
            pick = true;
            attacker = char3;
            $( "#attackHeading" ).show();
        }
    });

    $("#charFour").on("click", function () {
        if (pick === false) {
            $("#infoCard1, #infoCard2, #infoCard3").appendTo("#enemies");
            $("#charOne, #charTwo, #charThree").addClass("newDefender");
            pick = true;
            attacker = char4;
            $( "#attackHeading" ).show();
        }
    });
  
 
//pick an enemy, goes down to defender
var defender = "";


$("#charOne").on("click", function () {
    if (($( "#charOne" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#infoCard1").appendTo("#defender");
            defender = char1;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    }
});

$("#charTwo").on("click", function () {
    if (($( "#charTwo" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#infoCard2").appendTo("#defender");
            defender = char2;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    }
});

$("#charThree").on("click", function () {
    if (($( "#charThree" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#infoCard3").appendTo("#defender");
            defender = char3;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    } 
});

$("#charFour").on("click", function () {
    if (($( "#charFour" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#infoCard4").appendTo("#defender");
            defender = char4;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    } 
});



//attack enemy, enemy damage is set, player damage increases each hit

var defeated = [];



$("#attackBtn").on("click", function () { 
    if (defender != "") {
        defender.health = defender.health - attacker.attack;
        attacker.health = attacker.health - defender.attack;
        attacker.attack = attacker.attack + Math.round(Math.random()*20);
        $( "#stats1" ).show();
        $( "#stats2" ).show();
        $("#stats1").html("<p>You attack for " + attacker.attack + " damage!</p>");
        $("#stats2").html("<p>You took " + defender.attack + " damage!</p>");
        
        if (defender === char1) {
            $("#charOneInfo").html("HP: " + defender.health);
        } else if (defender === char2) {
            $("#charTwoInfo").html("HP: " + defender.health);
        } else if (defender === char3) {
            $("#charThreeInfo").html("HP: " + defender.health);
        } else if (defender === char4) {
            $("#charFourInfo").html("HP: " + defender.health);
        }   

        if (attacker === char1) {
            $("#charOneInfo").html("HP: " + attacker.health);
        } else if (attacker === char2) {
            $("#charTwoInfo").html("HP: " + attacker.health);
        } else if (attacker === char3) {
            $("#charThreeInfo").html("HP: " + attacker.health);
        } else if (attacker === char4) {
            $("#charFourInfo").html("HP: " + attacker.health);
        }   



        if(defender.health <= 0) {
            if ((char1.health) <= 0) {
                $("#infoCard1").hide();
                defeated.push(char1);
                $("#stats2").text("Choose another opponent");
            }
            if ((char2.health) <= 0) {
                $("#infoCard2").hide();
                defeated.push(char2);
                $("#stats2").text("Choose another opponent");
            }
            if ((char3.health) <= 0) {
                $("#infoCard3").hide();
                defeated.push(char3);
                $("#stats2").text("Choose another opponent");
            } 
            if ((char4.health) <= 0) {
                $("#infoCard4").hide();
                defeated.push(char3);
                $("#stats2").text("Choose another opponent");
            }
            
            defender = "";
            
            for ( var i = 0; i < defeated.length; i++) {
                if (defeated.length === 6) {
                    wins++;
                    $("#win").html("Wins: " + wins);
                    reset();
                }
            }
        }
        if(attacker.health <= 0) {
            losses++;
            $("#stats3").text("Game Over");
            $("#lose").html("Losses: " + losses);
            reset();
        }
    }

});


    //defeated enemy, goes away
    //pick new enemy//
    //attack enemy with progressive damage
    //defeated enemy, goes away
    //pick new enemy//
    //win/lose game//
})


   