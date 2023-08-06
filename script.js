//This function is to open a page with a given url
function openPage(url) {
  window.open(url);
}

// This function is to toggle the descriptions under each entry/moment.
function toggleDescription() {
  var descriptions = document.getElementsByClassName("description"); // get all elements of class
  var toggleButton = document.getElementById("toggleButton"); // get the button that is pressed.

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

    // Immediately update the button text based on the first description's state
    if (descriptions[0].style.display === "none") {
      toggleButton.textContent = "Display Descriptions";
    } else {
      toggleButton.textContent = "Hide Descriptions";
    }
  }
}

/* old function to just hide description
  function hideDescription() {
    var x = document.getElementsByClassName("description");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
  */
