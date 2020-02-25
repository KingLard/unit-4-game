

//define a variable for wins
var wins="";
//define a variable for losses
var losses="";
//define a variable set to 0 to add to when a user clicks an image
var currentScore= 0;
//add click events to photos to add to users current score variable 
$(".crystal-button").on("click", function() {
    buttonValue = $(this).val();
    buttonValue = parseInt(buttonValue);
    currentScore = buttonValue + currentScore;
    console.log(currentScore);
    // console.log(buttonValue);
    
    
});
//assign each image a random value of 1-12

//get a random number 19-120

//print random number to index.html page under random number span

//compare current score variable to random number variable

//if current score = random number, add 1 to win variable, alert "you won, keep going"

//if current score > random number, add 1 to loss variable alert "you lost, try again"

//restart game, keeping wins and loss variables the same, while shuffling image click values


































































