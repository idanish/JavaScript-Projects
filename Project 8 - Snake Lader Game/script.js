// game logics
let box = document.querySelectorAll("box");
let dice = document.querySelectorAll("dice");
let diceId = document.getElementById("dice");
let turn_p1 = true;
let turn_p2 = false;
let turn_p3 = false;
let turn_p4 = false;
let player1 = document.querySelectorAll("player1");
let player2 = document.querySelectorAll("player2");
let player3 = document.querySelectorAll("player3");
let player4 = document.querySelectorAll("player4");
let leftMargin = [-425,-365,-305,-245,-185,-125,-65,5,65,125];
let topMargin = [520,460,400,340,280,220,160,100,40];
let lader = [5, 14, 42, 53, 64, 75];
let snake = [38, 45, 51, 65, 91, 97];
let diceP1 = 0;
let diceP2 = 0;
let diceP3 = 0;
let diceP4 = 0;

let p1tog = document.getElementById("p1tog");
let p2tog = document.getElementById("p2tog");
let p3tog = document.getElementById("p3tog");
let p4tog = document.getElementById("p4tog");

// Game Board
let boxNum = 1;

let incer = 0;
let decer = 0;

function moveTog() {
  if (
    diceP1 == 1 ||
    diceP1 == 21 ||
    diceP1 == 41 ||
    diceP1 == 61 ||
    diceP1 == 81 ||
    diceP1 == 20 ||
    diceP1 == 40 ||
    diceP1 == 60 ||
    diceP1 == 80 ||
    diceP1 == 100
  ) {
    p1tog.style.marginLeft = leftMargin[0] + "px";
  }
  if (
    diceP1 == 2 ||
    diceP1 == 22 ||
    diceP1 == 42 ||
    diceP1 == 62 ||
    diceP1 == 82 ||
    diceP1 == 19 ||
    diceP1 == 39 ||
    diceP1 == 59 ||
    diceP1 == 79 ||
    diceP1 == 99
  ) {
    p1tog.style.marginLeft = leftMargin[1] + "px";
  }
  if (
    diceP1 == 3 ||
    diceP1 == 23 ||
    diceP1 == 43 ||
    diceP1 == 63 ||
    diceP1 == 83 ||
    diceP1 == 18 ||
    diceP1 == 38 ||
    diceP1 == 58 ||
    diceP1 == 78 ||
    diceP1 == 98
  ) {
    p1tog.style.marginLeft = leftMargin[2] + "px";
  }
  if (
    diceP1 == 4 ||
    diceP1 == 24 ||
    diceP1 == 44 ||
    diceP1 == 64 ||
    diceP1 == 84 ||
    diceP1 == 17 ||
    diceP1 == 37 ||
    diceP1 == 57 ||
    diceP1 == 77 ||
    diceP1 == 97
  ) {
    p1tog.style.marginLeft = leftMargin[3] + "px";
  }
  if (
    diceP1 == 5 ||
    diceP1 == 25 ||
    diceP1 == 45 ||
    diceP1 == 65 ||
    diceP1 == 85 ||
    diceP1 == 16 ||
    diceP1 == 36 ||
    diceP1 == 56 ||
    diceP1 == 76 ||
    diceP1 == 96
  ) {
    p1tog.style.marginLeft = leftMargin[4] + "px";
  }
  if (
    diceP1 == 6 ||
    diceP1 == 26 ||
    diceP1 == 46 ||
    diceP1 == 66 ||
    diceP1 == 86 ||
    diceP1 == 15 ||
    diceP1 == 35 ||
    diceP1 == 55 ||
    diceP1 == 75 ||
    diceP1 == 95
  ) {
    p1tog.style.marginLeft = leftMargin[5] + "px";
  }
  if (
    diceP1 == 7 ||
    diceP1 == 27 ||
    diceP1 == 47 ||
    diceP1 == 67 ||
    diceP1 == 87 ||
    diceP1 == 14 ||
    diceP1 == 34 ||
    diceP1 == 54 ||
    diceP1 == 74 ||
    diceP1 == 94
  ) {
    p1tog.style.marginLeft = leftMargin[6] + "px";
  }
  if (
    diceP1 == 8 ||
    diceP1 == 28 ||
    diceP1 == 48 ||
    diceP1 == 68 ||
    diceP1 == 88 ||
    diceP1 == 13 ||
    diceP1 == 33 ||
    diceP1 == 53 ||
    diceP1 == 73 ||
    diceP1 == 93
  ) {
    p1tog.style.marginLeft = leftMargin[7] + "px";
  }
  if (
    diceP1 == 9 ||
    diceP1 == 29 ||
    diceP1 == 49 ||
    diceP1 == 69 ||
    diceP1 == 89 ||
    diceP1 == 12 ||
    diceP1 == 32 ||
    diceP1 == 52 ||
    diceP1 == 72 ||
    diceP1 == 92
  ) {
    p1tog.style.marginLeft = leftMargin[8] + "px";
  }
  if (
    diceP1 == 10 ||
    diceP1 == 30 ||
    diceP1 == 50 ||
    diceP1 == 70 ||
    diceP1 == 80 ||
    diceP1 == 11 ||
    diceP1 == 31 ||
    diceP1 == 51 ||
    diceP1 == 71 ||
    diceP1 == 91
  ) {
    p1tog.style.marginLeft = leftMargin[9] + "px";
  }

  if (diceP1 >= 11) {
    p1tog.style.marginTop = topMargin[0] + "px";
  }
  if (diceP1 >= 21) {
    p1tog.style.marginTop = topMargin[1] + "px";
  }
  if (diceP1 >= 31) {
    p1tog.style.marginTop = topMargin[2] + "px";
  }
  if (diceP1 >= 41) {
    p1tog.style.marginTop = topMargin[3] + "px";
  }
  if (diceP1 >= 51) {
    p1tog.style.marginTop = topMargin[4] + "px";
  }
  if (diceP1 >= 61) {
    p1tog.style.marginTop = topMargin[5] + "px";
  }
  if (diceP1 >= 71) {
    p1tog.style.marginTop = topMargin[6] + "px";
  }
  if (diceP1 >= 81) {
    p1tog.style.marginTop = topMargin[7] + "px";
  }
  if (diceP1 >= 91) {
    p1tog.style.marginTop = topMargin[8] + "px";
  }

  //   dice 2

  if (
    diceP2 == 1 ||
    diceP2 == 21 ||
    diceP2 == 41 ||
    diceP2 == 61 ||
    diceP2 == 81 ||
    diceP2 == 20 ||
    diceP2 == 40 ||
    diceP2 == 60 ||
    diceP2 == 80 ||
    diceP2 == 100
  ) {
    p2tog.style.marginLeft = leftMargin[0] + "px";
  }
  if (
    diceP2 == 2 ||
    diceP2 == 22 ||
    diceP2 == 42 ||
    diceP2 == 62 ||
    diceP2 == 82 ||
    diceP2 == 19 ||
    diceP2 == 39 ||
    diceP2 == 59 ||
    diceP2 == 79 ||
    diceP2 == 99
  ) {
    p2tog.style.marginLeft = leftMargin[1] + "px";
  }
  if (
    diceP2 == 3 ||
    diceP2 == 23 ||
    diceP2 == 43 ||
    diceP2 == 63 ||
    diceP2 == 83 ||
    diceP2 == 18 ||
    diceP2 == 38 ||
    diceP2 == 58 ||
    diceP2 == 78 ||
    diceP2 == 98
  ) {
    p2tog.style.marginLeft = leftMargin[2] + "px";
  }
  if (
    diceP2 == 4 ||
    diceP2 == 24 ||
    diceP2 == 44 ||
    diceP2 == 64 ||
    diceP2 == 84 ||
    diceP2 == 17 ||
    diceP2 == 37 ||
    diceP2 == 57 ||
    diceP2 == 77 ||
    diceP2 == 97
  ) {
    p2tog.style.marginLeft = leftMargin[3] + "px";
  }
  if (
    diceP2 == 5 ||
    diceP2 == 25 ||
    diceP2 == 45 ||
    diceP2 == 65 ||
    diceP2 == 85 ||
    diceP2 == 16 ||
    diceP2 == 36 ||
    diceP2 == 56 ||
    diceP2 == 76 ||
    diceP2 == 96
  ) {
    p2tog.style.marginLeft = leftMargin[4] + "px";
  }
  if (
    diceP2 == 6 ||
    diceP2 == 26 ||
    diceP2 == 46 ||
    diceP2 == 66 ||
    diceP2 == 86 ||
    diceP2 == 15 ||
    diceP2 == 35 ||
    diceP2 == 55 ||
    diceP2 == 75 ||
    diceP2 == 95
  ) {
    p2tog.style.marginLeft = leftMargin[5] + "px";
  }
  if (
    diceP2 == 7 ||
    diceP2 == 27 ||
    diceP2 == 47 ||
    diceP2 == 67 ||
    diceP2 == 87 ||
    diceP2 == 14 ||
    diceP2 == 34 ||
    diceP2 == 54 ||
    diceP2 == 74 ||
    diceP2 == 94
  ) {
    p2tog.style.marginLeft = leftMargin[6] + "px";
  }
  if (
    diceP2 == 8 ||
    diceP2 == 28 ||
    diceP2 == 48 ||
    diceP2 == 68 ||
    diceP2 == 88 ||
    diceP2 == 13 ||
    diceP2 == 33 ||
    diceP2 == 53 ||
    diceP2 == 73 ||
    diceP2 == 93
  ) {
    p2tog.style.marginLeft = leftMargin[7] + "px";
  }
  if (
    diceP2 == 9 ||
    diceP2 == 29 ||
    diceP2 == 49 ||
    diceP2 == 69 ||
    diceP2 == 89 ||
    diceP2 == 12 ||
    diceP2 == 32 ||
    diceP2 == 52 ||
    diceP2 == 72 ||
    diceP2 == 92
  ) {
    p2tog.style.marginLeft = leftMargin[8] + "px";
  }
  if (
    diceP2 == 10 ||
    diceP2 == 30 ||
    diceP2 == 50 ||
    diceP2 == 70 ||
    diceP2 == 80 ||
    diceP2 == 11 ||
    diceP2 == 31 ||
    diceP2 == 51 ||
    diceP2 == 71 ||
    diceP2 == 91
  ) {
    p2tog.style.marginLeft = leftMargin[9] + "px";
  }

  if (diceP2 >= 11) {
    p2tog.style.marginTop = topMargin[0] + "px";
  }
  if (diceP2 >= 21) {
    p2tog.style.marginTop = topMargin[1] + "px";
  }
  if (diceP2 >= 31) {
    p2tog.style.marginTop = topMargin[2] + "px";
  }
  if (diceP2 >= 41) {
    p2tog.style.marginTop = topMargin[3] + "px";
  }
  if (diceP2 >= 51) {
    p2tog.style.marginTop = topMargin[4] + "px";
  }
  if (diceP2 >= 61) {
    p2tog.style.marginTop = topMargin[5] + "px";
  }
  if (diceP2 >= 71) {
    p2tog.style.marginTop = topMargin[6] + "px";
  }
  if (diceP2 >= 81) {
    p2tog.style.marginTop = topMargin[7] + "px";
  }
  if (diceP2 >= 91) {
    p2tog.style.marginTop = topMargin[8] + "px";
  }

  //   dice 3

  if (
    diceP3 == 1 ||
    diceP3 == 21 ||
    diceP3 == 41 ||
    diceP3 == 61 ||
    diceP3 == 81 ||
    diceP3 == 20 ||
    diceP3 == 40 ||
    diceP3 == 60 ||
    diceP3 == 80 ||
    diceP3 == 100
  ) {
    p3tog.style.marginLeft = leftMargin[0] + "px";
  }
  if (
    diceP3 == 2 ||
    diceP3 == 22 ||
    diceP3 == 42 ||
    diceP3 == 62 ||
    diceP3 == 82 ||
    diceP3 == 19 ||
    diceP3 == 39 ||
    diceP3 == 59 ||
    diceP3 == 79 ||
    diceP3 == 99
  ) {
    p3tog.style.marginLeft = leftMargin[1] + "px";
  }
  if (
    diceP3 == 3 ||
    diceP3 == 23 ||
    diceP3 == 43 ||
    diceP3 == 63 ||
    diceP3 == 83 ||
    diceP3 == 18 ||
    diceP3 == 38 ||
    diceP3 == 58 ||
    diceP3 == 78 ||
    diceP3 == 98
  ) {
    p3tog.style.marginLeft = leftMargin[2] + "px";
  }
  if (
    diceP3 == 4 ||
    diceP3 == 24 ||
    diceP3 == 44 ||
    diceP3 == 64 ||
    diceP3 == 84 ||
    diceP3 == 17 ||
    diceP3 == 37 ||
    diceP3 == 57 ||
    diceP3 == 77 ||
    diceP3 == 97
  ) {
    p3tog.style.marginLeft = leftMargin[3] + "px";
  }
  if (
    diceP3 == 5 ||
    diceP3 == 25 ||
    diceP3 == 45 ||
    diceP3 == 65 ||
    diceP3 == 85 ||
    diceP3 == 16 ||
    diceP3 == 36 ||
    diceP3 == 56 ||
    diceP3 == 76 ||
    diceP3 == 96
  ) {
    p3tog.style.marginLeft = leftMargin[4] + "px";
  }
  if (
    diceP3 == 6 ||
    diceP3 == 26 ||
    diceP3 == 46 ||
    diceP3 == 66 ||
    diceP3 == 86 ||
    diceP3 == 15 ||
    diceP3 == 35 ||
    diceP3 == 55 ||
    diceP3 == 75 ||
    diceP3 == 95
  ) {
    p3tog.style.marginLeft = leftMargin[5] + "px";
  }
  if (
    diceP3 == 7 ||
    diceP3 == 27 ||
    diceP3 == 47 ||
    diceP3 == 67 ||
    diceP3 == 87 ||
    diceP3 == 14 ||
    diceP3 == 34 ||
    diceP3 == 54 ||
    diceP3 == 74 ||
    diceP3 == 94
  ) {
    p3tog.style.marginLeft = leftMargin[6] + "px";
  }
  if (
    diceP3 == 8 ||
    diceP3 == 28 ||
    diceP3 == 48 ||
    diceP3 == 68 ||
    diceP3 == 88 ||
    diceP3 == 13 ||
    diceP3 == 33 ||
    diceP3 == 53 ||
    diceP3 == 73 ||
    diceP3 == 93
  ) {
    p3tog.style.marginLeft = leftMargin[7] + "px";
  }
  if (
    diceP3 == 9 ||
    diceP3 == 29 ||
    diceP3 == 49 ||
    diceP3 == 69 ||
    diceP3 == 89 ||
    diceP3 == 12 ||
    diceP3 == 32 ||
    diceP3 == 52 ||
    diceP3 == 72 ||
    diceP3 == 92
  ) {
    p3tog.style.marginLeft = leftMargin[8] + "px";
  }
  if (
    diceP3 == 10 ||
    diceP3 == 30 ||
    diceP3 == 50 ||
    diceP3 == 70 ||
    diceP3 == 80 ||
    diceP3 == 11 ||
    diceP3 == 31 ||
    diceP3 == 51 ||
    diceP3 == 71 ||
    diceP3 == 91
  ) {
    p3tog.style.marginLeft = leftMargin[9] + "px";
  }

  if (diceP3 >= 11) {
    p3tog.style.marginTop = topMargin[0] + "px";
  }
  if (diceP3 >= 21) {
    p3tog.style.marginTop = topMargin[1] + "px";
  }
  if (diceP3 >= 31) {
    p3tog.style.marginTop = topMargin[2] + "px";
  }
  if (diceP3 >= 41) {
    p3tog.style.marginTop = topMargin[3] + "px";
  }
  if (diceP3 >= 51) {
    p3tog.style.marginTop = topMargin[4] + "px";
  }
  if (diceP3 >= 61) {
    p3tog.style.marginTop = topMargin[5] + "px";
  }
  if (diceP3 >= 71) {
    p3tog.style.marginTop = topMargin[6] + "px";
  }
  if (diceP3 >= 81) {
    p3tog.style.marginTop = topMargin[7] + "px";
  }
  if (diceP3 >= 91) {
    p3tog.style.marginTop = topMargin[8] + "px";
  }

  //   dice 4

  if (
    diceP4 == 1 ||
    diceP4 == 21 ||
    diceP4 == 41 ||
    diceP4 == 61 ||
    diceP4 == 81 ||
    diceP4 == 20 ||
    diceP4 == 40 ||
    diceP4 == 60 ||
    diceP4 == 80 ||
    diceP4 == 100
  ) {
    p4tog.style.marginLeft = leftMargin[0] + "px";
  }
  if (
    diceP4 == 2 ||
    diceP4 == 22 ||
    diceP4 == 42 ||
    diceP4 == 62 ||
    diceP4 == 82 ||
    diceP4 == 19 ||
    diceP4 == 39 ||
    diceP4 == 59 ||
    diceP4 == 79 ||
    diceP4 == 99
  ) {
    p4tog.style.marginLeft = leftMargin[1] + "px";
  }
  if (
    diceP4 == 3 ||
    diceP4 == 23 ||
    diceP4 == 43 ||
    diceP4 == 63 ||
    diceP4 == 83 ||
    diceP4 == 18 ||
    diceP4 == 38 ||
    diceP4 == 58 ||
    diceP4 == 78 ||
    diceP4 == 98
  ) {
    p4tog.style.marginLeft = leftMargin[2] + "px";
  }
  if (
    diceP4 == 4 ||
    diceP4 == 24 ||
    diceP4 == 44 ||
    diceP4 == 64 ||
    diceP4 == 84 ||
    diceP4 == 17 ||
    diceP4 == 37 ||
    diceP4 == 57 ||
    diceP4 == 77 ||
    diceP4 == 97
  ) {
    p4tog.style.marginLeft = leftMargin[3] + "px";
  }
  if (
    diceP4 == 5 ||
    diceP4 == 25 ||
    diceP4 == 45 ||
    diceP4 == 65 ||
    diceP4 == 85 ||
    diceP4 == 16 ||
    diceP4 == 36 ||
    diceP4 == 56 ||
    diceP4 == 76 ||
    diceP4 == 96
  ) {
    p4tog.style.marginLeft = leftMargin[4] + "px";
  }
  if (
    diceP4 == 6 ||
    diceP4 == 26 ||
    diceP4 == 46 ||
    diceP4 == 66 ||
    diceP4 == 86 ||
    diceP4 == 15 ||
    diceP4 == 35 ||
    diceP4 == 55 ||
    diceP4 == 75 ||
    diceP4 == 95
  ) {
    p4tog.style.marginLeft = leftMargin[5] + "px";
  }
  if (
    diceP4 == 7 ||
    diceP4 == 27 ||
    diceP4 == 47 ||
    diceP4 == 67 ||
    diceP4 == 87 ||
    diceP4 == 14 ||
    diceP4 == 34 ||
    diceP4 == 54 ||
    diceP4 == 74 ||
    diceP4 == 94
  ) {
    p4tog.style.marginLeft = leftMargin[6] + "px";
  }
  if (
    diceP4 == 8 ||
    diceP4 == 28 ||
    diceP4 == 48 ||
    diceP4 == 68 ||
    diceP4 == 88 ||
    diceP4 == 13 ||
    diceP4 == 33 ||
    diceP4 == 53 ||
    diceP4 == 73 ||
    diceP4 == 93
  ) {
    p4tog.style.marginLeft = leftMargin[7] + "px";
  }
  if (
    diceP4 == 9 ||
    diceP4 == 29 ||
    diceP4 == 49 ||
    diceP4 == 69 ||
    diceP4 == 89 ||
    diceP4 == 12 ||
    diceP4 == 32 ||
    diceP4 == 52 ||
    diceP4 == 72 ||
    diceP4 == 92
  ) {
    p4tog.style.marginLeft = leftMargin[8] + "px";
  }
  if (
    diceP4 == 10 ||
    diceP4 == 30 ||
    diceP4 == 50 ||
    diceP4 == 70 ||
    diceP4 == 80 ||
    diceP4 == 11 ||
    diceP4 == 31 ||
    diceP4 == 51 ||
    diceP4 == 71 ||
    diceP4 == 91
  ) {
    p4tog.style.marginLeft = leftMargin[9] + "px";
  }

  if (diceP4 >= 11) {
    p4tog.style.marginTop = topMargin[0] + "px";
  }
  if (diceP4 >= 21) {
    p4tog.style.marginTop = topMargin[1] + "px";
  }
  if (diceP4 >= 31) {
    p4tog.style.marginTop = topMargin[2] + "px";
  }
  if (diceP4 >= 41) {
    p4tog.style.marginTop = topMargin[3] + "px";
  }
  if (diceP4 >= 51) {
    p4tog.style.marginTop = topMargin[4] + "px";
  }
  if (diceP4 >= 61) {
    p4tog.style.marginTop = topMargin[5] + "px";
  }
  if (diceP4 >= 71) {
    p4tog.style.marginTop = topMargin[6] + "px";
  }
  if (diceP4 >= 81) {
    p4tog.style.marginTop = topMargin[7] + "px";
  }
  if (diceP4 >= 91) {
    p4tog.style.marginTop = topMargin[8] + "px";
  }
}

// game

function diceNum() {
  let dicetext = (diceId.innerHTML = Math.floor(Math.random() * 6 + 1));

  if (turn_p1) {
    diceP1 = diceP1 + dicetext;

    function snakeLogic() {
      //logics for snake
      if (diceP1 === snake[0]) {
        diceP1 = diceP1 - 18;
        console.log(diceP1, "Snake Bite - 18");
      }
      if (diceP1 === snake[1]) {
        diceP1 = diceP1 - 38;
        console.log(diceP1, "Snake Bite - 38");
      }

      if (diceP1 === snake[2]) {
        diceP1 = diceP1 - 41;
        console.log(diceP1, "Snake Bite - 41");
      }

      if (diceP1 === snake[3]) {
        diceP1 = diceP1 - 11;
        console.log(diceP1, "Snake Bite - 11");
      }

      if (diceP1 === snake[4]) {
        diceP1 = diceP1 - 18;
        console.log(diceP1, "Snake Bite - 18");
      }

      if (diceP1 === snake[5]) {
        diceP1 = diceP1 - 36;
        console.log(diceP1, "Snake Bite - 36");
      }
    }

    function laderLogic() {
      // logics for lader
      if (diceP1 === lader[0]) {
        diceP1 = diceP1 + 53;
        console.log(diceP1, "Lader Climb + 53");
      }
      if (diceP1 === lader[1]) {
        diceP1 = diceP1 + 35;
        console.log(diceP1, "Lader Climb + 35");
      }
      if (diceP1 === lader[2]) {
        diceP1 = diceP1 + 18;
        console.log(diceP1, "Lader Climb + 18");
      }
      if (diceP1 === lader[3]) {
        diceP1 = diceP1 + 19;
        console.log(diceP1, "Lader Climb + 19");
      }
      if (diceP1 === lader[4]) {
        diceP1 = diceP1 + 19;
        console.log(diceP1, "Lader Climb + 19");
      }
      if (diceP1 === lader[5]) {
        diceP1 = diceP1 + 19;
        console.log(diceP1, "Lader Climb + 19");
      }

      if (diceP1 > 99) {
        diceP1 = 99;
      }
      if (diceP1 == 99 && dicetext == 1) {
        diceP1 = 100;
        console.log(dicetext);
      }
    }

    snakeLogic();
    laderLogic();

    document.getElementById("scoreP1").innerHTML = dicetext + " Score: " +diceP1;
    document.getElementById("scoreP1").classList.add("red");
    document.getElementById("scoreP4").classList.remove("red");
    moveTog();

    turn_p1 = false;
    turn_p2 = true;
    turn_p3 = false;
    turn_p4 = false;
  } else if (turn_p2) {
    diceP2 = diceP2 + dicetext;
    function snakeLogic() {
      //logics for snake
      if (diceP2 === snake[0]) {
        diceP2 = diceP2 - 18;
        console.log(diceP2, "Snake Bite - 18");
      }
      if (diceP2 === snake[1]) {
        diceP2 = diceP2 - 38;
        console.log(diceP2, "Snake Bite - 38");
      }

      if (diceP2 === snake[2]) {
        diceP2 = diceP2 - 41;
        console.log(diceP2, "Snake Bite - 41");
      }

      if (diceP2 === snake[3]) {
        diceP2 = diceP2 - 11;
        console.log(diceP2, "Snake Bite - 11");
      }

      if (diceP2 === snake[4]) {
        diceP2 = diceP2 - 18;
        console.log(diceP2, "Snake Bite - 18");
      }

      if (diceP2 === snake[5]) {
        diceP2 = diceP2 - 36;
        console.log(diceP2, "Snake Bite - 36");
      }
    }

    function laderLogic() {
      // logics for lader
      if (diceP2 === lader[0]) {
        diceP2 = diceP2 + 53;
        console.log(diceP2, "Lader Climb + 53");
      }
      if (diceP2 === lader[1]) {
        diceP2 = diceP2 + 35;
        console.log(diceP2, "Lader Climb + 35");
      }
      if (diceP2 === lader[2]) {
        diceP2 = diceP2 + 18;
        console.log(diceP2, "Lader Climb + 18");
      }
      if (diceP2 === lader[3]) {
        diceP2 = diceP2 + 19;
        console.log(diceP2, "Lader Climb + 19");
      }
      if (diceP2 === lader[4]) {
        diceP2 = diceP2 + 19;
        console.log(diceP2, "Lader Climb + 19");
      }
      if (diceP2 === lader[5]) {
        diceP2 = diceP2 + 19;
        console.log(diceP2, "Lader Climb + 19");
      }

      if (diceP2 > 99) {
        diceP2 = 99;
      }
      if (diceP2 == 99 && dicetext == 1) {
        diceP2 = 100;
        console.log(dicetext);
      }
    }

    snakeLogic();
    laderLogic();
    document.getElementById("scoreP2").innerHTML = dicetext + " Score: " +diceP2;
    document.getElementById("scoreP2").classList.add("red");
    document.getElementById("scoreP1").classList.remove("red");
    moveTog();
    turn_p1 = false;
    turn_p2 = false;
    turn_p3 = true;
    turn_p4 = false;
  } else if (turn_p3) {
    diceP3 = diceP3 + dicetext;
    function snakeLogic() {
      //logics for snake
      if (diceP3 === snake[0]) {
        diceP3 = diceP3 - 18;
        console.log(diceP3, "Snake Bite - 18");
      }
      if (diceP3 === snake[1]) {
        diceP3 = diceP3 - 38;
        console.log(diceP3, "Snake Bite - 38");
      }

      if (diceP3 === snake[2]) {
        diceP3 = diceP3 - 41;
        console.log(diceP3, "Snake Bite - 41");
      }

      if (diceP3 === snake[3]) {
        diceP3 = diceP3 - 11;
        console.log(diceP3, "Snake Bite - 11");
      }

      if (diceP3 === snake[4]) {
        diceP3 = diceP3 - 18;
        console.log(diceP3, "Snake Bite - 18");
      }

      if (diceP3 === snake[5]) {
        diceP3 = diceP3 - 36;
        console.log(diceP3, "Snake Bite - 36");
      }
    }

    function laderLogic() {
      // logics for lader
      if (diceP3 === lader[0]) {
        diceP3 = diceP3 + 53;
        console.log(diceP3, "Lader Climb + 53");
      }
      if (diceP3 === lader[1]) {
        diceP3 = diceP3 + 35;
        console.log(diceP3, "Lader Climb + 35");
      }
      if (diceP3 === lader[2]) {
        diceP3 = diceP3 + 18;
        console.log(diceP3, "Lader Climb + 18");
      }
      if (diceP3 === lader[3]) {
        diceP3 = diceP3 + 19;
        console.log(diceP3, "Lader Climb + 19");
      }
      if (diceP3 === lader[4]) {
        diceP3 = diceP3 + 19;
        console.log(diceP3, "Lader Climb + 19");
      }
      if (diceP3 === lader[5]) {
        diceP3 = diceP3 + 19;
        console.log(diceP3, "Lader Climb + 19");
      }

      if (diceP3 > 99) {
        diceP3 = 99;
      }
      if (diceP3 == 99 && dicetext == 1) {
        diceP3 = 100;
        console.log(dicetext);
      }
    }

    snakeLogic();
    laderLogic();
    document.getElementById("scoreP3").innerHTML = dicetext + " Score: " +diceP3;
    document.getElementById("scoreP3").classList.add("red");
    document.getElementById("scoreP2").classList.remove("red");
    moveTog();
    turn_p1 = false;
    turn_p2 = false;
    turn_p3 = false;
    turn_p4 = true;
  } else if (turn_p4) {
    diceP4 = diceP4 + dicetext;
    function snakeLogic() {
      //logics for snake
      if (diceP4 === snake[0]) {
        diceP4 = diceP4 - 18;
        console.log(diceP4, "Snake Bite - 18");
      }
      if (diceP4 === snake[1]) {
        diceP4 = diceP4 - 38;
        console.log(diceP4, "Snake Bite - 38");
      }

      if (diceP4 === snake[2]) {
        diceP4 = diceP4 - 41;
        console.log(diceP4, "Snake Bite - 41");
      }

      if (diceP4 === snake[3]) {
        diceP4 = diceP4 - 11;
        console.log(diceP4, "Snake Bite - 11");
      }

      if (diceP4 === snake[4]) {
        diceP4 = diceP4 - 18;
        console.log(diceP4, "Snake Bite - 18");
      }

      if (diceP4 === snake[5]) {
        diceP4 = diceP4 - 36;
        console.log(diceP4, "Snake Bite - 36");
      }
    }

    function laderLogic() {
      // logics for lader
      if (diceP4 === lader[0]) {
        diceP4 = diceP4 + 53;
        console.log(diceP4, "Lader Climb + 53");
      }
      if (diceP4 === lader[1]) {
        diceP4 = diceP4 + 35;
        console.log(diceP4, "Lader Climb + 35");
      }
      if (diceP4 === lader[2]) {
        diceP4 = diceP4 + 18;
        console.log(diceP4, "Lader Climb + 18");
      }
      if (diceP4 === lader[3]) {
        diceP4 = diceP4 + 19;
        console.log(diceP4, "Lader Climb + 19");
      }
      if (diceP4 === lader[4]) {
        diceP4 = diceP4 + 19;
        console.log(diceP4, "Lader Climb + 19");
      }
      if (diceP4 === lader[5]) {
        diceP4 = diceP4 + 19;
        console.log(diceP4, "Lader Climb + 19");
      }

      if (diceP4 > 99) {
        diceP4 = 99;
      }
      if (diceP4 == 99 && dicetext == 1) {
        diceP4 = 100;
        console.log(dicetext);
      }
    }

    snakeLogic();
    laderLogic();
    document.getElementById("scoreP4").innerHTML = dicetext + " Score: " +diceP4;
    document.getElementById("scoreP4").classList.add("red");
    document.getElementById("scoreP3").classList.remove("red");
    moveTog();
    turn_p1 = true;
    turn_p2 = false;
    turn_p3 = false;
    turn_p4 = false;
  }

  if (diceP1 >= 100) {
    diceP1 = 100;
    p1tog.style.marginLeft = leftMargin[0] + "px";
    p1tog.style.marginTop = topMargin[8] + "px";
    console.log("Game Won by Player 1");
    document.getElementById("msg").innerText = "Won by Player 1";
    document.getElementById("dice").style.display = "none";
    turn_p1 = false;
    turn_p2 = false;
    turn_p3 = false;
    turn_p4 = false;
    document.getElementById("reset").style.display = "block";
  }
  if (diceP2 >= 100) {
    diceP2 = 100;
    p2tog.style.marginLeft = leftMargin[0] + "px";
    p2tog.style.marginTop = topMargin[8] + "px";
    console.log("Game Won by Player 2");
    document.getElementById("msg").innerText = "Won by Player 2";
    document.getElementById("dice").style.display = "none";
    turn_p1 = false;
    turn_p2 = false;
    turn_p3 = false;
    turn_p4 = false;
    document.getElementById("reset").style.display = "block";
  }
  if (diceP3 >= 100) {
    diceP3 = 100;
    p3tog.style.marginLeft = leftMargin[0] + "px";
    p3tog.style.marginTop = topMargin[8] + "px";
    console.log("Game Won by Player 3");
    document.getElementById("msg").innerText = "Won by Player 3";
    document.getElementById("dice").style.display = "none";
    turn_p1 = false;
    turn_p2 = false;
    turn_p3 = false;
    turn_p4 = false;
    document.getElementById("reset").style.display = "block";
  }
  if (diceP4 >= 100) {
    diceP4 = 100;
    p4tog.style.marginLeft = leftMargin[0] + "px";
    p4tog.style.marginTop = topMargin[8] + "px";
    console.log("Game Won by Player 4");
    document.getElementById("msg").innerText = "Won by Player 4";
    document.getElementById("dice").style.display = "none";
    turn_p1 = false;
    turn_p2 = false;
    turn_p3 = false;
    turn_p4 = false;
    document.getElementById("reset").style.display = "block";
  }
}

function start() {
  dicetext = 0;
  diceP1 = 0;
  diceP2 = 0;
  diceP3 = 0;
  diceP4 = 0;

  p1tog.style.marginTop = 540 + "px";
  p2tog.style.marginTop = 540 + "px";
  p3tog.style.marginTop = 570 + "px";
  p4tog.style.marginTop = 570 + "px";
  p1tog.style.marginLeft = -485 + "px";
  p2tog.style.marginLeft = -525 + "px";
  p3tog.style.marginLeft = -485 + "px";
  p4tog.style.marginLeft = -525 + "px";
  document.getElementById("scoreP1").innerHTML = "";
  document.getElementById("scoreP2").innerHTML = "";
  document.getElementById("scoreP3").innerHTML = "";
  document.getElementById("scoreP4").innerHTML = "";
  turn_p1 = true;
  document.getElementById("dice").style.display = "block";
  document.getElementById("msg").innerText = "";
  // document.getElementById("reset").style.display = "none";
}
