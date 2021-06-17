'use strict'


// global variables
  //leaderboard array
  let leaderboard = [];

// foothold into DOM
let startGame = document.querySelector('button');
let fireElement = document.getElementById('fire');
let waterElement = document.getElementById('water');
let earthElement = document.getElementById('earth');
// construction functions
  // user construstor has propertioes of name and score
    //user score property
    //user name property
function CreatePlayer (name) {
  this.name = name;
  this.score = 0;
}

// methods and other functions
  // game function
  function Game (e) {
    e.preventDefault();
    clearSection();
    renderGame();
    console.log('gameStarts');
    // at the start of function it will create a new user
    // Event handle to get username from form
    let formInput = document.querySelector('input');
    let playerName = formInput.value;
    let Yirim = new CreatePlayer ('Yirim');
      console.log(Yirim);
      console.log(playerName);
      addToLocalStorage('Yirim', Yirim.score);

  }

  function clearSection(){
    let section=document.querySelector('section');
    section.innerHTML="";

  }

  function renderGame(){
    let section=document.querySelector('section');
    let userScore=document.createElement('h3');
    let computerScore=document.createElement('h3');
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let imgOne=document.createElement('img');
    let imgTwo=document.createElement('img');
    let imgThree=document.createElement('img');
 
    section.appendChild(userScore);
    section.appendChild(computerScore);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(imgOne);
    section.appendChild(imgTwo);
    section.appendChild(imgThree);
    

    userScore.textContent='1';
    computerScore.textContent='test';

  }

    
  //replay button

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
  fireElement.addEventListener('click', handleElementChoice);
  waterElement.addEventListener('click', handleElementChoice);
  earthElement.addEventListener('click', handleElementChoice);

  // replay button

