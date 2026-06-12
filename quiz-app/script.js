const questions=[
    {
        question: "Which is the mostly used language in DS:",
        answers:[
            {text:"C++", correct:false},
            {text:"C", correct:false},
            {text:"Python", correct:true},
            {text:"Java", correct:false},
        ]
    },
    {
        question: "the most common and hyped free tool for data visualization is:",
        answers:[
            {text:"powerBI", correct:true},
            {text:"word", correct:false},
            {text:"powerpoint", correct:false},
            {text:"excel", correct:false},
        ]
    },
    {
        question: "Data engineer is field of:",
        answers:[
            {text:"management", correct:false},
            {text:"CS(Ds)", correct:true},
            {text:"finance", correct:false},
            {text:"health", correct:false},
        ]
    },
    {
        question: "powerbi dashboards are:",
        answers:[
            {text:"user friendly", correct:false},
            {text:"interactive", correct:false},
            {text:"none", correct:false},
            {text:"both", correct:true},
        ]
    },
    {
        question: "Tableau is used for:",
        answers:[
            {text:"data visualization", correct:true},
            {text:"text editing", correct:false},
            {text:"pdf formatting", correct:false},
            {text:"ppt creation", correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentquestionIndex=0;
let score=0;
function startQuiz(){
    currentquestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentquestion=questions[currentquestionIndex];
    let questionno=currentquestionIndex+1;
    questionElement.innerHTML=questionno +"," + currentquestion.question;
    
    
    currentquestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswers);
    });
    }

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswers(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true") {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handlenextbutton(){
    currentquestionIndex++;
    if(currentquestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex<questions.length){
        handlenextbutton();
    }else{
        startQuiz();
    }
})

startQuiz();
