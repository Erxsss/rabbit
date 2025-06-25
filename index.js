const startBadf = document.getElementsByClassName("start")[0];
const restart = document.getElementsByClassName("restart")[0];
const mid = document.getElementsByClassName("mid")[0];
const scoreT = document.getElementById("score");
const timeT = document.getElementById("time");
const cong = document.getElementsByClassName("result")[0];
const head = document.getElementsByClassName("head")[0];
const scr = document.getElementById("scr");
let currentindex = 1;
let score = 0;
let time = 30;
let timerInterval, moleInterval;
function press() {
  cong.style.display = "none";
  restart.style.display = "none";
  startBadf.style.display = "none";
  mid.style.display = "flex";
  head.style.display = "block";
  start();
}
function start() {
  mid.innerHTML = ""; 
  score = 0;
  scoreT.textContent = `Score: ${score}`;
  scr.textContent = `Your score : ${score}`;
  time = 30;
  timeT.textContent = `Time: ${time}s`;
  for (let i = 0; i <= 8; i++) {
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = i.toString();
    const mole = document.createElement("div");
    mole.classList.add("mole");
    mole.style.display = "none";
    mole.addEventListener("click", function () {
      mole.style.display = "none";
      score++;
      scoreT.textContent = `Score: ${score}`;
      scr.textContent = `Your score : ${score}`;
      random();
    });
    hole.appendChild(mole);
    mid.appendChild(hole);
  }
  random();
  startTimers();
}
function random() {
  const prev = document.getElementById(currentindex);
  if (prev) prev.querySelector(".mole").style.display = "none";
  const currentholeind = Math.floor(Math.random() * 9);
  currentindex = currentholeind;
  const currenthole = document.getElementById(currentholeind.toString());
  if (currenthole) currenthole.querySelector(".mole").style.display = "block";
}
function startTimers() {
  clearInterval(timerInterval);
  clearInterval(moleInterval);

  moleInterval = setInterval(random, 1000);

  timerInterval = setInterval(() => {
    time--;
    timeT.textContent = `Time: ${time}s`;
    if (time < 0) {
      clearInterval(timerInterval);
      clearInterval(moleInterval);
      gg();
    }
  }, 1000);
}
function gg() {
  mid.style.display = "none";
  head.style.display = "none";
  cong.style.display = "block";
  restart.style.display = "block";
}
startBadf.addEventListener("click", press);
restart.addEventListener("click", press);
window.onload = () => {
  cong.style.display = "none";     
  restart.style.display = "none"; 
  startBadf.style.display = "block";
  mid.style.display = "none";     
  head.style.display = "none";     
};
