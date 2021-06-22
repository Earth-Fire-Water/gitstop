'use strict'


// global variables
  //leaderboard array
  let leaderboardArray = [];
  let player = [];
  let computerScore = 0;
  let message = 'Choose your element to play!';
  let p2=document.createElement('p');
  p2.id = 'text-box';
  let defaultLeaderboard = ['Bill Murray', 'Madonna', 'Dennis Rodman', 'Rocket Racoon', 'Michael Jackson\'s Ghost', 'Luigi', 'Steve Jobs', 'Tom Brady', 'Sir Mix-a-lot', 'Cutting Board'];
  let defaultScores = [10, 9, 8, 7, 7, 6, 4, 3, 3, 1];
  for (let i = 0; i < defaultLeaderboard.length; i++){
    new CreatePlayer(defaultLeaderboard[i], defaultScores[i]);
  }
  if (localStorage.getItem('leaderboard')===null){
    addToLocalStorage('leaderboard', leaderboardArray);
  };
  
// foothold into DOM
let startGame = document.querySelector('button');

// construction functions
  // user construstor has propertioes of name and score
    //user score property
    //user name property
function CreatePlayer (name,score) {
  this.name = name;
  this.score = score;
  this.choiceValue = 1;

  leaderboardArray.push(this);
}

// methods and other functions
  // game function
function Game (e) {
  e.preventDefault();
  
  console.log('gameStarts');
  // at the start of function it will create a new user
  // Event handle to get username from form
  let formInput = document.querySelector('input');

  if (player.length < 1){
    let playerName = formInput.value;
    let newPlayer = new CreatePlayer (playerName,0);
    player.push(newPlayer);
  }
  else {
    let playerName = player[0].name;
    player[0].score = 0;
    computerScore = 0;
  }
  
  clearSection();
  renderGame();
}

function clearSection(){
  let section=document.querySelector('section');
  section.innerHTML="";
}

function renderGame(){
  let section=document.querySelector('section');
  let userScore=document.createElement('h3');
  userScore.id = 'userscore';
  let computerScoreh3=document.createElement('h3');
  computerScoreh3.id = 'computerscore';
  let p1=document.createElement('p');
  p2.textContent = message;

  section.appendChild(userScore);
  section.appendChild(computerScoreh3);
  section.appendChild(p1);
  section.appendChild(p2);

  renderImg('./img/earth.jpeg', 'earth');
  renderImg('./img/fire.jpeg', 'fire');
  renderImg('./img/water.jpeg', 'water');
  addElementId();
  userScore.textContent=player[0].score;
  computerScoreh3.textContent= `${computerScore}`;
}


function calcDifference(a,b){
  return a - b;
}

function renderImg(file, imgId){
  let section = document.querySelector('section');
  let img = document.createElement('img');
  img.src = file;
  img.id = imgId;
 
  
  section.appendChild(img);
}
  //replay button
function handleElementChoice(e){
  clearSection();
  //renderGame();
  let element = e.target.id;
  console.log(element);
  switch(e.target.id){
    case 'earth':
      player[0].choiceValue = 1;
      break;
    case 'fire':
      player[0].choiceValue = 2;
      break;
    case 'water':
      player[0].choiceValue = 3;
      break;
  }

  switch(calcDifference(player[0].choiceValue, calculateComputerChoice())){
    
    // user wins
    case 1:
    case -2:
      message = "You won this round!";
      player[0].score++;
      break;
      // tie
    case 0:
      message = 'Draw! Choose again';
      break;
      // computer wins
    case -1:
    case 2:
      message = "You lost that round!";
       computerScore++;
      break;
    default:
      console.log('There is an error with the scores');
  }
  renderGame();
  if((player[0].score>9) || (computerScore>9)){
    // run finished game function
    clearSection();
    finishedGame();
    console.log('You finished game! Did you make leaderboard?');
  }
}

function handleElementHover(e){
  let element = e.target.id;
  let section = document.querySelector('section');

  if(element === 'fire'){
    section.style.boxShadow = 'inset 20px 20px 8px #BA3B46, inset -20px -20px 8px #BA3B46';
  }
  if(element === 'water'){
    section.style.boxShadow = 'inset 20px 20px 8px #61C9A8, inset -20px -20px 8px #61C9A8';
  }
  if(element === 'earth'){
    section.style.boxShadow = 'inset 20px 20px 8px #f7a242, inset -20px -20px 8px #f7a242';
  }
  if (e.target === section){
    section.style.boxShadow = 'inset 20px 20px 8px #61C9A8, inset -20px -20px 8px #f7a242';
  }
}
function calculateComputerChoice() {
  return Math.floor(Math.random() * 3)+1;
}

function finishedGame() {
  updateLeaderboard(player[0]);
  let section = document.querySelector('section');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let result = document.createElement('p');
  let button = document.createElement('button');
  h3.textContent = 'Game Over';
  p.textContent = `Your score: ${player[0].score}`;
  button.textContent = 'Replay';
  button.addEventListener('click', Game);
  section.appendChild(h3);
  section.appendChild(p);
  section.appendChild(result);
  section.appendChild(button);
  if (player[0].score > computerScore) {
    result.textContent = 'You win';
  }
  else if (player[0].score < computerScore) {
    result.textContent = 'You lose';
  }
  
}

function addElementId(){
  let fireElement = document.getElementById('fire');
  let waterElement = document.getElementById('water');
  let earthElement = document.getElementById('earth');
  let section = document.querySelector('section');

  fireElement.addEventListener('click', handleElementChoice);
  waterElement.addEventListener('click', handleElementChoice);
  earthElement.addEventListener('click', handleElementChoice);

  fireElement.addEventListener('mouseover', handleElementHover);
  waterElement.addEventListener('mouseover', handleElementHover);
  earthElement.addEventListener('mouseover', handleElementHover);
  section.addEventListener('mouseover', handleElementHover);
}
//local storage
function addToLocalStorage(key, arr) {
  let stringifiedArray = JSON.stringify(arr);
  localStorage.setItem(key, stringifiedArray);
}

function getFromLocalStorage(key) {
  let returnedItem = JSON.parse(localStorage.getItem(key));
  return returnedItem;
}



// event listeners
  // start game button
  startGame.addEventListener('click', Game);

  // one on each element img (3)
  

  // replay button

