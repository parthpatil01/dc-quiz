
var name;
var score=0;

var readfile=require('readline-sync');
const chalk=require('chalk');


var questionaire=[{
  question:chalk.white("The Joker was 1st introduced in what comic?")+"\n"+
    "A.Batman #1"+"\n"+
"B.Detective comics #6"+"\n"+
"C.The Killing Joke #1"+"\n"+
"D.Batman #5"+"\n",
  answer:"A"
},{
  question:"Heroes Captain Marvel and Shazam are essentially the same person. "+"\n"+"A. True"+"\n"+"B. False"+"\n",
  answer:"A"
},{
  question:"Doomsday is who's the biggest enemy?"+"\n"+"A. Superman"+"\n"+"B. Batman"+"\n"+"C. Wonder woman"+"\n"+"D. Flash"+"\n",

  answer:"A"
  
},{
  question:"Doomsday was introduced in what year?"+"\n"+"A. 1984"+"\n"+"B. 1966"+"\n"+"C. 1991"+"\n"+"D. 1845"+"\n",

  answer:"C"
},{
  question:"What is flash's super power?"+"\n"+"A. Strength"+"\n"+"B. Armour"+"\n"+"C. Technology"+"\n"+"D. Speed"+"\n",

  answer:"D"
}];

var highScores = [
  {
    name: "Parth",
    score: 5,
  },

  {
    name: "Ayush",
    score: 5,
  },
  {
    name: "Diya",
    score: 4,
  },
]

function welcome(){
    name =  readfile.question("hello! welcome to the game. Please enter your name: ");
    console.log(chalk.red("Rules of the game: "));
    console.log("-Choose the correct option");
    console.log("All the best",name,"!");
    console.log("-------------")
}

function play(question,answer){
  var userAnswer=readfile.question(chalk.blue(question));
  if(answer.toLowerCase()===userAnswer.toLowerCase()){
    console.log("Correct!");
    score+=1;
  }else{
    console.log("Incorrect!");
  }
  console.log("Current score",score);
  console.log("-------------")
}


function end(){
  console.log("You've reached the end!");
  
  if(score==5){
    console.log("You've answered all the questions correctly!!");
  }
  
  console.log(chalk.green("Your score is: "),score);
  console.log("-------------")
  console.log("Check out the high scores, if you should be there send me a screenshot of your score and I'll add you there!");

  highScores.map(score => console.log(score.name, " : ", score.score))
  
}

function quiz(){
  for(var i=0;i<questionaire.length;i++){
  play(questionaire[i].question,questionaire[i].answer);
  }
}


welcome();
quiz();
end();