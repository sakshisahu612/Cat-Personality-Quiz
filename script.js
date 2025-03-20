const questions = [
  {
    question: "What's your super fun weekend plan?",
    answers: [
      { text: "Sleepy time in the sunny spot!", score: 10 },
      {
        text: "Gotta check out every little bit of the house (maybe even outside)!",
        score: 20,
      },
      { text: "Zoomies for laser dots and wiggly toys!", score: 30 },
      { text: "Couch cuddles and belly rubs, please!", score: 40 },
    ],
  },
  {
    question: "What do you do when someone calls your awesome name?",
    answers: [
      { text: "Pretend I didn't hear unless there's yummy food!", score: 10 },
      {
        text: "Run over purring and do the leggy weave!",
        score: 20,
      },
      {
        text: 'Give a little "mew?" and maybe tilt my head like I\'m thinking.',
        score: 30,
      },
      {
        text: "Stare really hard, like I'm deciding if they're okay.",
        score: 40,
      },
    ],
  },
  {
    question: "What's the tastiest thing in the whole wide world?",
    answers: [
      { text: "Fancy fishy stuff, of course!", score: 10 },
      {
        text: "Anything I can chase and pounce on (even if it's just a toy)!",
        score: 20,
      },
      { text: "Some yummy milk or a little lick of yogurt.", score: 30 },
      {
        text: "Whatever my human is eating (even if they say no)!",
        score: 40,
      },
    ],
  },
  {
    question: "When you go to a new place, what's the first thing you do?",
    answers: [
      {
        text: "Hide under something safe for a while!",
        score: 10,
      },
      {
        text: "Sniff EVERYWHERE and leave my special smells!",
        score: 20,
      },
      { text: "Act like I've lived there forever!", score: 30 },
      {
        text: 'Find the comfiest spot and say, "Mine!"',
        score: 40,
      },
    ],
  },
  {
    question: "How do you show your human you like them?",
    answers: [
      {
        text: "A little blink or a lazy tail wag in their direction.",
        score: 10,
      },
      {
        text: "Lots of head boops and purrs like a tiny motor!",
        score: 20,
      },
      {
        text: 'Bringing them special "presents" (like bugs!).',
        score: 30,
      },
      {
        text: "Following them around and sitting right where they want to be!",
        score: 40,
      },
    ],
  },
  {
    question: "What do you do when you're just SO bored?",
    answers: [
      {
        text: "Watch the outside world like it's a TV show!",
        score: 10,
      },
      { text: "Make things fall off tables!", score: 20 },
      { text: "Yell until someone gives me attention!", score: 30 },
      { text: "Take a super long nap and dream about yummy food!", score: 40 },
    ],
  },
  {
    question: "How do you feel about being picked up for a snuggle?",
    answers: [
      {
        text: "Okay for a second, then put me DOWN!",
        score: 10,
      },
      { text: "Yay! Cuddle time!", score: 20 },
      {
        text: "Depends on my mood, maybe yes, maybe NO WAY.",
        score: 30,
      },
      { text: "Only if I say it's okay and I'm feeling cuddly.", score: 40 },
    ],
  },
  {
    question: "Where's the bestest place to take a nap?",
    answers: [
      { text: "Somewhere quiet and dark, all by myself.", score: 10 },
      { text: "Right on my human's lap or chest!", score: 20 },
      {
        text: "Stretched out in the middle of the floor, taking up ALL the space!",
        score: 30,
      },
      { text: "In a super soft bed with cozy blankets.", score: 40 },
    ],
  },
  {
    question: "What do you do when you meet someone new?",
    answers: [
      { text: "Hiss and disappear until they're gone!", score: 10 },
      { text: "Sneak up and sniff their shoes very carefully.", score: 20 },
      { text: "Run right over and demand pets!", score: 30 },
      {
        text: "Watch them from far away and decide if they're trustworthy.",
        score: 40,
      },
    ],
  },
  {
    question: "What's your absolute favorite toy to play with?",
    answers: [
      { text: "Anything with that magical catnip stuff!", score: 10 },
      { text: "Things that wiggle and bounce so I can chase them!", score: 20 },
      { text: "Soft and fuzzy toys I can snuggle.", score: 30 },
      { text: "Empty boxes and crinkly paper bags!", score: 40 },
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
