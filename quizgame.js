//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questões funcionam para que nossa função getQuestion mais tarde possa obter o valor correto do array

let questions = [{
    question: "Quais sintomas mais comuns a COVID-19?",
    imgSrc: "img/covid/covid.jpg",
    choiceA: "Febre",
    choiceB: "Tosse seca",
    choiceC: "Cansaço",
    choiceD: "Todas as respostas",
    correctAnswer: "D"
}, {
    question: "Onde surgiu o primeiro caso da COVID-19? ",
    imgSrc: "img/covid/wuhan.jpg",
    choiceA: "Texas (USA)",
    choiceB: "Toronto (Canadá)",
    choiceC: "Wuhan (China)",
    choiceD: "Nova Iguaçu (Rio de Janeiro)",
    correctAnswer: "C"
}, {
    question: "Como utilizar a máscara caseira?",
    imgSrc: "img/covid/mascara-caseira.jpg",
    choiceA: "Utilizar de forma individual",
    choiceB: "Deverá cobrir a boca e o nariz",
    choiceC: "Confeccionar com duas camadas",
    choiceD: "Todas as respostas",
    correctAnswer: "D"
},{
    question: "Quantos casos o mundo apresenta?",
    imgSrc: "img/covid/mundo.jpg",
    choiceA: "60 milhões",
    choiceB: "40 milhões",
    choiceC: "10 milhões",
    choiceD: "1 bilhão",
    correctAnswer: "A"
}, {
    question: "Qual país com maior número de mortos?",
    imgSrc: "img/covid/peru.jpg",
    choiceA: "Brasil",
    choiceB: "USA",
    choiceC: "Itália",
    choiceD: "Peru",
    correctAnswer: "D"
}, {
    question: "Quantos casos apresenta o RJ?",
    imgSrc: "img/covid/rj.jpg",
    choiceA: "200 milhões",
    choiceB: "6 milhões",
    choiceC: "30 milhões",
    choiceD: "10 milhões",
    correctAnswer: "B"
}, {
    question: "Quantos casos de mortes no RJ?",
    imgSrc: "img/covid/morte.jpg",
    choiceA: "100 mil",
    choiceB: "175 mil",
    choiceC: "75 mil",
    choiceD: "500 mil",
    correctAnswer: "B"
}, {
    question: "Quanto tempo dura a quarentena?",
    imgSrc: "img/covid/img_0890-1.jpg",
    choiceA: "30 dias",
    choiceB: "45 dias",
    choiceC: "14 dias",
    choiceD: "15 dias",
    correctAnswer: "C"
}, {
    question: "Quem batizar o nome do vírus?",
    imgSrc: "img/covid/200316-Covid19.jpeg",
    choiceA: "OMS",
    choiceB: "ICTV",
    choiceC: "FGV",
    choiceD: "China",
    correctAnswer: "B"
}, {
    question: "Quanto tempo dura a incubação do vírus?",
    imgSrc: "img/covid/COVID-19.jpg",
    choiceA: "2 á 14 dias",
    choiceB: "3 á 15 dias",
    choiceC: "10 á 30 dias",
    choiceD: "1 á 15 dias",
    correctAnswer: "A"	
	

}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// Visualizar score

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> Você marcou " + score + " de 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Ops!!!<p> Muito Ruim!<p> Você precisa se atualizar sobre o COVID-19.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Muito Bom!<p> Mas você pode melhorar ainda mais.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Parabéns!!!<p> Ótimo trabalho!<p> Você realmente conhece tudo sobre a pandemia!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function que checa se a resposta está correta

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}