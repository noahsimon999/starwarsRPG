$(document).ready(function () {
    
    //set up 4 characters
    var char1 = {
        health: 100,
        attack: 5
    }
    
    var char2 = {
        health: 150,
        attack: 5
    }

    var char3 = {
        health: 200,
        attack: 5
    }

    var char4 = {
        health: 250,
        attack: 5
    }
  
//choose a character and the rest go down as enemies
    
    var pick = false;
    var attacker = "";

    $( "#attackBtn" ).hide();
    
    $("#charOne").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charOne");
            $("#charTwo, #charThree, #charFour").appendTo("#enemies");
            $("#charTwo, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char1;
        }
    });

    $("#charTwo").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charTwo");
            $("#charOne, #charThree, #charFour").appendTo("#enemies");
            $("#charOne, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char2;
        }
    });

    $("#charThree").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charThree");
            $("#charOne, #charTwo, #charFour").appendTo("#enemies");
            $("#charOne, #charTwo, #charFour").addClass("newDefender");
            pick = true;
            attacker = char3;
        }
    });

    $("#charFour").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charFour");
            $("#charOne, #charTwo, #charThree").appendTo("#enemies");
            $("#charOne, #charTwo, #charThree").addClass("newDefender");
            pick = true;
            attacker = char4;
        }
    });
  
 
//pick an enemy, goes down to defender
var defender = "";

$("#charOne").on("click", function () {
    if (($( "#charOne" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#charOne").appendTo("#defender");
            defender = char1;
            $( "#attackBtn" ).show();
            console.log(defender);
        }
    }
});

$("#charTwo").on("click", function () {
    if (($( "#charTwo" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#charTwo").appendTo("#defender");
            defender = char2;
            $( "#attackBtn" ).show();
            console.log(defender);
        }
    }
});

$("#charThree").on("click", function () {
    if (($( "#charThree" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#charThree").appendTo("#defender");
            defender = char3;
            $( "#attackBtn" ).show();
            console.log(defender);
        }
    } 
});

$("#charFour").on("click", function () {
    if (($( "#charFour" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#charFour").appendTo("#defender");
            defender = char4;
            $( "#attackBtn" ).show();
            console.log(defender);
        }
    } 
});

//attack enemy, enemy damage is set, player damage increases each hit

$("#attackBtn").on("click", function () {
    console.log(defender.health);
    console.log(attacker.health);
    defender.health = defender.health - attacker.attack;
    attacker.health = attacker.health - defender.attack;
    attacker.attack = attacker.attack + Math.round(Math.random()*20);
    console.log("defender" + defender.health);
    console.log("attack" + attacker.attack);

    if(defender.health <= 0) {
        if ((char1.health) <= 0) {
            $("#charOne").hide();
        }
        if ((char2.health) <= 0) {
            $("#charTwo").hide();

        }
        if ((char3.health) <= 0) {
            $("#charThree").hide();

        } if ((char4.health) <= 0) {
            $("#charFour").hide();
        }
        defender = "";
    }
    if(attacker.health <= 0) {
        alert("game over");
    }

});


    //defeated enemy, goes away
    //pick new enemy//
    //attack enemy with progressive damage
    //defeated enemy, goes away
    //pick new enemy//
    //win/lose game//
})


   