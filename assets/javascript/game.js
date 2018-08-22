
var words = ['js', 'css', 'html']; //list of available words
var word = words[Math.floor(Math.random() * words.length)]; //selects a random word from word list
var answerArray = []; //creates empty array to house answer
var guessesLeft = 6; //tracks how many guess remain for the user
var wins = 0; //number of wins, times word completed
var lettersLeft = word.length; //tracks how many letters there are left in the word, when it equals zero, the player wins
var guessedLetters = [] //letters are pushed her as the player guesses
for(i = 0; i < word.length; i++){
  answerArray[i] = '_';
}; //fills answerArray with the right amount of blanks
var alreadyGuessed = 0; //Tracks if current guess have been guess before
var answerToDisplay = answerArray.join(' '); //joins the array to a space-separate string, is updated as players guess
document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay; //displays the blanks for the user to see
function contains(thing, array){
  if(array.indexOf(thing) > -1){
    return true;
  }
  else {
    return false;
  }
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

function reset(){
 word = words[Math.floor(Math.random() * words.length)]; //selects a random word from word list
 answerArray = []; //creates empty array to house answer
 guessesLeft = 6; //tracks how many guess remain for the user
 lettersLeft = word.length; //tracks how many letters there are left in the word, when it equals zero, the player wins
guessedLetters = [] //letters are pushed her as the player guesses
for(i = 0; i < word.length; i++){
  answerArray[i] = '_';
}; //fills answerArray with the right amount of blanks
 alreadyGuessed = 0; //Tracks if current guess have been guess before
 answerToDisplay = answerArray.join(' '); //joins the array to a space-separate string, is updated as players guess
document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay; //displays the blanks for the user to see
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

function guess(){
      //Set user input value in a variable
      var userGuess = document.getElementById("user-guess").value;
      //Check if player has already guessed the letter
      alreadyGuessed = contains(userGuess,guessedLetters);
      if(alreadyGuessed === true){
        document.getElementsByClassName('guesses')[0].innerHTML = userGuess.toUpperCase();
      }
      //Check if win-case is true, display that the game is won.
     else if(lettersLeft === 0){
      document.getElementsByClassName('instructions')[0].innerHTML = 'Yay! You won!';
    }
     // Check if the user's answer is a single letter, otherwise display error message
     else if(isNaN(userGuess) && userGuess.length === 1 ){
        //insert negative guess results, they will be undone if the guess is right
        guessedLetters.push(userGuess);
        document.getElementsByClassName('guesses')[0].innerHTML = userGuess.toUpperCase();
        //check user's guess against the randomly selected word
        for(j=0; j < word.length; j++){
          if(word[j] === userGuess){
            answerArray[j] = userGuess;
            lettersLeft--;
          
          //update the guessed letters, placing the result in the below variable
          answerToDisplay = answerArray.join(' ')
          //display the new variable, thereby updating user on their progress
          document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay;
          document.getElementsByClassName('instructions')[0].innerHTML = 'You guessed correctly!' ;
          if(lettersLeft === 0){
            document.getElementsByClassName('instructions')[0].innerHTML = 'Yay! You won!';
            wins++;
            document.getElementsByClassName('wins')[0].innerHTML = wins;
          }
          }
      }
      }
     else{
       document.getElementsByClassName('instructions')[0].innerHTML = "Please guess a single letter.";
     }
 // Clear input box box
     var userGuess = document.getElementById("user-guess").value = '';
  
  //Debug Displays
       // document.getElementsByClassName('debug')[0].innerHTML = lettersLeft + ' | ' + word + ' | * ' + guessedLetters + ' *' + alreadyGuessed;
        } 
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

/*

function wordGuessed(){
    //Set user input value in a variable
    var userGuess = document.getElementByClassName("guesses").value;
    //Check if player has already guessed the letter
    alreadyGuessed = contains(userGuess,guessedLetters);
    if(alreadyGuessed === true){
      document.getElementsByClassName('instructions')[0].innerHTML = "You've already guessed " + userGuess.toUpperCase();
    }
        //insert negative guess results, they will be undone if the guess is right
      guessedLetters.push(userGuess);
      document.getElementsByClassName('instructions')[0].innerHTML = "Aww shucks! " + userGuess.toUpperCase() + ' is not a letter.';
      //check user's guess against the randomly selected word
      for(j=0; j < word.length; j++){
        if(word[j] === userGuess){
          answerArray[j] = userGuess;
          lettersLeft--;
        
        //update the guessed letters, placing the result in the below variable
        answerToDisplay = answerArray.join(' ')
        //display the new variable, thereby updating user on their progress
        document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay;
        document.getElementsByClassName('instructions')[0].innerHTML = 'You guessed correctly!' ;
        if(lettersLeft === 0){
          document.getElementsByClassName('instructions')[0].innerHTML = 'Yay! You won!';
          wins++;
          document.getElementsByClassName('wins')[0].innerHTML = wins;
        }
        }
        
    }
    }
   else{
     document.getElementsByClassName('instructions')[0].innerHTML = "Please guess a single letter.";
   }
// Clear input box box
   var userGuess = document.getElementById("user-guess").value = '';

//Debug Displays
     // document.getElementsByClassName('debug')[0].innerHTML = lettersLeft + ' | ' + word + ' | * ' + guessedLetters + ' *' + alreadyGuessed;
      } 


*/



        /* WIN COUNTER SAMPLE
answerToDisplay = answerArray.join(' ')
//display the new variable, thereby updating user on their progress
document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay;
document.getElementsByClassName('instructions')[0].innerHTML = 'You guessed correctly!' ;
if(lettersLeft === 0){
  document.getElementsByClassName('instructions')[0].innerHTML = 'Yay! You won!';
  wins++;
  document.getElementsByClassName('wins-btn')[0].innerHTML = "Wins: " + wins;
  */

  
  
    
    
  