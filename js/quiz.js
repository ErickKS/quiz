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
const questionNumber = document.getElementById("currentStep");
const options = document.querySelectorAll("input[type=radio]");
const a_label = document.getElementById("a_label");
const b_label = document.getElementById("b_label");
const c_label = document.getElementById("c_label");
const d_label = document.getElementById("d_label");
const nextQuestion = document.getElementById("nextQuestion");

// ========== QUIZ RESULT
const quizResultSection = document.getElementById("result");
const resultMessage = document.getElementById("resultMessage");
const resultScore = document.getElementById("resultScore");

const backToMenuButton = document.querySelectorAll(".backToMenuButton");
const repeatButton = document.getElementById("repeatButton");

// ==================== MAIN PROGRAM
let quiz = null;
let currentQuizData = null;
let currentQuestion = 0;
let scoreQuiz = 0;

function showQuiz() {
  quizSection.style.display = "flex";
  quizSection.style.opacity = 1;
  quizSection.style.visibility = "visible";

  questionNumber.innerText = currentQuestion + 1;

  options.forEach((selected) => {
    selected.addEventListener("change", () => {
      nextQuestion.removeAttribute("disabled");
      nextQuestion.style.cursor = "pointer";
    });
  });
}
function showQuizResult() {
  loadQuizResult();

  if (scoreQuiz < 2) {
    resultMessage.textContent = "Oh noo!";
  } else if (scoreQuiz > 3) {
    resultMessage.textContent = "Well done!";
  } else {
    resultMessage.textContent = "Great!";
  }

  resultScore.textContent = scoreQuiz;
}

function loadQuiz() {
  disableNextQuestionButton();
  deselectAlternatives();

  setTimeout(() => {
    quizSection.style.display = "flex";
    quizResultSection.style.display = "none";
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
function loadQuizResult() {
  setTimeout(() => {
    quizSection.style.opacity = 0;
    quizSection.style.visibility = "hidden";

    if (quizSection.style.opacity === "0") {
      setTimeout(() => {
        quizSection.style.display = "none";
        quizResultSection.style.display = "flex";

        if (quizResultSection.style.display === "flex") {
          setTimeout(() => {
            quizResultSection.style.opacity = 1;
            quizResultSection.style.visibility = "visible";
          }, 400);
        }
      }, 500);
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
    progress.setAttribute("data-value", scoreQuiz * 20);
  }

  if (currentQuestion === 4) {
    showQuizResult();

    setTimeout(() => {
      scoreAnimation();
    }, 900);
  } else {
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
  }
});

function loadQuizCinema() {
  showQuiz();

  quiz = cinema;
  currentQuizData = quiz[currentQuestion];
  replaceTextQuiz();
}
quizCinema.addEventListener("click", () => {
  loadQuiz();
  loadQuizCinema();
});

// ========== QUIZ ACCESSIBILITY
const optionsWrapper = document.querySelectorAll(".option__single label");

optionsWrapper.forEach((option) => {
  option.addEventListener("keypress", ({ key }) => {
    const event = new Event("change", { bubbles: true });
    if (key === " ") {
      option.lastElementChild.dispatchEvent(event);
      option.lastElementChild.checked = true;
    }
  });
});

// ========== SCORE ANIMATION
const meters = document.querySelectorAll("svg[data-value] .meter");
const progress = document.querySelector("svg[data-value]");

function scoreAnimation() {
  meters.forEach((path) => {
    let length = path.getTotalLength();
    let value = parseInt(path.parentNode.getAttribute("data-value"));
    let to = length * ((100 - value) / 100);

    path.getBoundingClientRect();

    path.nextElementSibling.textContent = `${value / 20}/5`;
    setTimeout(() => {
      path.style.strokeDashoffset = Math.max(0, to);
    }, 100);
  });
}

function defaultScoreAnimationProgress() {
  progress.setAttribute("data-value", 0);

  meters.forEach((path) => {
    let length = path.getTotalLength();
    let value = parseInt(path.parentNode.getAttribute("data-value"));
    let to = length * ((100 - value) / 100);

    path.style.strokeDashoffset = Math.max(to, 0);
    path.nextElementSibling.textContent = "0/5";
  });
}

// ========== REPEAT QUIZ
repeatButton.addEventListener("click", () => {
  scoreQuiz = 0;
  currentQuestion = 0;

  loadQuiz();

  setTimeout(() => {
    defaultScoreAnimationProgress();
  }, 150);

  switch (currentQuizData.theme) {
    case "cinema":
      setTimeout(() => {
        loadQuizCinema();
      }, 500);
      break;
  }
});

// ========== BACK TO MENU
backToMenuButton.forEach((button) => {
  button.addEventListener("click", () => {
    currentQuestion = 0;
    scoreQuiz = 0;

    defaultScoreAnimationProgress();

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
