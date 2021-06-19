'use strict';
let quenTag = document.getElementById('quen');
let zachTag = document.getElementById('zach');
let yirimTag = document.getElementById('yirim');
let mattTag = document.getElementById('matt');

let allNames = [];


function CreateProfile(name, displayName, file, linkedin, github){
  this.name = name;
  this.displayName = displayName;
  this.file = file;
  this.linkedin = linkedin;
  this.github = github;
  this.pitch = '';
  allNames.push(this);
}

let quen = new CreateProfile('quen', 'Quentin Young III', '../img/quen.jpeg', 'https://www.linkedin.com/in/quentin-young-iii/', 'https://github.com/QPThree');
quen.pitch = 'My name is Quentin Young, I grew up on a dairy farm in the hills of  Vermont. In 2013, I enlisted in the Navy directly after graduating from the University of New Hampshire. I\'ve always enjoyed math and logic. I decided to pursue software and not only start a career in development, but to pursue my masters in engineering. Outside of writing software I\'m a marathoner (Boston Marathon qualifier), mountaineer (Mt. Whitney, highest in lower 48), and skier! I\'m currently training for an Ultra Marathon in the Olympic mountains this fall.';
let zach = new CreateProfile('zach', 'Zach Winterton', '../img/earth.jpeg', 'https://www.linkedin.com/in/quentin-young-iii/', 'https://github.com/Zach-Winterton');
let yirim = new CreateProfile('yirim', 'Yirim Seck', '../img/fire.jpeg', 'https://www.linkedin.com/in/quentin-young-iii/', 'https://github.com/YirimS');
let matt = new CreateProfile('matt', 'Matt Miguel', '../img/water.jpeg', 'https://www.linkedin.com/in/quentin-young-iii/', 'https://github.com/jamiguel23');


function clearSection(){
  let section = document.querySelector('section');
  section.innerHTML = '';
}
function handleNameClick(e){
  let name = e.target.id;
  renderProfile(name);
}

function renderProfile(name){
  clearSection();
  let profile;
  let section = document.querySelector('section');
  let headshot = document.createElement('img');
  let githubA = document.createElement('a');
  let github = document.createElement('img');
  let linkedinA = document.createElement('a');
  let linkedin = document.createElement('img');
  let paragraph = document.createElement('p');


  for(let i = 0; i < allNames.length; i++){
    if(allNames[i].name == name){
      profile = allNames[i];
      console.log(profile);
    }
  }
  headshot.src = profile.file;
  headshot.id = 'headshot';
  githubA.href = profile.github;
  github.src = '../img/github.png';
  github.id = 'githublink';
  linkedinA.href = profile.linkedin;
  linkedin.src = '../img/linkedin.png';
  linkedin.id = 'linkedinlink';
  paragraph.id = 'profileP';
  paragraph.textContent = profile.pitch;
  section.appendChild(headshot);
  section.appendChild(githubA);
  section.appendChild(paragraph);
  githubA.appendChild(github);
  linkedinA.appendChild(linkedin);
  section.appendChild(linkedinA);
  
  console.log(headshot);
}



quenTag.addEventListener('mouseenter', handleNameClick);
mattTag.addEventListener('mouseenter', handleNameClick);
zachTag.addEventListener('mouseenter', handleNameClick);
yirimTag.addEventListener('mouseenter', handleNameClick);
