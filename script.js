

// ACT BASED ON USER SELECTION
window.onload = function () {
  document.getElementById("sci").onclick = function () {
    playRound("scissors")
  };
  document.getElementById("roc").onclick = function () {
    playRound("rock")
  };
  document.getElementById("pap").onclick = function () {
    playRound("paper")
  };

};

// CREATE RANDOMIZED COMPUTER CHOICE
function computerPlay() {
  x = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (x === 1) {
    return 'rock';
  }
  else if (x === 2) {
    return 'paper';
  }
  else return 'scissors';
}

// REMOVE SELECTION WITH EACH NEW CHOICE
function clearBoard() {
  var leftColumn = document.getElementById('leftcol')
  leftColumn.removeChild(leftColumn.lastChild)

  var rightColumn = document.getElementById('rightcol')
  rightColumn.removeChild(rightColumn.lastChild)
}

// ACTS BASED ON PLAYER CLICK
var cCount = 0;
var pCount = 0;
function playRound(playerSelection) {

  clearBoard()
  computerSelection = computerPlay();
  var imgP = document.createElement('img');
  var imgC = document.createElement('img');

  // UPLOADS PLAYER AND COMPUTER CHOICE TO SCREEN
  if (playerSelection === 'rock') {
    imgP.src = 'rock.png';
  }
  else if (playerSelection === 'scissors') {
    imgP.src = 'scissors.png'
  }
  else {
    imgP.src = 'paper.png'
  }

  if (computerSelection === 'scissors') {
    imgC.src = 'scissors.png'
  }
  else if (computerSelection === 'paper') {
    imgC.src = 'paper.png'
  }
  else {
    imgC.src = "rock.png"
  }

  // SIZE PICTURES AND ADD TO THE COLUMN
  imgP.width = "150";
  imgC.width = "150";
  document.getElementById('leftcol').appendChild(imgP);
  document.getElementById('rightcol').appendChild(imgC);

// SCORE COUNTER
  if (playerSelection === 'rock' & computerSelection === 'scissors') {
    pCount += 1
  }
  else if (playerSelection === 'scissors' & computerSelection == 'paper') {
    pCount += 1
  }
  else if (playerSelection === 'paper' & computerSelection == 'rock') {
    pCount += 1
  }
  else if (playerSelection == computerSelection) {
    cCount += 0
    pCount += 0
  }
  else{
  cCount += 1
}  
  document.getElementById('you').innerHTML = "You: " + pCount;
  document.getElementById('comp').innerHTML = "Computer: " + cCount;
}