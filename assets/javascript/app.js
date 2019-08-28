let counter = 5;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;

    if(isQuestionOver) {
        console.log("GAME IS OVER CAT LOSER!!!");

    }
    else {
    currentQuestion++;
    loadQuestion();
}
}



function timeUp() {
    clearInterval(timer);

    lost++;
    nextQuestion();
}


function countDown() {
    counter--;

    $('#time').html("This is how many seconds you have left, oh Knower of Little Trivia... " + counter);

    if(counter === 0) {
        timeUp();
    }

}

function loadQuestion() {

    counter = 5;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;

    $('#time').html("This is how many seconds you have left, oh Knower of Little Trivia... " + counter);
    $('#game').html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
    `);
}

function loadChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++ ){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}

$(document).on('click', '.choice', function() {
   const selectedAnswer = $(this).attr('data-answer');
   const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

   if(correctAnswer === selectedAnswer ){
        score++;
        console.log("wins");
   } else {
       lost++;
       console.log("loses");
   }
console.log("yeep ", selectedAnswer);

});;




loadQuestion();