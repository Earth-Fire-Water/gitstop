'Use Strict';

console.log('hello friend');


const leaderboard = document.getElementById('leaderboard');
console.log(leaderboard);

let yirim = new CreatePlayer('Yirim'); 
console.log(yirim);

let matt = new CreatePlayer('Matt');
console.log(matt);


CreatePlayer.prototype.render = function (){
  
}

function appendTable(){
  let tr = document.createElement ('tr');
  let td1 = document.createElement ('td'); 
  let td2 = document.createElement ('td'); 

  td1.textContent = '';
  tr.appendChild(td1);
  td2.textContent = matt.name;
  tr.appendChild(td2);
  leaderboard.appendChild(tr);

}
appendTable();
