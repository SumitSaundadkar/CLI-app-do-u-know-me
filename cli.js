var readlineSyanc=require("readline-sync");
var score =0;
var userName=readlineSyanc.question("What is your name?");

console.log("Welcome " + userName + " DO YOU KNOW SUMIT?");

//play function
function play(question,answer){
  var userAnswer=readlineSyanc.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("right! keep it up.");
    score = score +1;
  }
  else{
    console.log("wrong!oho do more.");
  }
  console.log("current score",score);
  console.log("-----------------------------")
}
//array of object
var questions=[{
  question:"Where do i live?",
  answer :"Parbhani"
},
{
  question:"What is my nickname?",
  answer:"summo"

},
{
  question:"which is my favourite dish?",
  answer:"Biryani"
},
{
  question:"which is my favourite IPL team?",
  answer:"MI"
},
{
  question:"In which month i was born?",
  answer:"DECEMBER"

}];
for(var i=0;i< questions.length;i++){
  var currentQuestion=questions[i]; 
  play(currentQuestion.question,currentQuestion.answer)
  if(score===5){
    console.log("tu hi mera acha dost hai.")
  }
}
console.log("yay! you scored: ",score);