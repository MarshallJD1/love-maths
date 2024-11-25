document.addEventListener("DOMContentLoaded", function() { // waits for the page to load before running the code
  let buttons = document.getElementsByTagName("button");  // sets all buttons on the page to a variable

  for (let button of buttons)  // loops through all buttons on the page 
  {
    button.addEventListener("click", function() {    // adds an event listener to each button
      if (this.getAttribute("data-type") === "submit") { // checks if the button clicked is the submit button
        alert("You clicked Submit!"); // alerts the user that they clicked the submit button
      } else {
        let gameType = this.getAttribute("data-type"); // sets the gameType to the data-type attribute of the button clicked
        alert(`You clicked ${gameType}`); // alerts the user that they clicked the gameType
      }
    })
  }

})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer () {

}

function incredmentScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}