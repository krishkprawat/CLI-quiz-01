var readlineSync=require("readline-sync");
var chalk = require('chalk');
 
console.log(chalk.bgYellow(' Hy, its..do you know me quiz'));

var score = 0;

var userName= readlineSync.question(chalk.green("hy, what is your sweet name?"));
console.log(chalk.cyan("welcome " + userName));

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log(chalk.yellow("you are right "));
    score=  score+ 1;
  } else{
    console.log("oops wrong ");
    score = score- 1;
  }
 console.log ("your score is: ", score);
 console.log("-------------");

}


var questions= [{
  question :  "where do i live? ",
  answer: "pauri"
}, {
  question : "what is my favourite fruit? ",
  answer : "mango"
},{
  question: "what is my full name? ",
  answer :  "krishnapal singh rawat" 
},{
  question: "from which college i completed post graduation? ",
  answer :  "gbpec"
},{
  question: "what is my favourite color? ",
  answer : "white"
}];

for (var i=0; i< questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.bgMagenta("yo... you scored: ", score));
console.log("have a good day by..")