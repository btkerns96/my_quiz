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