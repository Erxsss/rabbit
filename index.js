const startBadf = document.getElementsByClassName("start")[0];
const mid = document.getElementsByClassName("mid")[0];
let currentindex = 1;
let score = 0;
const scoreT = document.getElementById("score");
const timeT = document.getElementById("time");
const cong = document.getElementsByClassName("result")[0];
const head = document.getElementsByClassName("head")[0];
const scr = document.getElementById("scr");
function press(){
  cong.style.display = "none";
  function start() {
  cong.style.display ="none";
  for (let i = 0; i <= 8; i++) {
    score = 0;
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = i.toString();
    const mole = document.createElement("div");
    mole.classList.add("mole");
    mole.style.display = "none";
    hole.appendChild(mole);
    mid.appendChild(hole);
    mole.addEventListener("click", function (event) {
      mole.style.display = "none";
      score++;
      scoreT.textContent = `Score:${score}`;
      scr.textContent = `Your score : ${score}`;
      random();
    });
  }
}

function random() {
  const prev = document.getElementById(currentindex);
  prev.querySelector(".mole").style.display = "none";
  const currentholeind = Math.floor(Math.random() * 8);
  currentindex = currentholeind;
  const currenthole = document.getElementById(currentholeind.toString());
  currenthole.querySelector(".mole").style.display = "block";
}
function always() {
  setInterval(random, 1000);
}
function timee() {
  let time = 30;
  setInterval(() => {
    time--;
    timeT.textContent = `Time:${time}s`;
    if (time < 0) {
      gg();
      time = 30;
    }
  }, 1000);
}
function gg() {
  console.log("hello");
  mid.style.display = "none";
  head.style.display = "none";
  cong.style.display = "block";
}
startBadf.addEventListener("click", function(){
  time = 30;
  score = 0;
  start(),timee() ,always()
});
}

window.onload = press;
startBadf.addEventListener("click" , press);

// window.onload = start;
