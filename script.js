const diceFaces = [
  "https://bit.ly/dice-unknown",
  //MATERIAL - GREEN 1
  //Plastic
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590748/Dice%20Faces%20on%20Online%20Invention%20Game/1%20Material/Material-100_x100-04_otlqe0.png",
  //Edible
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590750/Dice%20Faces%20on%20Online%20Invention%20Game/1%20Material/Material-100_x100-05_zvsk8t.png",
  //Organic
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590748/Dice%20Faces%20on%20Online%20Invention%20Game/1%20Material/Material-100_x100-06_jtuynm.png",
  //Paper
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590749/Dice%20Faces%20on%20Online%20Invention%20Game/1%20Material/Material-100_x100-01_lgpdpl.png",
  //Metal
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590748/Dice%20Faces%20on%20Online%20Invention%20Game/1%20Material/Material-100_x100-02_h97ipn.png",
  //Wood
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590749/Dice%20Faces%20on%20Online%20Invention%20Game/1%20Material/Material-100_x100-03_f6w9bu.png",

  //MOTIVE POWER - YELLOW 2
  //Electric
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590776/Dice%20Faces%20on%20Online%20Invention%20Game/2%20Motive%20Power/Motive_Power-100_x_100-04_rvcd3o.png",
  //Manual
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590758/Dice%20Faces%20on%20Online%20Invention%20Game/2%20Motive%20Power/Motive_Power-100_x_100-02_muxmmd.png",
  //Solar
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590754/Dice%20Faces%20on%20Online%20Invention%20Game/2%20Motive%20Power/Motive_Power-100_x_100-06_kw9prf.png",
  //Wind
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590758/Dice%20Faces%20on%20Online%20Invention%20Game/2%20Motive%20Power/Motive_Power-100_x_100-01_kybgt6.png",
  //Water
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590758/Dice%20Faces%20on%20Online%20Invention%20Game/2%20Motive%20Power/Motive_Power-100_x_100-03_ssx7bc.png",
  //Clockwork
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590768/Dice%20Faces%20on%20Online%20Invention%20Game/2%20Motive%20Power/Motive_Power-100_x_100-05_y76gqv.png",

  //SCALE - BLUE 3
  //Giant
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590753/Dice%20Faces%20on%20Online%20Invention%20Game/3%20Scale/Scale-100_x_100-06_fmp9rj.png",
  //Pocket
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590755/Dice%20Faces%20on%20Online%20Invention%20Game/3%20Scale/Scale-100_x_100-02_xntwax.png",
  //Mini
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590767/Dice%20Faces%20on%20Online%20Invention%20Game/3%20Scale/Scale-100_x_100-04_fsbfd0.png",
  //Wearable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590754/Dice%20Faces%20on%20Online%20Invention%20Game/3%20Scale/Scale-100_x_100-03_y2yxco.png",
  //Inhabitable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590756/Dice%20Faces%20on%20Online%20Invention%20Game/3%20Scale/Scale-100_x_100-05_s4vjxo.png",
  //Portable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590752/Dice%20Faces%20on%20Online%20Invention%20Game/3%20Scale/Scale-100_x_100-01_ofdxfv.png",

  //DEVICE - PURPLE 4
  //Art
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590766/Dice%20Faces%20on%20Online%20Invention%20Game/4%20Device/Device-100_x_100-01_bvtfug.png",
  //Vehicle
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590763/Dice%20Faces%20on%20Online%20Invention%20Game/4%20Device/Device-100_x_100-06_l8rvl2.png",
  //Tool
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590765/Dice%20Faces%20on%20Online%20Invention%20Game/4%20Device/Device-100_x_100-02_r45kvh.png",
  //Game
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590766/Dice%20Faces%20on%20Online%20Invention%20Game/4%20Device/Device-100_x_100-03_acgh4f.png",
  //Computer
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590761/Dice%20Faces%20on%20Online%20Invention%20Game/4%20Device/Device-100_x_100-05_u3tecx.png",
  //Robot
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590763/Dice%20Faces%20on%20Online%20Invention%20Game/4%20Device/Device-100_x_100-04_jsaipy.png",

  //CONSUMER - ORANGE 5
  //Personal
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590751/Dice%20Faces%20on%20Online%20Invention%20Game/5%20Consumer/Consumer-_100_x_100-04_pviz0q.png",
  //Home
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590751/Dice%20Faces%20on%20Online%20Invention%20Game/5%20Consumer/Consumer-_100_x_100-03_t52wbx.png",
  //Public
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590752/Dice%20Faces%20on%20Online%20Invention%20Game/5%20Consumer/Consumer-_100_x_100-02_g3abxk.png",
  //Family
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590754/Dice%20Faces%20on%20Online%20Invention%20Game/5%20Consumer/Consumer-_100_x_100-01_y81hzn.png",
  //Office
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590751/Dice%20Faces%20on%20Online%20Invention%20Game/5%20Consumer/Consumer-_100_x_100-05_gqx2is.png",
  //Industrial
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590751/Dice%20Faces%20on%20Online%20Invention%20Game/5%20Consumer/Consumer-_100_x_100-06_sedev8.png",

  //ACTION - PINK 6
  //Random
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590770/Dice%20Faces%20on%20Online%20Invention%20Game/6%20Action/Action-_100_x_100-03_fntt11.png",
  //Flying
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590768/Dice%20Faces%20on%20Online%20Invention%20Game/6%20Action/Action-_100_x_100-02_fuzldi.png",
  //Stealth
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590769/Dice%20Faces%20on%20Online%20Invention%20Game/6%20Action/Action-_100_x_100-05_qthdns.png",
  //Underwater
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590768/Dice%20Faces%20on%20Online%20Invention%20Game/6%20Action/Action-_100_x_100-01_cnhils.png",
  //Self-Build
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590770/Dice%20Faces%20on%20Online%20Invention%20Game/6%20Action/Action-_100_x_100-04_yqd2jy.png",
  //Disposable
  "https://res.cloudinary.com/dmnr5acns/image/upload/v1590590768/Dice%20Faces%20on%20Online%20Invention%20Game/6%20Action/Action-_100_x_100-06_lshxob.png"

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