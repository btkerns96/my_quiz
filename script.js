const questions = [
    // Questions and Answers
    { question: 'What does CSS stand for?', answers: ['Cascading Style Sheets', 'Central Security Service', 'Cross-Site Scripting', 'Closed Source Software'], correct: 1 },
    { question: 'What is HTML used for?', answers: ['Functionality', 'Coloring/Style', 'Building Webpages', 'Magic'], correct: 3 },
    { question: 'What is an array?', answers: ['Satelite Dish', 'A Collection of Items', 'An Imposing Group', 'Clothing/Attire'], correct: 2 },
    { question: 'What is an API?', answers: ['Application Programming Interface', 'Academic Performance Index', 'Accountable Property Inventory', '	Air Position Indicator'], correct: 1 },
    { question: 'TBD?', answers: ['TBD', 'TBD', 'TBD', 'TBD'], correct: 4 },
    { question: 'TBD?', answers: ['TBD', 'TBD', 'TBD', 'TBD'], correct: 3 },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timeRemaining = 60; // Sets the timer

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');
const timerElement = document.getElementById('time');
const highscoresElement = document.getElementById('highscores');

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => {
            if (index === question.correct) {
                correctAnswers++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        });
        choicesElement.appendChild(button);
    });
}

function startTimer() {
    timerElement.textContent = timeRemaining;
    const timer = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= 0 || currentQuestionIndex >= questions.length) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    saveHighScore(correctAnswers);
    displayHighScores();
    questionElement.textContent = "Quiz Completed!";
    choicesElement.innerHTML = `Your score: ${correctAnswers}`;
    nextButton.style.display = 'none';
    timerElement.parentNode.style.display = 'none';
}

function saveHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const newScore = {
        score: score,
        date: new Date().toLocaleString()
    };

    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5); // Keeps only the top 5 scores

    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highscoresElement.innerHTML = '';

    highScores.forEach(score => {
        const listItem = document.createElement('li');
        listItem.textContent = `${score.score} - ${score.date}`;
        highscoresElement.appendChild(listItem);
    });
}

showQuestion();
startTimer();
displayHighScores();