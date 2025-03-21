const questions = [
  {
    question: "Fun weekend plans?",
    answers: [
      { text: "Sleep in the sun!", score: 10 },
      { text: "Explore everywhere!", score: 20 },
      { text: "Chase toys!", score: 30 },
      { text: "Cuddles!", score: 40 },
    ],
  },
  {
    question: "Someone calls your name?",
    answers: [
      { text: "Ignore (unless food)!", score: 10 },
      { text: "Run and rub!", score: 20 },
      { text: "Say 'mew?'", score: 30 },
      { text: "Stare hard!", score: 40 },
    ],
  },
  {
    question: "Tastiest thing ever?",
    answers: [
      { text: "Fancy fish!", score: 10 },
      { text: "Things to chase!", score: 20 },
      { text: "Milk or yogurt!", score: 30 },
      { text: "Human food!", score: 40 },
    ],
  },
  {
    question: "New place, first thing?",
    answers: [
      { text: "Hide!", score: 10 },
      { text: "Sniff everything!", score: 20 },
      { text: "Act like I live here!", score: 30 },
      { text: "Find a comfy spot!", score: 40 },
    ],
  },
  {
    question: "Show you like someone?",
    answers: [
      { text: "Slow blink or tail wag.", score: 10 },
      { text: "Head boops and purrs!", score: 20 },
      { text: "Bring 'gifts'!", score: 30 },
      { text: "Follow them around!", score: 40 },
    ],
  },
  {
    question: "Super bored?",
    answers: [
      { text: "Watch outside!", score: 10 },
      { text: "Knock things over!", score: 20 },
      { text: "Yell for attention!", score: 30 },
      { text: "Take a long nap!", score: 40 },
    ],
  },
  {
    question: "Being picked up?",
    answers: [
      { text: "Quickly put me down!", score: 10 },
      { text: "Yay, cuddle time!", score: 20 },
      { text: "Maybe yes, maybe no.", score: 30 },
      { text: "Only if I want to!", score: 40 },
    ],
  },
  {
    question: "Best nap spot?",
    answers: [
      { text: "Quiet and dark place.", score: 10 },
      { text: "On my human!", score: 20 },
      { text: "In the middle of the floor!", score: 30 },
      { text: "Soft bed with blankets!", score: 40 },
    ],
  },
  {
    question: "Meet someone new?",
    answers: [
      { text: "Hiss and hide!", score: 10 },
      { text: "Sniff their shoes.", score: 20 },
      { text: "Demand pets!", score: 30 },
      { text: "Watch from far away.", score: 40 },
    ],
  },
  {
    question: "Favorite toy?",
    answers: [
      { text: "Catnip toys!", score: 10 },
      { text: "Wiggly, bouncy things!", score: 20 },
      { text: "Soft, fuzzy toys!", score: 30 },
      { text: "Boxes and paper bags!", score: 40 },
    ],
  },
];

const catPersonalityData = {
  "Regal Persian": {
    image: "persian.jpg",
    description:
      "You are a picture of elegance and grace. While you enjoy your comfort and quiet time, a gentle stroke and a soft purr are always appreciated.",
  },
  "Energetic Bengal": {
    image: "bengal.jpg",
    description:
      "You are bursting with energy and curiosity! Exploring and playing are your favorite pastimes. You're always up for an adventure.",
  },
  "Affectionate Ragdoll": {
    image: "ragdoll.jpg",
    description:
      "You are a sweet and loving companion. You adore attention and will happily melt into your human's arms for cuddles.",
  },
  "Curious Siamese": {
    image: "siamese.jpg",
    description:
      "You are intelligent and inquisitive, always wanting to know what's going on. Your vocal nature and striking looks make you a unique personality.",
  },
  "Independent Russian Blue": {
    image: "russian.jpg",
    description:
      "You are a sophisticated and somewhat reserved soul. While you value your independence, you form deep bonds with your chosen humans.",
  },
  "Laid-back British Shorthair": {
    image: "british.jpg",
    description:
      "You are a calm and easygoing cat. You enjoy a good nap and are generally adaptable to your surroundings.",
  },
  "Mischievous Maine Coon": {
    image: "maine.jpg",
    description:
      "You are a gentle giant with a playful spirit. Despite your size, you can be quite the clown and enjoy interacting with your family.",
  },
  "Secretive Sphynx": {
    image: "spynx.jpg",
    description:
      "You are unique and intriguing. While you might seem aloof, you are often very affectionate with your close companions and enjoy staying warm.",
  },
  "Cautious Domestic Shorthair": {
    image: "short.jpg",
    description:
      "You are adaptable and observant. While you might be a bit hesitant in new situations, you can be a loyal and loving friend once you feel comfortable.",
  },
};

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");

let currentQuestionIndex = 0;
let totalScore = 0;
let selectedOption = null;

function startQuiz() {
  currentQuestionIndex = 0;
  totalScore = 0;
  nextButton.style.display = "none"; // hide the next button
  showQuestion(); // show the first ques
  nextButton.innerText = "Next"; // Add this line inside startQuiz()
}

startQuiz(); // Start the quiz when the page loads

function updateProgressBar(){
  const progressBar = document.getElementById("progress-bar");
  const totalQues = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQues) * 100;

  progressBar.style.width = progress + "%";
}

function showQuestion() {
  resetState(); //remove previous ques and ans choices before new question

  // Reset the answered flag for the new question
  answerButtons.dataset.answered = "false";

  let currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.onclick = () => selectAnswer(answer.score, button);
    answerButtons.appendChild(button);
  });

  updateProgressBar();
}

// when a new ques appears - hide next btn and remove prev ans
function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

// When a user clicks an answer
function selectAnswer(score, selectedButton) {
  // Check if an answer has already been selected for this question
  const currentQuestionAnswered = answerButtons.dataset.answered === "true";

  if (!currentQuestionAnswered) {
    // If no answer has been selected yet:

    // If an option was previously selected, remove its highlight
    if (selectedOption) {
      selectedOption.classList.remove("selected"); // Remove highlight
    }

    // Apply new selection
    selectedOption = selectedButton;
    selectedOption.classList.add("selected"); // Highlight selected option
    totalScore += score; // Add new score

    // Mark that an answer has now been selected for this question
    answerButtons.dataset.answered = "true";

    // Show "Next" button after selecting an answer
    nextButton.style.display = "block";
  }
  // If an answer was already selected, do nothing when another button is clicked
}

// When the user clicks the next button
nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
  currentQuestionIndex++;
  selectedOption = null;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Displaying the final result
function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  let percent = Math.round((totalScore / (questions.length * 40)) * 100);
  let personalityType = getPersonalityType(percent);
  const catData = catPersonalityData[personalityType];

  let resultHTML = `<h2>You are ${percent}% a ${personalityType} cat!</h2>`;

  if (catData) {
    resultHTML += `<img src="${catData.image}" alt="${personalityType}" style="max-width: 300px; margin-top: 10px;">`;
    resultHTML += `<p style="margin-top: 10px;">${catData.description}</p>`;
  } else {
    resultHTML += `<p>Oops, couldn't find information for this cat type!</p>`;
  }

  resultText.innerHTML = resultHTML; // Set the entire constructed HTML to the resultText
}

// Finally getting the Cat Personality Type
// Finally getting the Cat Personality Type
function getPersonalityType(percent) {
  if (percent >= 90) {
    return "Regal Persian";
  } else if (percent >= 80) {
    return "Energetic Bengal";
  } else if (percent >= 70) {
    return "Affectionate Ragdoll";
  } else if (percent >= 60) {
    return "Curious Siamese";
  } else if (percent >= 50) {
    return "Independent Russian Blue";
  } else if (percent >= 40) {
    return "Laid-back British Shorthair";
  } else if (percent >= 30) {
    return "Mischievous Maine Coon";
  } else if (percent >= 20) {
    return "Secretive Sphynx";
  } else {
    return "Cautious Domestic Shorthair";
  }
}

// Adding Restart Quiz Btn
document.getElementById("restart-btn").addEventListener("click", restartQuiz);

function restartQuiz() {
  totalScore = 0; // Reset score
  currentQuestionIndex = 0; // Reset question index
  resultContainer.style.display = "none"; // Hide result section
  quizContainer.style.display = "block"; // Show quiz again

  showQuestion(); // Start quiz from the first question
}
