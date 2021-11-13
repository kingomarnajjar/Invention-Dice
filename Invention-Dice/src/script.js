const diceFaces = [
  "https://bit.ly/dice-unknown",
  //MATERIAL - RED 1
  //Plastic
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616437/Material-100_x100-04_dznrm4.png",
  //Edible
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616437/Material-100_x100-05_nze09o.png",
  //Organic
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616437/Material-100_x100-06_lbz6ui.png",
  //Paper
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616437/Material-100_x100-01_nxuwlk.png",
  //Metal
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616436/Material-100_x100-02_tpybpi.png",
  //Wood
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616436/Material-100_x100-03_aom9pj.png",

  //MOTIVE POWER - YELLOW 2
  //Electric
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616450/Motive_Power-100_x_100-04_ebwkeq.png",
  //Manual
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616449/Motive_Power-100_x_100-02_oayuxs.png",
  //Solar
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616449/Motive_Power-100_x_100-06_eauc07.png",
  //Wind
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616449/Motive_Power-100_x_100-01_acbqgj.png",
  //Water
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616449/Motive_Power-100_x_100-03_bwq3qy.png",
  //Clockwork
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616449/Motive_Power-100_x_100-05_zwchd7.png",

  //SCALE - GREEN 3
  //Giant
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616384/Scale-100_x_100-06_iwbwvn.png",
  //Pocket
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616383/Scale-100_x_100-02_kgtog5.png",
  //Mini
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616383/Scale-100_x_100-04_jnqfws.png",
  //Wearable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616383/Scale-100_x_100-03_rdkcdn.png",
  //Inhabitable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616383/Scale-100_x_100-05_mi4kby.png",
  //Portable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616382/Scale-100_x_100-01_xwofbe.png",

  //DEVICE - BLUE 4
  //Art
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616396/Device-100_x_100-01_gp2scy.png",
  //Vehicle
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616397/Device-100_x_100-06_tpee5i.png",
  //Tool
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616397/Device-100_x_100-02_i1hlyf.png",
  //Game
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616396/Device-100_x_100-03_qre686.png",
  //Computer
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616396/Device-100_x_100-05_jfrffx.png",
  //Robot
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616396/Device-100_x_100-04_kiyqbx.png",

  //CONSUMER - ORANGE 5
  //Personal
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616410/Consumer-_100_x_100-04_qtx1mp.png",
  //Home
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616410/Consumer-_100_x_100-03_iq0dy3.png",
  //Public
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616409/Consumer-_100_x_100-02_nm1poh.png",
  //Family
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616409/Consumer-_100_x_100-01_po2icu.png",
  //Office
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616409/Consumer-_100_x_100-05_f0exbj.png",
  //Industrial
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616409/Consumer-_100_x_100-06_lwp6fp.png",

  //ACTION - PINK 6
  //Random
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616365/Action-_100_x_100-03_c3k2uh.png",
  //Flying
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616365/Action-_100_x_100-02_waec4l.png",
  //Stealth
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616365/Action-_100_x_100-05_uqaosl.png",
  //Underwater
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616365/Action-_100_x_100-01_nxnewa.png",
  //Self-Build
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616365/Action-_100_x_100-04_wzrwdg.png",
  //Disposable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1589616365/Action-_100_x_100-06_gqz9ys.png"
];

for (const element of diceFaces) {
}

// Cleans up code later
var image = document.getElementById("dice");
var image2 = document.getElementById("dice2");
var image3 = document.getElementById("dice3");
var image4 = document.getElementById("dice4");
var image5 = document.getElementById("dice5");
var image6 = document.getElementById("dice6");

var audio = document.getElementById("audio");

// Gets a random integer, min & max inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollThatDice() {
  audio.currentTime = 0;
  image.style.animation = "spindice 0.25s";
  image2.style.animation = "spindice 0.25s";
  image3.style.animation = "spindice 0.25s";
  image4.style.animation = "spindice 0.25s";
  image5.style.animation = "spindice 0.25s";
  image6.style.animation = "spindice 0.25s";

  setTimeout(function () {
    image.setAttribute("src", diceFaces[getRandomInt(1, 6)]);
    image2.setAttribute("src", diceFaces[getRandomInt(7, 12)]);
    image3.setAttribute("src", diceFaces[getRandomInt(13, 18)]);
    image4.setAttribute("src", diceFaces[getRandomInt(19, 24)]);
    image5.setAttribute("src", diceFaces[getRandomInt(25, 30)]);
    image6.setAttribute("src", diceFaces[getRandomInt(31, 36)]);
  }, 125);

  setTimeout(function () {
    image.style.animation = "none";
    image2.style.animation = "none";
    image3.style.animation = "none";
    image4.style.animation = "none";
    image5.style.animation = "none";
    image6.style.animation = "none";
  }, 250);
  audio.play();
}

document.addEventListener("DOMContentLoaded", function (event) {
  rollThatDice();
});
