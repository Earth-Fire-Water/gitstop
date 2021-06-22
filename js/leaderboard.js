'Use Strict';

const leaderboard = document.getElementById('leaderboard');

let rank = [1,2,3,4,5,6,7,8,9,10];

CreatePlayer.prototype.render = function (){
  
}
function updateLeaderboard(obj){
let leaderboard = getFromLocalStorage('leaderboard');
leaderboard.push(obj);
addToLocalStorage('leaderboard', leaderboard);
}

function sortLeaderBoard(key){
  let unsortedLeaderboardArr = getFromLocalStorage(key); 
  let unsortedScores = [];
  for (let i = 0; i < unsortedLeaderboardArr.length; i++){
    unsortedScores.push(unsortedLeaderboardArr[i].score);
  }
  let sortedScores = unsortedScores.sort((a,b)=> b-a); //sorts the scores using an arrow function
  let sortedLeaderboard = [];
  for(let j = 0; j < unsortedLeaderboardArr.length; j++){
    for (let k = 0; k < unsortedLeaderboardArr.length; k++){
      if ((unsortedLeaderboardArr[j].score === sortedScores[k]) && (!sortedLeaderboard.includes(unsortedLeaderboardArr[j]))){
        sortedLeaderboard[k] = unsortedLeaderboardArr[j];
        sortedScores[k] = '';
      }
    }
  }
  console.log(sortedScores);
  console.log(sortedLeaderboard);
  return sortedLeaderboard;
}
function appendTable(){
  let  arr = sortLeaderBoard('leaderboard');
  for(let i = 0; i < rank.length; i++){
    let tr = document.createElement ('tr');
    let td1 = document.createElement ('td'); 
    let td2 = document.createElement ('td'); 
    let td3 = document.createElement ('td'); 
    td1.textContent = rank[i];
    tr.appendChild(td1);
    td2.textContent = arr[i].name;
    tr.appendChild(td2);
    td3.textContent = arr[i].score;
    tr.appendChild(td3);
    leaderboard.appendChild(tr);
  }
}
appendTable();
// sortLeaderBoard('leaderboard');
