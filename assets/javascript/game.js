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

    var wins = 0;
    var losses = 0;

    $( "#attackHeading" ).hide();
    $( "#defendHeading" ).hide();
    $("charOne").text(char1.health);
    console.log(char1.health);



//reset

function reset() {

    char1 = {
        health: 100,
        attack: 5
    }
    
    char2 = {
        health: 150,
        attack: 5
    }

    char3 = {
        health: 200,
        attack: 5
    }

    char4 = {
        health: 250,
        attack: 5
    }

    pick = false;
    attacker = "";
    defender = "";
    defeated = [];

    $("#charOne, #charTwo, #charThree, #charFour").appendTo("#charChoice");
    $("#charOne, #charTwo, #charThree, #charFour").removeClass("newDefender");
    $("#charOne, #charTwo, #charThree, #charFour").show();
    $( "#attackBtn" ).hide();
    $( "#attackHeading" ).hide();
    $( "#defendHeading" ).hide();
}

//choose a character and the rest go down as enemies
    
    var pick = false;
    var attacker = "";

    $( "#attackBtn" ).hide();
    
    $("#charOne").on("click", function () {
        if (pick === false) {
            $("#charTwo, #charThree, #charFour").appendTo("#enemies");
            $("#charTwo, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char1;
            $( "#attackHeading" ).show();
        }
    });

    $("#charTwo").on("click", function () {
        if (pick === false) {
            $("#charOne, #charThree, #charFour").appendTo("#enemies");
            $("#charOne, #charThree, #charFour").addClass("newDefender");
            pick = true;
            attacker = char2;
            $( "#attackHeading" ).show();
        }
    });

    $("#charThree").on("click", function () {
        if (pick === false) {
            $("#charOne, #charTwo, #charFour").appendTo("#enemies");
            $("#charOne, #charTwo, #charFour").addClass("newDefender");
            pick = true;
            attacker = char3;
            $( "#attackHeading" ).show();
        }
    });

    $("#charFour").on("click", function () {
        if (pick === false) {
            $("#charOne, #charTwo, #charThree").appendTo("#enemies");
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
            $("#charOne").appendTo("#defender");
            defender = char1;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    }
});

$("#charTwo").on("click", function () {
    if (($( "#charTwo" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#charTwo").appendTo("#defender");
            defender = char2;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    }
});

$("#charThree").on("click", function () {
    if (($( "#charThree" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#charThree").appendTo("#defender");
            defender = char3;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    } 
});

$("#charFour").on("click", function () {
    if (($( "#charFour" ).hasClass( "newDefender")) === true) {
        if (defender === "") {
            $("#charFour").appendTo("#defender");
            defender = char4;
            $( "#defendHeading" ).show();
            $( "#attackBtn" ).show();
        }
    } 
});



//attack enemy, enemy damage is set, player damage increases each hit

var defeated = [];



$("#attackBtn").on("click", function () {
    defender.health = defender.health - attacker.attack;
    attacker.health = attacker.health - defender.attack;
    attacker.attack = attacker.attack + Math.round(Math.random()*20);

    if(defender.health <= 0) {
        if ((char1.health) <= 0) {
            $("#charOne").hide();
            defeated.push(char1);
        }
        if ((char2.health) <= 0) {
            $("#charTwo").hide();
            defeated.push(char2);
        }
        if ((char3.health) <= 0) {
            $("#charThree").hide();
            defeated.push(char3);
        } 
        if ((char4.health) <= 0) {
            $("#charFour").hide();
            defeated.push(char3);
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
        $("#loss").html("Losses: " + losses);
        reset();
    }

});


    //defeated enemy, goes away
    //pick new enemy//
    //attack enemy with progressive damage
    //defeated enemy, goes away
    //pick new enemy//
    //win/lose game//
})


   