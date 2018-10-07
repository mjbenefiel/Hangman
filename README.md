<h1>Hangman: Lucid Dreams Edition</h1>
<hr></hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr></hr>

<h3> App screenshot </h3>

![alt text](https://raw.githubusercontent.com/mjbenefiel/Word-Guess-Game/master/assets/images/readme.jpg "Hangman")

<hr></hr>
<h2> How it works </h2>
Hit "click here to begin your journey" button. Try to guess the word that's hidden from you by typing in letters.
<hr></hr>

<h2>Technology used</h2>

[Bootstrap theme: Grayscale v5.0.1](https://startbootstrap.com/template-overviews/grayscale/)
<hr></hr>

<h4>Below is a thorough, but not comprehensive, step-by-step process of how I got the app running in terms of code</h4>

Declared game variables and arrays for:

- win (game)
- loss (game)
- total (wins and losses)
- tries (remaining)
- tried letters
- alphabet array for data validation
- var dreams object containing all word answers, and used: false for use in   functions
- letter array for letters in the solution
- word variable for the chosen word
- dash array for the number of dashses in a word
- random object variable

Functions:
- function to generate and return random word

- replace dash function used to complement the dash function

- dashes function that pushes __ to HTML, so length of unguessed word         displays in dashes
  - replaceDash function called and adds space for multi-space phrases

- display letters function for displaying letters pressed by user

- guess letters function includes the onkeyup event listener 
  - toLowerCase used for comparison's sake
  - indexOf utilized to check for letters used and attempted

- for loop to match the letter array with letters pressed
  - when letters match, they replace the dash in dash array and populate on       screen

- win if/else statement to account for when a user wins
  - wins continue to accumulate and are not included in reset function

- lose if/else statement to account for when a user loses

- restart function for after a word has been guessed
  - resets tries
  - resets dashArray (dashes display for next word)
  - resets tried letters

- There was also a custom JS file for the Boostrap template


    
