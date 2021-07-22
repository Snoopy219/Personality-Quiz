/*This is to work the animation of my quiz!*/
let popScore = 0;
let classicalScore = 0;
let numQuestionsAnswered = 0;
let perPop = 0;
let perClassical = 0;
let result = document.getElementById("result");
let numQuestions = 3;
//let restart = document.getElementById("restart");
//puts the answer for each question in a variable
const q1a1 = document.getElementById("q1a1");
const q1a2 = document.getElementById("q1a2");

const q2a1 = document.getElementById("q2a1");
const q2a2 = document.getElementById("q2a2");

const q3a1 = document.getElementById("q3a1");
const q3a2 = document.getElementById("q3a2");

//handles mouse events
q1a1.addEventListener("click", classical);
q1a1.addEventListener("click", disableButton);
q1a2.addEventListener("click", pop);
q1a2.addEventListener("click", disableButton);

q2a1.addEventListener("click", pop);
q2a1.addEventListener("click", disableButton);
q2a2.addEventListener("click", classical);
q2a2.addEventListener("click", disableButton);

q3a1.addEventListener("click", pop);
q3a1.addEventListener("click", disableButton);
q3a2.addEventListener("click", classical);
q3a2.addEventListener("click", disableButton);

restart.addEventListener("click", reset);


//apparently tenzin said this works 
q1a1.disabled = false;

/**function to hold pop answers/increase pop score
 * when a pop answer is clicked on(see mouse events above)
 * Preconditions: pop answer clicked
 * Postconditions: popScore + 1 and numQuestionsAnswered + 1
*/
function pop(){
  numQuestionsAnswered +=1;
  popScore+= 1;
  if (numQuestionsAnswered == numQuestions){
    checkOutcome();
    quizOver();
  }
}

/**function to hold pop answers/increase classical score
 * when a classical answer is clicked on(see mouse events above)
 * Preconditions: classical answer clicked
 * Postconditions: classicalScore + 1 and numQuestionsAnswered + 1
*/
function classical(){
  numQuestionsAnswered +=1;
  classicalScore+= 1;
  if (numQuestionsAnswered == numQuestions){
    checkOutcome();
    quizOver();
  }
  console.log(numQuestionsAnswered);
}

function checkOutcome(){
  /*if (numQuestionsAnswered < numQuestions){
    alert("You have not answered all questions. You have answered " + numQuestionsAnswered + " out of " + numQuestions + " questions. Your result will only be based on the number of questions you have answered");
  }*/
  
  perPop = Math.floor((popScore/numQuestionsAnswered)*100);
  perClassical = Math.floor((classicalScore/numQuestionsAnswered)*100);
  //console.log(perPop);
}

function quizOver(){
  result.innerHTML = "You are " + perPop + "% a pop person and " + perClassical + "% a classical person";
}

function reset(){
  numQuestionsAnswered = 0;
  popScore = 0;
  classicalScore = 0;
  perPop = 0;
  perClassical = 0;
  result.innerHTML = "Your result is...";
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
}

function disableButton(event){
		//event.CurrentTarget.disabled = true;
    if(event.currentTarget === q1a1 || event.currentTarget == q1a2){
      q1a2.disabled = true;
      q1a1.disabled = true;
    } else if((event.currentTarget == q2a2) || (event.currentTarget == q2a1)){
      q2a1.disabled = true;
      q2a2.disabled = true;
    } else if((event.currentTarget == q3a1) || (event.currentTarget == q3a2)){
      q3a1.disabled = true;
      q3a2.disabled = true;
    }
}
