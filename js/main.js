const body = document.querySelector("body");
const preLoader = document.getElementById("preLoader");

const registerSection = document.getElementById("registerSection");
const registerInput = document.getElementById("registerInput");
const registerButton = document.getElementById("registerButton");

const mainSection = document.getElementById("main");

// ========== PRE LOADER for MAIN PAGE
function loadSession() {
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
}

// ========== START SESSION
function startSession() {
  loadSession();

  const nickName = registerInput.value;
  const nickPlace = document.getElementById("nickname");

  nickPlace.innerHTML = "Hi " + nickName;
}

// ========== REGISTER
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
    // alert("Application being rebuilt");
    startSession(); 
  }
});

// ========== LOG OUT
const exitButton = document.getElementById("exitButton");
exitButton.addEventListener("click", () => location.reload());
