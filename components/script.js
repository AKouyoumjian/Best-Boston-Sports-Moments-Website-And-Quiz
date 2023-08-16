/**
 * First script for Boston Sports Moments Website by Alex Kouyoumjian. Focuses on functionality for everything but the quiz.
 */

//This function is to open a page with a given url
function openPage(url) {
  window.open(url);
}

// This function is to toggle the descriptions under each entry/moment.
function toggleDescription() {
  var descriptions = document.getElementsByClassName("description"); // get all elements of class
  var toggleButtons = document.getElementsByClassName("toggleButton"); // get the button that is pressed.

  // iterate through each description and toggle.
  for (var i = 0; i < descriptions.length; i++) {
    // if description has been removed, we want to change display to show it
    if (
      descriptions[i].style.display === "none" ||
      descriptions[i].style.display === ""
    ) {
      descriptions[i].style.display = "block"; // Show description
    } else {
      // else we want to remove it, set display to none
      descriptions[i].style.display = "none"; // Hide description
    }
  }

  // Now, update all the buttons' text, based on the first description's state
  // iterate through each toggle button and update textContent
  for (var j = 0; j < toggleButtons.length; j++) {
    if (descriptions[0].style.display === "none") {
      toggleButtons[j].textContent = "Display Descriptions";
    } else {
      toggleButtons[j].textContent = "Hide Descriptions";
    }
  }
}