'use strict'


// global variables
  //leaderboard array
  let leaderboard = [];
  let player = [];
  let computerScore = 0;
  let message = 'Choose your element to play!';
  let p2=document.createElement('p');
  p2.id = 'text-box';

// foothold into DOM
let startGame = document.querySelector('button');

// construction functions
  // user construstor has propertioes of name and score
    //user score property
    //user name property
function CreatePlayer (name) {
  this.name = name;
  this.score = 0;
  this.choiceValue = 1;

  player.push(this);
}

// methods and other functions
  // game function
function Game (e) {
  e.preventDefault();
  
  console.log('gameStarts');
  // at the start of function it will create a new user
  // Event handle to get username from form
  let formInput = document.querySelector('input');
  let playerName = formInput.value;
  let newPlayer = new CreatePlayer (playerName);
  
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
  // p2.textContent = "Choose your element to play";

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
  if((player[0].score>4) || (computerScore>4)){
    // run finished game function
    
    clearSection();
    finishedGame();
    console.log('You finished game! Did you make leaderboard?');
  }
}

function calculateComputerChoice() {
  return Math.floor(Math.random() * 3)+1;
}

function finishedGame() {
let section = document.querySelector('section');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let result = document.createElement('p');
h3.textContent = 'Game Over';
p.textContent = `your score: ${player[0].score}`;
section.appendChild(h3);
section.appendChild(p);
section.appendChild(result);
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

  fireElement.addEventListener('click', handleElementChoice);
  waterElement.addEventListener('click', handleElementChoice);
  earthElement.addEventListener('click', handleElementChoice);
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

