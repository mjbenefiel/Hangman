Project: Hangman: Lucid Dreams Edition

Author: Michael Benefiel

Why I created this project: Homework for the University of Kansas Coding Boot Camp, and to develop basic JS skills.

Feel free to use some or all of this code if you're trying to complete a similar project.


THE PROJECT

Bootstrap theme: Grayscale v5.0.1

Game CSS (style.css) used to style Hangman portion of the webpage/app.

Grayscale CSS used with Bootstrap theme.

Vendor folder used with Bootstrap theme.


JavaScript:
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


    