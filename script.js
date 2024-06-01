const questions = [
    {
        question: "cvjuhb vdsahioposdavj",
        answers :[
            {text:"asv", correct:false},
            {text:"asv", correct:true},
            {text:"asv", correct:false},
            {text:"asv", correct:false},
        ]
    },
    {
        question: "cvjahreuhb arhraeh",
        answers :[
            {text:"aszbv", correct:false},
            {text:"aszdbnv", correct:false},
            {text:"as/juv", correct:false},
            {text:"as/hv", correct:true},
        ]
    },
    {
        question: "cvjuhb vdsahioposdavj",
        answers :[
            {text:"asv", correct:false},
            {text:"asv", correct:true},
            {text:"asv", correct:false},
            {text:"asv", correct:false},
        ]
    },
    {
        question: "cvjuhb vdsahioposdavj",
        answers :[
            {text:"asv", correct:false},
            {text:"asv", correct:true},
            {text:"asv", correct:false},
            {text:"asv", correct:false},
        ]
    },
];

const questionELement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion= questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex+1;
    questionELement.innerHTML = questionNum+". "+currentQuestion.question;
}