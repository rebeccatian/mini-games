eightBall.js 

function myFunction() {
  var userName = document.getElementById("name").value;
  var output;
  
  if (userName) {
    output = `Hello, ${userName}! What would you like to ask today?`
  }
  else {
    output = `Hello, stranger. What would you like to ask today?`
  }
  var x = document.getElementById("secondField");
  x.style.display = "block";
  document.getElementById("intro").innerHTML = output;
  }

function answer() {
var randomNumber = Math.floor(Math.random() * 8)
switch (randomNumber) {
  case 0 :
  eightBall = 'It is certain.';
  break;
  case 1 :
  eightBall = 'It is decidedly so.';
  break;
  case 2 : 
  eightBall = 'Reply hazy try again.'
  break
  case 3 : 
  eightBall = 'Cannot predict now.'
  break
  case 4 :
  eightBall = 'Do not count on it.'
  break
  case 5 : 
  eightBall = 'My sources say no.'
  break
  case 6 :
  eightBall = 'Outlook not so good.'
  break
  case 7 : 
  eightBall = 'Most definitely yes.'
  break
}
return eightBall;
}

function questionFunction () {
  var y = document.getElementById("answer");
  y.style.display = "block";
  answer = answer();
  document.getElementById("answer").innerHTML = answer;
}

