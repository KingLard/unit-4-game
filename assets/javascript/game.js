

//define a variable for wins
var wins="";
//define a variable for losses
var losses="";
//define a variable set to 0 to add to when a user clicks an image
var currentScore = 0;

//COME BACK AND MAKE THIS CODE DRY===============================================================================
//assign each image a random value of 1-12
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var pictureValues = numbers[Math.floor(Math.random() * numbers.length)]

$("#crystal-button-1").attr("value", pictureValues);



// image 2 ------------------------------------------
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var pictureValues = numbers[Math.floor(Math.random() * numbers.length)]

$("#crystal-button-2").attr("value", pictureValues);



//image 3 --------------------------------------------------
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var pictureValues = numbers[Math.floor(Math.random() * numbers.length)]

$("#crystal-button-3").attr("value", pictureValues);


// image 4 -------------------------------------------------
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var pictureValues = numbers[Math.floor(Math.random() * numbers.length)]

$("#crystal-button-4").attr("value", pictureValues);




//get a random number 19-120 ---------------------------------------
var min = 19;

var max = 120;

var goalNumber = Math.floor(Math.random() * (+max - +min) + +min);
//print random number to index.html page under random number span
$("#random-number").text(goalNumber);






//add click events to photos to add to users current score variable 
$(".crystal-button").on("click", function() {
    buttonValue = $(this).val();
    buttonValue = parseInt(buttonValue);
    currentScore = buttonValue + currentScore;
    $("#current-total").text(currentScore);

    //compare current score variable to random number variable


    if (currentScore === goalNumber) {
        $("#win-or-loss").text("You Won!");
        $("#play-again").text("Play Again!");
        $("#exampleModal").modal("show");
        console.log("score is matching");
    }
    else if (currentScore > goalNumber) {
        console.log("you lost");
    }

});











//if current score = random number, add 1 to win variable, alert "you won, keep going"

//if current score > random number, add 1 to loss variable alert "you lost, try again"

//restart game, keeping wins and loss variables the same, while shuffling image click values


































































