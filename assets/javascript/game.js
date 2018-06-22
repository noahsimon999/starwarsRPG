$(document).ready(function () {
    
    //set up 4 characters
    var char1 = {
        health: 100,
        attack: 5
    }
    
    var char2 = {
        health: 100,
        attack: 5
    }

    var char3 = {
        health: 100,
        attack: 5
    }

    var char4 = {
        health: 100,
        attack: 5
    }
  
//choose a character and the rest go down as enemies
    
    var pick = false;

    if (pick === false) {
        $("#charOne").on("click", function () {
            console.log(pick);
            console.log("#charOne");
            $("#charTwo, #charThree, #charFour").appendTo("#enemies")
            console.log("#enemies");
            pick = true;
        });
    }

    if (pick === false) {
        $("#charTwo").on("click", function () {
            console.log(pick);
            console.log("#charTwo");
            $("#charOne, #charThree, #charFour").appendTo("#enemies")
            console.log("#enemies");
            pick = true;
        });
    }

    if (pick === false) {
        $("#charThree").on("click", function () {
            console.log(pick);
            console.log("#charThree");
            $("#charOne, #charTwo, #charFour").appendTo("#enemies")
            console.log("#enemies");
            pick = true;
        });
    }

    if (pick === false) {
        $("#charFour").on("click", function () {
            console.log(pick);
            console.log("#charFour");
            $("#charOne, #charTwo, #charThree").appendTo("#enemies")
            console.log("#enemies");
            pick = true;
        });
    }
 
//pick an enemy, goes down to defender







    //attack enemy, enemy damage is set, player damage increases each hit
    //defeated enemy, goes away
    //pick new enemy//
    //attack enemy with progressive damage
    //defeated enemy, goes away
    //pick new enemy//
    //win/lose game//
})


   