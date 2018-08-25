//wins
var win = 0;
//losses
var lose = 0;
//wins and losses
var total = win + lose;
//tries available
var tries = 15;
//an array of the tried letters
var triedLetters = [];
//an array of the alphabet for data validation
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//an array of the possible answers
//I have used an array of objects instead of using a constructor with two arrays because 
//I use constructors to build a node.js version of hangman
//which can be found on my github, bewitchedfencer
var dreams = [{
        word: "using telekinisis",
        used: false
    },
    {
        word: "fly",
        used: false
    },
    {
        word: "shapeshifting",
        used: false
    },
    {
        word: "fight",
        used: false
    },
    {
        word: "create your own world",
        used: false
    },
    {
        word: "start and end a war",
        used: false
    },
    {
        word: "turn into a video game character",
        used: false
    },
    {
        word: "taste everything",
        used: false
    },
    {
        word: "talk to dream characters",
        used: false
    },
    {
        word: "visit prehistoric people",
        used: false
    },
    {
        word: "talk to animals",
        used: false
    },
    {
        word: "extend your dream time",
        used: false
    }
];
//an array of the letters in the solution
var letterArray = [];
//the chosen word
var word = '';
//an array for the number of dashes to guess the word
var dashArray = [];
//random object
var randomObject;


//function for the randomization, return the variable word.
function randomWord() {
    randomObject = dreams[Math.floor(Math.random() * dreams.length)];
    
    if (randomObject.used === false) {
        randomObject.used = true;
        word = randomObject.word;
    } else {
       randomWord();
    }
}


//function for printing out dashes and letters

function replaceDash() {
    if (dashArray) {
        document.getElementById("currentWord").innerHTML = dashArray.join("&nbsp;");
    }

}


//declared function for creating dashes
function dashes(word) {
    letterArray = word.split("");
    //finding the index number of the word in the original array
    //fix the removal of the words from the list. Or add an element to the object that is a boolean and changes
    //when the word is reset
    for (var i = 0; i < letterArray.length; i++) {
        if (letterArray[i] == " ") {
            dashArray.push(" ");
        } else {
            dashArray.push("__")
            
        }
        
    }
    replaceDash();
    
  
}


//declared function for displaying the letters pressed by user.
function displayLetters() {
    document.getElementById("lettersTried").innerHTML = triedLetters.join(", ");
}

//when a key is pressed 
function guessLetter() {
    document.onkeyup = function (event) {
        //making event.key a variable. 
        var letter = event.key;
        
        //making sure the letter is lowercase for comparison
        letter.toLowerCase();
        //the key is checked to see if it is part of the alphabet.
        if (alphabet.indexOf(letter) >= 0) {
            //then the key is checked to see if it is a unique letter.
            if (triedLetters.indexOf(letter) === -1) {
                //a new letter is added to the array of attempted letters.
                triedLetters.push(letter);
                displayLetters();
                tries = tries - 1;
                document.getElementById("remainingTries").innerHTML = tries;
                //check letter input against letterArray.
                for (var j = 0; j < letterArray.length; j++) {
                    if (letterArray[j] === letter) {
                        //when a letter matches a certain letter in the letterArray
                        //the letter will replace the equivalent spot in the dashArray.
                        dashArray[j] = letter;
                        
                    }
                    //win condition
                    if (dashArray.toString() == letterArray.toString()) {
                        win++;
                        document.getElementById("wins").innerHTML = win;
                     
                        document.getElementById("currentWord").innerHTML = word;
                      
                      
                        if (total === dreams.length) {
                            alert("You've run out of words")
                        } 
                        else {
                        restart();
                        }
                    }
                    //losing condition
                    replaceDash();
                    if (tries === 0) {
                        lose++;
                        document.getElementById("currentWord").innerHTML = word;
                      
                        if (total === dreams.length) {
                            alert("You've run out of words")
                        } 
                        else {
                            restart();
                        }
                    }
                }
            } else {
                alert("Enter a new letter")
            }
        } else {
            alert("Enter a letter");
        }
    }
}
//for when the game is restarted after a word has been guessed.
function restart() {
    randomWord();
   
    dashArray = [];
    dashes(word);
    triedLetters = [];
    tries = 15;
    document.getElementById("remainingTries").innerHTML = tries;
    document.getElementById("lettersTried").innerHTML = triedLetters;
    guessLetter();
}

//calling my functions

randomWord();

dashes(word);
guessLetter();

