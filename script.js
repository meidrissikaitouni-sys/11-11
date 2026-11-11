// ============================================
//  ⚙️ CONFIGURE THESE VALUES BEFORE SHARING!
// ============================================
const CONFIG = {
  USERNAME: "Sara",
  PASSWORD: "Iloveyou",
  LOVEDAY: "28/11",
};
// ============================================

// Floating hearts background
const heartsBg = document.getElementById("heartsBg");
const heartChars = ["❤", "💕", "💖", "💗", "♥"];
for (let i = 0; i < 25; i++) {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 10 + Math.random() * 20 + "px";
  h.style.animationDuration = 8 + Math.random() * 12 + "s";
  h.style.animationDelay = Math.random() * 10 + "s";
  heartsBg.appendChild(h);
}

// Stage switcher
function goToStage(id) {
  document.querySelectorAll(".stage").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// STAGE 1: Login
function checkLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const err  = document.getElementById("loginError");

  if (user === CONFIG.USERNAME && pass === CONFIG.PASSWORD) {
    err.textContent = "";
    goToStage("stage-loveday");
  } else {
    err.textContent = "Wrong username or password. Try again, my love 💔";
  }
}

// Allow Enter key to submit
document.getElementById("password").addEventListener("keypress", e => {
  if (e.key === "Enter") checkLogin();
});

// STAGE 2: Love Day
function checkLoveDay() {
  const input = document.getElementById("loveday").value.trim();
  const err = document.getElementById("loveDayError");

  // Normalize: allow "28-11", "28/11", "28 11"
  const normalized = input.replace(/[-. ]/g, "/");

  if (normalized === CONFIG.LOVEDAY) {
    err.textContent = "";
    goToStage("stage-letter");
  } else {
    err.textContent = "That's not the day our forever began... try again 💭";
  }
}

document.getElementById("loveday").addEventListener("keypress", e => {
  if (e.key === "Enter") checkLoveDay();
});

// STAGE 3: Envelope opening
function openEnvelope() {
  const env = document.getElementById("envelope");
  if (env.classList.contains("open")) return;

  env.classList.add("open");

  setTimeout(() => {
    env.style.display = "none";
    document.getElementById("letterWrap").classList.add("show");
  }, 900);
}