/**
 * Second script for Boston Sports Moments Website by Alex Kouyoumjian. Focuses on functionality the quiz.
 */
const questions = [
  // first question
  {
    question:
      "After the New England Patriots came back against the Falcons in SuperBowl LI, how many championships had Tom Brady won?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
    ],
  },

  // second question
  {
    question:
      "What pitch did Chris Sale throw to strike out Manny Machado to win the 2018 World Series?",
    answers: [
      { text: "Fastball", correct: false },
      { text: "Slider", correct: true },
      { text: "Changeup", correct: false },
      { text: "Knuckleball", correct: false },
    ],
  },

  // third question
  {
    question:
      "Before 2008, when was the last time the Boston Celtics won the NBA Championship?",
    answers: [
      { text: "1957", correct: false },
      { text: "1981", correct: false },
      { text: "1986", correct: true },
      { text: "2001", correct: false },
    ],
  },

  // fourth question
  {
    question:
      "Who gave the Boston Marathon speech after the tragic bombing in 2013?",
    answers: [
      { text: "Dustin Pedroia", correct: false },
      { text: "Tom Brady", correct: false },
      { text: "Patrice Bergeron", correct: false },
      { text: "David Ortiz", correct: true },
    ],
  },

  // fifth question
  {
    question:
      "What team did David Ortiz hit his heroic home run in Game 2 of the 2013 ALCS?",
    answers: [
      { text: "Yankees", correct: false },
      { text: "Tigers", correct: true },
      { text: "Blue Jays", correct: false },
      { text: "Angels", correct: false },
    ],
  },

  // sixth question
  {
    question:
      "Who scored the SuperBowl winning touchdown for the Patriots in SB LI?",
    answers: [
      { text: "James White", correct: true },
      { text: "Legarrette Blunt", correct: false },
      { text: "Brandon Bolden", correct: false },
      { text: "Tom Brady", correct: false },
    ],
  },

  // seventh question
  {
    question: "Who won World Series MVP for the Red Sox in 2018?",
    answers: [
      { text: "Mookie Betts", correct: false },
      { text: "Chris Sale", correct: false },
      { text: "Steve Pierce", correct: true },
      { text: "David Ortiz", correct: false },
    ],
  },

  // eigth question
  {
    question:
      "Which of these four players had the least amount of points in the Celtics Game 6 win in the 2008 NBA Finals?",
    answers: [
      { text: "Paul Pierce", correct: true },
      { text: "Kevin Garnett", correct: false },
      { text: "Ray Allen", correct: false },
      { text: "Rajon Rondo", correct: false },
    ],
  },

  // ninth question
  {
    question: "What was the final score of SuperBowl LI?",
    answers: [
      { text: "29-28", correct: false },
      { text: "32-28", correct: false },
      { text: "34-28", correct: true },
      { text: "35-28", correct: false },
    ],
  },

  // tenth question
  {
    question: "Who is the NFL's Greatest Of All Time (may be biased)?",
    answers: [
      { text: "Jerry Rice", correct: false },
      { text: "Tom Brady", correct: true },
      { text: "Patrick Mahomes", correct: false },
      { text: "Tim Tebow", correct: false },
    ],
  },
];

// current question we are on
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// variables to store index and score
let currentQuestionIndex = 0;
let score = 0;

// method to start a quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  // when quiz ends, button will say restart quiz, so we want to reset it.
  nextButton.innerHTML = "Next Question";
  showQuestion();
}

// function to show the question
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];

  // change index notation to notation starting at 1
  let questionNo = currentQuestionIndex + 1;

  // displays question number followed by question.
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // for each answer in our current question,
  currentQuestion.answers.forEach((answer) => {
    // store element as a button
    const button = document.createElement("button");

    // add answer's text to the button
    button.innerHTML = answer.text;

    // Add the "btn" class to the button.
    button.classList.add("btn");

    // display the button inside the answer-buttons div
    answerButtons.appendChild(button);

    // now add listener to each button for when click occurs
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // when clicked, trigger selectAnswer function
    button.addEventListener("click", selectAnswer);
  });
}

// function to reset the state, getting rid of former answers
function resetState() {
  nextButton.style.display = "none";

  // remove all previous answer options
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// function for when selecting an answer, seeing if correct and changing color
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  // add the selected button to class depending if correct or incorrect
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++; //increase score by one
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // now that an answer has been selected, we show which is correct.
  // We do this here, for each button, if it is true add green color
  // aka add classList "correct"
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    // now we disable selecting any more answers since only one answer is allowed
    button.disabled = true;
  });

  // now display button to go to next question
  nextButton.style.display = "block";
}

// function to show the score
function showScore() {
  // we reset the state since quiz is over
  resetState();

  // Create the score message
  const scoreMessage =
    "You scored " + score + " out of " + questions.length + "! ";

  // add a picture for good job (70% or better), alright (50%-69%), and bad job (<50%).
  const scorePercent = score / questions.length; // percentage of correct based on score of the quiz

  // for if score is 70% or better
  if (scorePercent >= 0.7) {
    questionElement.innerHTML =
      scoreMessage +
      "Great Job!" +
      '<br> <img src="good-job-image.jpg" alt="good job image" height="250" width="250">';
  } else if (scorePercent >= 0.5) {
    // for if score is 50% to 69%
    questionElement.innerHTML =
      scoreMessage +
      "Alright job!" +
      '<br> <img src="alright-image.jpeg" alt="alright job image" height="250" width="250">';
  } else {
    questionElement.innerHTML =
      scoreMessage +
      "Poor job!" +
      '<br> <img src="bad-job-image.jpeg" alt="bad job image" height="275" width="275">';
  }

  // now change the next button to show Play Quiz Again instead of Next Question
  nextButton.innerHTML = "Play Quiz Again";
  nextButton.style.display = "block";
}

// function to handle the next button when next question is needed
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // call showQuestion function with updated current index
  } else {
    showScore();
  }
}

//When next-button is clicked. We want to go to next question
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    // this is to restart quiz if there are no questions left.
    startQuiz();
  }
});

//finally, the quiz is started.
startQuiz();