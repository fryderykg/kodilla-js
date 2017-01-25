// exercise 8.12 Rock Paper Scissors Game

// VARIABLES
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    },
    // BUTTONS
    newGameBtn = document.getElementById('js-newGameButton'),
    pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    // BOARD ELEMENTS
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    whoWinElem = document.getElementById('js-whoWin'),
    // SCORE
    playerPointsElem = document.getElementById('js-playerPoints'),
    computerPointsElem = document.getElementById('js-computerPoints'),
    // PLAYER NAME
    playerNameElem = document.getElementById('js-playerName'),
    // DISPLAY PLAYER / COMPUTER CHOICE
    playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    // DISPLAY WHO WIN
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

// DISPLAY OR HIDE GAME ELEMENTS
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        break;
    case 'ended':
        newGameBtn.innerText = 'Play Again';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

// DISPLAY SCORES
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function newGame() {
  player.name = prompt("Type your name:", 'player name');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}

// CHECK WHO WIN
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
    var winnerIs = 'player';

    if (playerPick === computerPick) {
        winnerIs = 'none'; // tie
        playerResultElem.innerHTML = "Tie!";
        computerResultElem.innerHTML = "Tie!";
    } else if (
        (computerPick === 'rock' &&  playerPick === 'scissors') ||
        (computerPick === 'scissors' &&  playerPick === 'paper') ||
        (computerPick === 'paper' &&  playerPick === 'rock') ) {
        winnerIs = 'computer';
    }

    if (winnerIs === 'player') {
        playerResultElem.innerHTML = "Battle win!";
        player.score++;
    } else if (winnerIs === 'computer') {
        computerResultElem.innerHTML = "Battle win!";
        computer.score++;
    }
    // END THE GAME
    if (computer.score >= 10 || player.score >= 10) {
        if (player.score > computer.score){
            whoWinElem.innerHTML = player.name + " win!";
            whoWinElem.className = "success";
        } else {
            whoWinElem.innerHTML = "Computer win!";
            whoWinElem.className = "failure";
        }
        gameState = "ended";
        setGameElements();
    }
    // UPDATE SCORE ON PAGE
    setGamePoints();
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

// EVENT LISTENERS
newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });

// START THE GAME
setGameElements();
