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

let quen = new CreateProfile('quen', 'Quentin Young III', 'img/quen.jpeg', 'https://www.linkedin.com/in/quentin-young-iii/', 'https://github.com/QPThree');
quen.pitch = 'My name is Quentin Young, I grew up on a dairy farm in the hills of  Vermont. In 2013, I enlisted in the Navy directly after graduating from the University of New Hampshire. I\'ve always enjoyed math and logic. I decided to pursue software and not only start a career in development, but to pursue my masters in engineering. Outside of writing software I\'m a marathoner (Boston Marathon qualifier), mountaineer (Mt. Whitney, highest in lower 48), and skier! I\'m currently training for an Ultra Marathon in the Olympic mountains this fall.';

let zach = new CreateProfile('zach','Zach Winterton', 'img/ZacharyFinal.jpg', 'https://www.linkedin.com/in/zach-winterton-4584471b4/', 'https://github.com/Zach-Winterton');
zach.pitch = 'My name is Zach Winterton, I currently live in Idaho and am a former Marine. I have worked in land surveying and as stock trader in the past but have decided to become a software developer because of the potential to work remotely as well as to give myself a challenge that I\'ve been seeking since being out of the service. As many have said, coding is the language of the future and I would like to be apart of it in some way. When I\'m not doing class work I spend my free time restoring our 1940s home with my wife or being outside and enjoing the outdoors.';

let yirim = new CreateProfile('yirim', 'Yirim Seck', 'img/Yidseckprofile.jpg', 'https://www.linkedin.com/in/yirim-seck/', 'https://github.com/YirimS');
yirim.pitch ='My Name is Yirim (yiddim) Seck work as a hip-hop and visual artist is inspired by exploring the links between arts and sustainability, how artists support other artists in the way of collaborations and contractual services.  The discussion in my works is largely centered around artists who are creating alternative incomes in order to further invest in their respected mediums, moving towards becoming  living artists and sustaining fully off of their art.  I am a Hip-Hop artist and activist of 19 years with a background in the construction trades and  social justice, specifically in the green energy sector. Last year I began the process of launching my own contracting company, with the idea of creating a business that  serves as a means of supporting my family and community while creating a revenue stream that would allow me to invest in my art, pushing the boundaries of my creativity.';

let matt = new CreateProfile('matt', 'Matt Miguel', 'img/Matt.png', 'https://www.linkedin.com/in/j-matthew-miguel-47413b51/', 'https://github.com/jamiguel23');
matt.pitch ='My name is Matt Miguel, and I am a software developer with experience in Customer Service and Home Pricing based in Seattle, WA. My job and life experience has taught me to never underestimate the ability of a team working together to achieve the same goal. That’s what brought me to programming, the collaborative work involved to develop a meaningful product. I studied hospitality and have mainly held customer facing roles. I made the shift to home pricing, working with data analytics and machine learning, about a year ago to better flex my skills as an analytical person. I am currently a Pricing Analyst in the acquisitions team for Zillow Offers, Zillow’s iBuying service, as well as a student here at Code Fellows. During my spare time I like to snowboard, cook, as well as spend with my friends and family. My goal is to become a full stack developer with a tight knit team where I can use my customer centric aptitudes to help better their online experience and general accessibly.';



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
  github.src = 'img/github.png';
  github.id = 'githublink';
  linkedinA.href = profile.linkedin;
  linkedin.src = 'img/linkedin.png';
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
