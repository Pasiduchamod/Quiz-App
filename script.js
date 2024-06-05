const questions = [
    {
        question: "What does HTML stand for?",
        answers :[
            {text:"Hyperlink and Text Markup Language", correct:false},
            {text:"HyperText Markup Language", correct:true},
            {text:"Home Tool Markup Language", correct:false},
            {text:"HighText Machine Language", correct:false},
        ]
    },
    {
        question: "What is the main function of CSS in web development?",
        answers :[
            {text:"To create database connections", correct:false},
            {text:"To add interactivity to web pages", correct:false},
            {text:"To manage server-side logic", correct:false},
            {text:"To control the layout and appearance of the content on a website", correct:true},
        ]
    },
    {
        question: "What does SEO stand for, and why is it important?",
        answers :[
            {text:"Search Engine Optimization; it improves a website's visibility and ranking on search engines", correct:true},
            {text:"Server End Operation; it optimizes server performance", correct:false},
            {text:"Site Enhancement Optimization; it enhances the user experience", correct:false},
            {text:"Secure Encryption Output; it secures data transmission", correct:false},
        ]
    },
    {
        question: "Which protocol is commonly used to transfer web pages from a server to a browser?",
        answers :[
            {text:"FTP", correct:false},
            {text:"HTTP", correct:true},
            {text:"SMTP", correct:false},
            {text:"IMAP", correct:false},
        ]
    },
    {
        question: "What is the purpose of JavaScript in a website?",
        answers :[
            {text:"To structure the content of the web page", correct:false},
            {text:"To style the web page", correct:false},
            {text:"To create interactive and dynamic content on websites", correct:true},
            {text:"To handle database queries", correct:false},
        ]
    }
];

const questionELement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");
const strtbtn = document.getElementById("strtbtn");

let currentQuestionIndex = 0;
let score = 0;

function gotoquiz(){
    window.location.href = "index.html";
}

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex+1;
    questionELement.innerHTML = questionNum+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
        
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionELement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();