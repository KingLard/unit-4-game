

//define a variable for wins
var wins= 0;
//define a variable for losses
var losses= 0;
//define a variable set to 0 to add to when a user clicks an image
var currentScore = 0;

function reset() {
    currentScore = 0;
    //reset image numbers to different numbers

    //reset goalNumber to a new number, print it to hud
    var min = 19;
    var max = 120;
    var goalNumber = Math.floor(Math.random() * (+max - +min) + +min);
    $("#random-number").text(goalNumber);

    //empty all divs with id's we targeted during app run
    $( "#current-total, #win-or-loss, #play-again").empty();

    

}

function imageNumbers(buttonID) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    pictureValues = numbers[Math.floor(Math.random() * numbers.length)] 
    $(buttonID).attr("value", pictureValues);
}





















//COME BACK AND MAKE THIS CODE DRY===============================================================================
//assign each image a random value of 1-12






    

//image 1 ------------------------------------------
imageNumbers("#crystal-button-1");



// image 2 ------------------------------------------
imageNumbers("#crystal-button-2");



//image 3 --------------------------------------------------

imageNumbers("#crystal-button-3");


// image 4 -------------------------------------------------


imageNumbers("#crystal-button-4");


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

    //if current score = random number, add 1 to win variable, alert "you won" and "play again" button
    if (currentScore === goalNumber) {
        $("#win-or-loss").text("You Won!");
        $("#play-again").text("Play Again!");
        $("#exampleModal").modal("show");
        wins = wins += 1;
        $("#wins").text(wins);
    }


    //if current score > random number, add 1 to loss variable alert "you lost, try again"
    else if (currentScore > goalNumber) {
        $("#win-or-loss").text("You Lost.");
        $("#play-again").text("Try Again!");
        $("#exampleModal").modal("show");
        losses = losses += 1;
        $("#losses").text(losses);
    }


    //restart game, keeping wins and loss variables the same, while shuffling image click values
   

});

$("#play-again").on("click", function () {
    reset();

})













































































