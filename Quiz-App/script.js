const DataQuiz =[
    {
        question : "what is the most popular programming language?",
        a:"javascript",
        b:"python",
        c:"java",
        d:"C++",
        correct: "a",
        
    },
    {
        question : "Who is the President of the USA?",
        a:"Donald Trump",
        b:"Florian popp",
        c:"Barak Obama",
        d:"Angela Merkel",
        correct: "a",
        
    },
    {
        question : "what is the capital of spain ?",
        a:"Berlin",
        b:"Barcelona",
        c:"madrid",
        d:"Paris",
        correct: "c",
        
    },
    {
        question : "what year was javascript launched?",
        a:"1998",
        b:"1994",
        c:"1992",
        d:"1995",
        correct: "d",
        
    }

]

const text_a = document.getElementById("text-a");
const text_b = document.getElementById("text-b");
const text_c = document.getElementById("text-c");
const text_d = document.getElementById("text-d");

const question = document.getElementById("question");
const result = document.getElementById("result");

const btnsubmit = document.getElementById("submit")

let answerEls = document.querySelectorAll(".answer");

let CurrentQuiz = 0;

LoadQuiz();

function LoadQuiz(){

    deselect();

    const CurrentQuizData = DataQuiz[CurrentQuiz];

    question.innerText = CurrentQuizData.question;

    text_a.innerText = CurrentQuizData.a; 
    text_b.innerText = CurrentQuizData.b;
    text_c.innerText = CurrentQuizData.c;
    text_d.innerText = CurrentQuizData.d;   



}

function selected(){

    

    let answer = null;

    answerEls.forEach((answerEl) => {
        if( answerEl.checked){
            answer = answerEl.id;
            }

        }
    ); 
    return answer; 
}

function deselect(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

            }

    )}
     
     




score = 0;


btnsubmit.addEventListener("click" , () => {

    let answer = selected();

    if (answer === DataQuiz[CurrentQuiz].correct){
        score++;
        
    }

    if (answer){
        CurrentQuiz++;
    }else { 
        alert ("you should answer of the question!!")}
    
    
    if( CurrentQuiz < DataQuiz.length){
        LoadQuiz();
    }else{
        result.innerHTML = "you have finish you score is "+ score +"/" + DataQuiz.length; 
        
    }



    
    
        
    }
            
)
