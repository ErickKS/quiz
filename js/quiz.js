// ========== QUIZ MAIN
import { cinema } from "./mock.js";

const quizCinema = document.getElementById("quizCinema");
const quizSports = document.getElementById("quizSports");
const quizTech = document.getElementById("quizTech");
const quizScience = document.getElementById("quizScience");
const quizMath = document.getElementById("quizMath");
const quizKnowledge = document.getElementById("quizKnowledge");
const quizMusic = document.getElementById("quizMusic");
const quizGeography = document.getElementById("quizGeography");

const quizSection = document.getElementById("quiz");

const question = document.getElementById("question");
const options = document.querySelectorAll("input[type=radio]");
const a_label = document.getElementById("a_label");
const b_label = document.getElementById("b_label");
const c_label = document.getElementById("c_label");
const d_label = document.getElementById("d_label");
const nextQuestion = document.getElementById("nextQuestion");

let quiz = null;
let currentQuizData = null;
let currentQuestion = 0;
let scoreQuiz = 0;

function showQuiz() {
  quizSection.style.display = "flex";
  quizSection.style.opacity = 1;
  quizSection.style.visibility = "visible";

  options.forEach((selected) => {
    selected.addEventListener("change", () => {
      nextQuestion.removeAttribute("disabled");
      nextQuestion.style.cursor = "pointer";
    });
  });
}

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

function transitionQuizAnimation() {
  setTimeout(() => {
    quizSection.style.opacity = 0;
    quizSection.style.visibility = "hidden";
    nextQuestion.style.pointerEvents = "none";

    if (quizSection.style.opacity == "0") {
      setTimeout(() => {
        quizSection.style.opacity = 1;
        quizSection.style.visibility = "visible";
        nextQuestion.style.pointerEvents = "initial";
      }, 400);
    }
  }, 100);
}

function replaceTextQuiz() {
  question.innerText = currentQuizData.question;
  a_label.firstElementChild.nextElementSibling.textContent = currentQuizData.a_option;
  b_label.firstElementChild.nextElementSibling.textContent = currentQuizData.b_option;
  c_label.firstElementChild.nextElementSibling.textContent = currentQuizData.c_option;
  d_label.firstElementChild.nextElementSibling.textContent = currentQuizData.d_option;
}

function disableNextQuestionButton() {
  nextQuestion.setAttribute("disabled", true);
  nextQuestion.style.cursor = "not-allowed";
}

function deselectAlternatives() {
  options.forEach((selected) => {
    selected.checked = false;
  });
}

nextQuestion.addEventListener("click", () => {
  let answer = null;
  options.forEach((selected) => {
    if (selected.checked) {
      answer = selected.id;
    }
  });

  if (answer === quiz[currentQuestion].correctOption) {
    scoreQuiz++;
  }

  currentQuestion++;

  transitionQuizAnimation();
  disableNextQuestionButton();
  deselectAlternatives();

  switch (currentQuizData.theme) {
    case "cinema":
      setTimeout(() => {
        loadQuizCinema();
      }, 500);
      break;
  }
});

function loadQuizCinema() {
  showQuiz();

  console.log(currentQuestion, scoreQuiz);
  quiz = cinema;
  currentQuizData = quiz[currentQuestion];
  replaceTextQuiz();
}
quizCinema.addEventListener("click", () => {
  loadQuiz();
  loadQuizCinema();
});

// ========== QUIZ RESULT
const quizResultSection = document.getElementById("result");
const resultMessage = document.getElementById("resultMessage");
const resultScore = document.getElementById("resultScore");

const repeatButton = document.getElementById("repeatButton");
const backToMenuButton = document.querySelectorAll(".backToMenuButton");

const meters = document.querySelectorAll("svg[data-value] .meter");

// SCORE ANIMATION
meters.forEach((path) => {
  let length = path.getTotalLength();
  let value = parseInt(path.parentNode.getAttribute("data-value"));
  let to = length * ((100 - value) / 100);

  path.getBoundingClientRect();

  path.style.strokeDashoffset = Math.max(0, to);
  path.nextElementSibling.textContent = `${value / 20}/5`;
});

// BACK TO MENU
backToMenuButton.forEach((button) => {
  button.addEventListener("click", () => {
    currentQuestion = 0;
    scoreQuiz = 0;

    quizSection.style.display = "none";
    quizResultSection.style.display = "none";

    setTimeout(() => {
      body.style.overflowY = "visible";
      preLoader.style.display = "flex";
      registerSection.style.display = "none";

      if (preLoader.style.opacity == 0) {
        setTimeout(() => {
          preLoader.style.display = "none";
          mainSection.style.display = "block";
        }, 1000);
      }
    }, 100);
  });
});
