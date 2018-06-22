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
    var defenders = [];
    
    $("#charOne").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charOne");
            $("#charTwo, #charThree, #charFour").appendTo("#enemies");
            $("#charTwo, #charThree, #charFour").addClass("newDefender");
            pick = true;
        }
    });

    $("#charTwo").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charTwo");
            $("#charOne, #charThree, #charFour").appendTo("#enemies");
            $("#charOne, #charThree, #charFour").addClass("newDefender");
            pick = true;
        }
    });

    $("#charThree").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charThree");
            $("#charOne, #charTwo, #charFour").appendTo("#enemies");
            $("#charOne, #charTwo, #charFour").addClass("newDefender");
            pick = true;
        }
    });

    $("#charFour").on("click", function () {
        if (pick === false) {
            console.log(pick);
            console.log("#charFour");
            $("#charOne, #charTwo, #charThree").appendTo("#enemies");
            $("#charOne, #charTwo, #charThree").addClass("newDefender");
            pick = true;
        }
    });
  
 
//pick an enemy, goes down to defender


$("#charOne").on("click", function () {
    if (($( "#charOne" ).hasClass( "newDefender")) === true) {
        console.log(pick);
        console.log("#charOne");
        $("#charOne").appendTo("#defender");
        console.log("#enemies");
        
    }
});

$("#charTwo").on("click", function () {
    if (($( "#charTwo" ).hasClass( "newDefender")) === true) {
        console.log(pick);
        console.log("#charTwo");
        $("#charTwo").appendTo("#defender");
        console.log("#enemies");
    }
});

$("#charThree").on("click", function () {
    if (($( "#charThree" ).hasClass( "newDefender")) === true) {
        console.log(pick);
        console.log("#charThree");
        $("#charThree").appendTo("#defender");
        console.log("#enemies");
    } 
});

$("#charFour").on("click", function () {
    if (($( "#charFour" ).hasClass( "newDefender")) === true) {
        console.log(pick);
        console.log("#charFour");
        $("#charFour").appendTo("#defender");
        console.log("#enemies");
    } 
});






    //attack enemy, enemy damage is set, player damage increases each hit
    //defeated enemy, goes away
    //pick new enemy//
    //attack enemy with progressive damage
    //defeated enemy, goes away
    //pick new enemy//
    //win/lose game//
})


   