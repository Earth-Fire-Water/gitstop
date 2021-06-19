'Use Strict';

// console.log('hello friend');


const leaderboard = document.getElementById('leaderboard');
// console.log(leaderboard);

let yirim = new CreatePlayer('Yirim'); 
// console.log(yirim);

let matt = new CreatePlayer('Matt');
// console.log(matt);

let rank = [1,2,3,4,5,6,7,8,9,10];
// console.log(rank);

CreatePlayer.prototype.render = function (){
  
}

function appendTable(){
  let  arr = getFromLocalStorage('leaderboard');
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
