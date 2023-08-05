const body = document.querySelector("body");
const preLoader = document.getElementById("preLoader");

const registerSection = document.getElementById("registerSection");
const registerInput = document.getElementById("registerInput");
const registerButton = document.getElementById("registerButton");

const mainSection = document.getElementById("main");
const quizSection = document.getElementById("quiz");
const quizResultSection = document.getElementById("quizResult");
const quizResultFruitSection = document.getElementById("quizResultFruit");

const answers = document.querySelectorAll(".answers");

const result = document.getElementById("result");
const fruitResult = document.getElementById("fruitResult");

const tittleResult = document.getElementById("tittleResult");

const tittle = document.getElementById("tittle");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitQuestion = document.getElementById("submitQuestion");

const fruits = [
  {
    tittle: "Fruits",
    question: "What is the one taste that you cannot live without?",
    firstAnswer: "Sour",
    secondAnswer: "Sweet",
    thirdAnswer: "Salty",
    fourthAnswer: "Bitter",
    correct: "secondAnswer",
  },
  {
    tittle: "Fruits",
    question: "Which of these are you most likely to do on the weekend?",
    firstAnswer: "Organize my house",
    secondAnswer: "Play video games",
    thirdAnswer: "Go shopping",
    fourthAnswer: "Watch movies",
    correct: "secondAnswer",
  },
  {
    tittle: "Fruits",
    question: "Where would you go on your dream holiday?",
    firstAnswer: "Somewhere cold",
    secondAnswer: "Somewhere warm",
    thirdAnswer: "I'd rather stay at home",
    fourthAnswer: "Anywhere",
    correct: "firstAnswer",
  },
  {
    tittle: "Fruits",
    question: "Of the following options, what color do you dislike the most?",
    firstAnswer: "Orange",
    secondAnswer: "Blue",
    thirdAnswer: "Green",
    fourthAnswer: "Red",
    correct: "thirdAnswer",
  },
  {
    tittle: "Fruits",
    question: "Which of the following is your drink of choice?",
    firstAnswer: "Beer",
    secondAnswer: "Water",
    thirdAnswer: "Wine",
    fourthAnswer: "Juice",
    correct: "secondAnswer",
  },
];

const math = [
  {
    tittle: "Math",
    question: "What is the result of 8x8 ?",
    firstAnswer: "60",
    secondAnswer: "64",
    thirdAnswer: "72",
    fourthAnswer: "78",
    correct: "secondAnswer",
  },
  {
    tittle: "Math",
    question: "What is the result of 2^5 ?",
    firstAnswer: "7",
    secondAnswer: "30",
    thirdAnswer: "32",
    fourthAnswer: "10",
    correct: "thirdAnswer",
  },
  {
    tittle: "Math",
    question: "What is the result of √169 ?",
    firstAnswer: "13",
    secondAnswer: "14",
    thirdAnswer: "11",
    fourthAnswer: "12",
    correct: "firstAnswer",
  },
  {
    tittle: "Math",
    question: "What is the result of 7x9?",
    firstAnswer: "62",
    secondAnswer: "64",
    thirdAnswer: "63",
    fourthAnswer: "65",
    correct: "thirdAnswer",
  },
  {
    tittle: "Math",
    question: "What is the result of 3+10*2?",
    firstAnswer: "26",
    secondAnswer: "23",
    thirdAnswer: "24",
    fourthAnswer: "16",
    correct: "secondAnswer",
  },
];

const soccer = [
  {
    tittle: "Soccer",
    question: "The US has how many world cups?",
    firstAnswer: "1",
    secondAnswer: "3",
    thirdAnswer: "He doesn't have any :(",
    fourthAnswer: "2",
    correct: "thirdAnswer",
  },
  {
    tittle: "Soccer",
    question: "Brazil has how many world cups?",
    firstAnswer: "3",
    secondAnswer: "4",
    thirdAnswer: "6",
    fourthAnswer: "5",
    correct: "fourthAnswer",
  },
  {
    tittle: "Soccer",
    question: "Who is the greatest premier league champion?",
    firstAnswer: "Man. United",
    secondAnswer: "Liverpool",
    thirdAnswer: "Arsenal",
    fourthAnswer: "Man. City",
    correct: "firstAnswer",
  },
  {
    tittle: "Soccer",
    question: "What year was the first world cup ?",
    firstAnswer: "1934",
    secondAnswer: "1930",
    thirdAnswer: "1940",
    fourthAnswer: "1938",
    correct: "secondAnswer",
  },
  {
    tittle: "Soccer",
    question: "Who was named the best player in the world in 2018?",
    firstAnswer: "Robert Lewandowski",
    secondAnswer: "Luka Modric",
    thirdAnswer: "Lionel Messi",
    fourthAnswer: "Cristiano Ronaldo",
    correct: "secondAnswer",
  },
];

const general = [
  {
    tittle: "General",
    question: "HTML is a language ?",
    firstAnswer: "Shut up",
    secondAnswer: "Yes",
    thirdAnswer: "No",
    fourthAnswer: "Yes, but it's a markup language",
    correct: "fourthAnswer",
  },
  {
    tittle: "General",
    question: "What is the world's most populated country?",
    firstAnswer: "USA",
    secondAnswer: "China",
    thirdAnswer: "India",
    fourthAnswer: "Russia",
    correct: "secondAnswer",
  },
  {
    tittle: "General",
    question: "What is capital of Australia?",
    firstAnswer: "Adelaide",
    secondAnswer: "Canberra",
    thirdAnswer: "Melbourne",
    fourthAnswer: "Sydney",
    correct: "fourthAnswer",
  },
  {
    tittle: "General",
    question: "What is the World's Smallest Country?",
    firstAnswer: "Vatican City",
    secondAnswer: "Luxembourg",
    thirdAnswer: "Lichtenstein",
    fourthAnswer: "Monaco",
    correct: "firstAnswer",
  },
  {
    tittle: "General",
    question: "What is the most used programming language in 2021?",
    firstAnswer: "JavaScript",
    secondAnswer: "Java",
    thirdAnswer: "CSS",
    fourthAnswer: "PHP",
    correct: "firstAnswer",
  },
];

// PRE LOADER for MAIN PAGE

function loadSession() {
  setTimeout(() => {
    body.style.overflowY = "visible";
    preLoader.style.display = "flex";
    registerSection.style.display = "none";

    if (preLoader.style.opacity == 0) {
      setTimeout(() => {
        preLoader.style.display = "none";
        mainSection.style.display = "block";
      }, 1500);
    }
  }, 100);
}

// PRE LOADER for QUIZ QUESTIONS

function loadQuiz() {
  setTimeout(() => {
    quizSection.style.display = "flex";
    body.style.overflowY = "hidden";
    preLoader.style.display = "flex";

    if (preLoader.style.opacity == 0) {
      setTimeout(() => {
        preLoader.style.display = "none";
        mainSection.style.display = "none";
        quizSection.style.display = "flex";
      }, 1000);
    }
  }, 100);
}

function getAlternatives() {
  let answer = undefined;

  answers.forEach((answerAlternative) => {
    if (answerAlternative.checked) {
      answer = answerAlternative.id;
    }
  });

  return answer;
}

function deselectAlternatives() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

function showQuiz() {
  quizSection.style.display = "flex";
  quizSection.style.opacity = "1";
  quizSection.style.visibility = "visible";
}

// BACK TO MENU

function backToMenu() {
  currentQuestion = 0;
  scoreQuiz = 0;
  submitQuestion.style.pointerEvents = "initial";
  quizSection.style.display = "none";
  quizResultFruitSection.style.display = "none";
  quizResultSection.style.display = "none";

  loadSession();
}

// SHOW RESULT QUIZ (!quizFruit)

function showResult() {
  setTimeout(() => {
    quizSection.style.opacity = "0";
    quizSection.style.visibility = "hidden";

    if (quizSection.style.opacity == "0") {
      setTimeout(() => {
        quizSection.style.display = "none";
        quizResultSection.style.display = "flex";
        scoreQuiz <= 1 ? (tittleResult.innerText = "Oh noo!") : (tittleResult.innerText = "Congratulations!");
        switch (scoreQuiz) {
          case 1:
            result.innerText = "1/5";
            break;
          case 2:
            result.innerText = "2/5";
            break;
          case 3:
            result.innerText = "3/5";
            break;
          case 4:
            result.innerText = "4/5";
            break;
          case 5:
            result.innerText = "5/5";
            break;
          default:
            result.innerText = "0/5";
            break;
        }
      }, 400);
    }
  }, 100);
}

// QUIZ

let currentQuestion = 0;
let scoreQuiz = 0;

function replaceTextQuiz() {
  tittle.innerText = currentQuizData.tittle;
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.firstAnswer;
  b_text.innerText = currentQuizData.secondAnswer;
  c_text.innerText = currentQuizData.thirdAnswer;
  d_text.innerText = currentQuizData.fourthAnswer;
}

function loadQuizFruit() {
  deselectAlternatives();
  showQuiz();

  currentQuizData = fruits[currentQuestion];
  replaceTextQuiz();
}

function loadQuizMath() {
  deselectAlternatives();
  showQuiz();

  currentQuizData = math[currentQuestion];
  replaceTextQuiz();
}

function loadQuizSoccer() {
  deselectAlternatives();
  showQuiz();

  currentQuizData = soccer[currentQuestion];
  replaceTextQuiz();
}

function loadQuizGeneral() {
  deselectAlternatives();
  showQuiz();

  currentQuizData = general[currentQuestion];
  replaceTextQuiz();
}

submitQuestion.addEventListener("click", () => {
  const answer = getAlternatives();

  if (answer) {
    submitQuestion.style.pointerEvents = "initial";
    if (currentQuizData.tittle === "Fruits") {
      if (answer === fruits[currentQuestion].correct) {
        scoreQuiz++;
      }

      currentQuestion++;

      if (currentQuestion < fruits.length) {
        setTimeout(() => {
          quizSection.style.opacity = "0";
          if (quizSection.style.opacity == 0) {
            setTimeout(() => {
              loadQuizFruit();
              submitQuestion.style.pointerEvents = "initial";
              quizSection.style.opacity = "1";
            }, 400);
          }
        }, 100);
      } else {
        setTimeout(() => {
          quizSection.style.opacity = "0";
          quizSection.style.visibility = "hidden";

          if (quizSection.style.opacity == "0") {
            setTimeout(() => {
              quizSection.style.display = "none";
              quizResultFruitSection.style.display = "flex";
              switch (scoreQuiz) {
                case 1:
                  fruitResult.innerText = "Mango";
                  break;
                case 2:
                  fruitResult.innerText = "Pineapple";
                  break;
                case 3:
                  fruitResult.innerText = "Watermelon";
                  break;
                case 4:
                  fruitResult.innerText = "Lemon";
                  break;
                default:
                  fruitResult.innerText = "Banana";
                  break;
              }
            }, 400);
          }
        }, 100);
      }
    }
    if (currentQuizData.tittle === "Math") {
      if (answer === math[currentQuestion].correct) {
        scoreQuiz++;
      }

      currentQuestion++;

      if (currentQuestion < math.length) {
        setTimeout(() => {
          quizSection.style.opacity = "0";
          if (quizSection.style.opacity == 0) {
            setTimeout(() => {
              loadQuizMath();
              submitQuestion.style.pointerEvents = "initial";
              quizSection.style.opacity = "1";
            }, 400);
          }
        }, 100);
      } else {
        showResult();
      }
    }
    if (currentQuizData.tittle === "Soccer") {
      if (answer === soccer[currentQuestion].correct) {
        scoreQuiz++;
      }

      currentQuestion++;

      if (currentQuestion < soccer.length) {
        setTimeout(() => {
          quizSection.style.opacity = "0";
          if (quizSection.style.opacity == 0) {
            setTimeout(() => {
              loadQuizSoccer();
              submitQuestion.style.pointerEvents = "initial";
              quizSection.style.opacity = "1";
            }, 400);
          }
        }, 100);
      } else {
        showResult();
      }
    }
    if (currentQuizData.tittle === "General") {
      if (answer === general[currentQuestion].correct) {
        scoreQuiz++;
      }

      currentQuestion++;

      if (currentQuestion < general.length) {
        setTimeout(() => {
          quizSection.style.opacity = "0";
          if (quizSection.style.opacity == 0) {
            setTimeout(() => {
              loadQuizGeneral();
              submitQuestion.style.pointerEvents = "initial";
              quizSection.style.opacity = "1";
            }, 400);
          }
        }, 100);
      } else {
        showResult();
      }
    }
  }
});

// START SESSION

function startSession() {
  loadSession();

  const nickName = registerInput.value;
  const nickPlace = document.getElementById("nickname");

  nickPlace.innerHTML = "Hi " + nickName;

  // CHOOSE QUIZ

  const quizFruit = document.getElementById("quizFruit");

  quizFruit.addEventListener("click", () => {
    loadQuiz();
    loadQuizFruit();
  });

  const quizMath = document.getElementById("quizMath");

  quizMath.addEventListener("click", () => {
    loadQuiz();
    loadQuizMath();
  });

  const quizSoccer = document.getElementById("quizSoccer");

  quizSoccer.addEventListener("click", () => {
    loadQuiz();
    loadQuizSoccer();
  });

  const quizGeneral = document.getElementById("quizGeneral");

  quizGeneral.addEventListener("click", () => {
    loadQuiz();
    loadQuizGeneral();
  });
}

// REGISTER

registerInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    registerButton.click();
  }
});

registerButton.addEventListener("click", (event) => {
  if (registerInput.value === "") {
    registerInput.classList.add("alert");
  } else {
    startSession();
  }
});

// EXIT
const exitButton = document.getElementById("exitButton");
exitButton.addEventListener("click", () => location.reload());
