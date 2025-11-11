const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "High Tech Modern Language",
        c: "Home Tool Markup Language",
        d: "Hyperlinks and Text Markup Language",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1993",
        correct: "b"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Computer Style Sheets",
        correct: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Venus",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        correct: "c"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        a: "C",
        b: "Assembly",
        c: "COBOL",
        d: "FORTRAN",
        correct: "a"
    },
    {
        question: "What is the smallest unit of data in a computer?",
        a: "Byte",
        b: "Bit",
        c: "Kilobyte",
        d: "Megabyte",
        correct: "b"
    },
    {
        question: "Who developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Stephen Hawking",
        correct: "b"
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Go",
        b: "Gd",
        c: "Au",
        d: "Ag",
        correct: "c"
    },
    {
        question: "Which country is home to the kangaroo?",
        a: "New Zealand",
        b: "Australia",
        c: "South Africa",
        d: "India",
        correct: "b"
    },
    {
        question: "What is the speed of light?",
        a: "300,000 km/s",
        b: "150,000 km/s",
        c: "450,000 km/s",
        d: "600,000 km/s",
        correct: "a"
    },
    {
        question: "Which element has the atomic number 1?",
        a: "Helium",
        b: "Oxygen",
        c: "Hydrogen",
        d: "Carbon",
        correct: "c"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Great White Shark",
        correct: "b"
    },
    {
        question: "In which year did World War II end?",
        a: "1943",
        b: "1944",
        c: "1945",
        d: "1946",
        correct: "c"
    },
    {
        question: "What is the capital of Japan?",
        a: "Seoul",
        b: "Beijing",
        c: "Tokyo",
        d: "Bangkok",
        correct: "c"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Hydrogen",
        correct: "c"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
        correct: "b"
    },
    {
        question: "What is the square root of 144?",
        a: "10",
        b: "11",
        c: "12",
        d: "13",
        correct: "c"
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        a: "Liver",
        b: "Lungs",
        c: "Heart",
        d: "Kidney",
        correct: "c"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Platinum",
        correct: "c"
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        a: "Asia",
        b: "Africa",
        c: "Australia",
        d: "South America",
        correct: "b"
    },
    {
        question: "What is the boiling point of water at sea level?",
        a: "90°C",
        b: "100°C",
        c: "110°C",
        d: "120°C",
        correct: "b"
    },
    {
        question: "Who invented the telephone?",
        a: "Thomas Edison",
        b: "Nikola Tesla",
        c: "Alexander Graham Bell",
        d: "Benjamin Franklin",
        correct: "c"
    },
    {
        question: "What is the currency of the United Kingdom?",
        a: "Euro",
        b: "Dollar",
        c: "Pound Sterling",
        d: "Yen",
        correct: "c"
    },
    {
        question: "How many continents are there on Earth?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Saturn",
        b: "Jupiter",
        c: "Neptune",
        d: "Uranus",
        correct: "b"
    },
    {
        question: "Which programming language is known for artificial intelligence?",
        a: "JavaScript",
        b: "Python",
        c: "Ruby",
        d: "PHP",
        correct: "b"
    },
    {
        question: "What does HTTP stand for?",
        a: "HyperText Transfer Protocol",
        b: "High Transfer Text Protocol",
        c: "HyperText Transmission Protocol",
        d: "Home Text Transfer Protocol",
        correct: "a"
    },
    {
        question: "Who is known as the father of computers?",
        a: "Alan Turing",
        b: "Charles Babbage",
        c: "Bill Gates",
        d: "Steve Jobs",
        correct: "b"
    },
    {
        question: "What is the main component of the Sun?",
        a: "Oxygen",
        b: "Carbon",
        c: "Hydrogen",
        d: "Helium",
        correct: "c"
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        a: "Tiger",
        b: "Elephant",
        c: "Lion",
        d: "Bear",
        correct: "c"
    },
    {
        question: "What is the freezing point of water?",
        a: "0°C",
        b: "-5°C",
        c: "5°C",
        d: "10°C",
        correct: "a"
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        a: "Spain",
        b: "France",
        c: "Italy",
        d: "Germany",
        correct: "b"
    },
    {
        question: "What is the longest river in the world?",
        a: "Amazon River",
        b: "Nile River",
        c: "Yangtze River",
        d: "Mississippi River",
        correct: "b"
    },
    {
        question: "How many bones are in the adult human body?",
        a: "196",
        b: "206",
        c: "216",
        d: "226",
        correct: "b"
    },
    {
        question: "What does SQL stand for?",
        a: "Structured Query Language",
        b: "Simple Query Language",
        c: "Standard Query Language",
        d: "Sequential Query Language",
        correct: "a"
    },
    {
        question: "Which planet is closest to the Sun?",
        a: "Venus",
        b: "Earth",
        c: "Mercury",
        d: "Mars",
        correct: "c"
    },
    {
        question: "Who wrote 'Thank You for Being Late'?",
        a: "Thomas Friedman",
        b: "Mark Twain",
        c: "Ernest Hemingway",
        d: "F. Scott Fitzgerald",
        correct: "a"
    },
    {
        question: "What is the capital of Canada?",
        a: "Toronto",
        b: "Vancouver",
        c: "Ottawa",
        d: "Montreal",
        correct: "c"
    },
    {
        question: "Which is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Liechtenstein",
        correct: "b"
    },
    {
        question: "What is the primary function of the CPU?",
        a: "Store data",
        b: "Process instructions",
        c: "Display graphics",
        d: "Connect to internet",
        correct: "b"
    },
    {
        question: "How many sides does a hexagon have?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "b"
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Kangchenjunga",
        c: "Mount Everest",
        d: "Lhotse",
        correct: "c"
    },
    {
        question: "Which vitamin is produced when the skin is exposed to sunlight?",
        a: "Vitamin A",
        b: "Vitamin B",
        c: "Vitamin C",
        d: "Vitamin D",
        correct: "d"
    },
    {
        question: "What is the chemical formula for water?",
        a: "H2O",
        b: "CO2",
        c: "O2",
        d: "H2SO4",
        correct: "a"
    },
    {
        question: "In which year did the first iPhone launch?",
        a: "2005",
        b: "2006",
        c: "2007",
        d: "2008",
        correct: "c"
    },
    {
        question: "Which blood type is known as the universal donor?",
        a: "A+",
        b: "B+",
        c: "AB+",
        d: "O-",
        correct: "d"
    }
];

const loginBox = document.getElementById('login-box');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const welcomeText = document.getElementById('welcome-text');
const logoutBtn = document.getElementById('logout-btn');
const logoutResultBtn = document.getElementById('logout-result');
const resultUserName = document.getElementById('result-user-name');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const questionNumber = document.getElementById('question-number');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');
const resultMessageEl = document.getElementById('result-message');
const restartBtn = document.getElementById('restart');

let currentQuiz = 0;
let score = 0;
let currentUser = '';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if(username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
        return;
    }
    
    if(password.length < 4) {
        errorMessage.textContent = 'Password must be at least 4 characters';
        return;
    }
    
    currentUser = username;
    welcomeText.textContent = `Welcome, ${currentUser}!`;
    
    loginBox.classList.add('hide');
    quizBox.style.display = 'block';
    
    loadQuiz();
});

logoutBtn.addEventListener('click', logout);
logoutResultBtn.addEventListener('click', logout);

function logout() {
    currentUser = '';
    currentQuiz = 0;
    score = 0;
    
    loginBox.classList.remove('hide');
    quizBox.style.display = 'none';
    quizBox.classList.remove('hide');
    resultBox.classList.remove('show');
    
    usernameInput.value = '';
    passwordInput.value = '';
    errorMessage.textContent = '';
}

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    questionNumber.innerText = `${currentQuiz + 1} of ${quizData.length}`;
    scoreEl.innerText = `Score: ${score}`;
    
    removeAnswerClasses();
}

function deselectAnswers() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.checked = false);
}

function removeAnswerClasses() {
    const listItems = document.querySelectorAll('.options li');
    listItems.forEach(item => {
        item.classList.remove('correct', 'incorrect');
    });
}

function getSelected() {
    const answers = document.querySelectorAll('.answer');
    let answer = undefined;
    
    answers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        const currentQuizData = quizData[currentQuiz];
        const selectedLi = document.querySelector(`#${answer}`).parentElement;
        const correctLi = document.querySelector(`#${currentQuizData.correct}`).parentElement;
        
        if(answer === currentQuizData.correct) {
            score++;
            selectedLi.classList.add('correct');
        } else {
            selectedLi.classList.add('incorrect');
            correctLi.classList.add('correct');
        }
        
        setTimeout(() => {
            currentQuiz++;
            
            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                showResults();
            }
        }, 1500);
    }
});

function showResults() {
    quizBox.classList.add('hide');
    resultBox.classList.add('show');
    
    resultUserName.textContent = `${currentUser}`;
    finalScoreEl.innerText = `${score}/${quizData.length}`;
    
    const percentage = (score / quizData.length) * 100;
    
    if(percentage >= 80) {
        resultMessageEl.innerText = "Excellent! You're a quiz master!";
    } else if(percentage >= 60) {
        resultMessageEl.innerText = "Great job! Keep it up!";
    } else if(percentage >= 40) {
        resultMessageEl.innerText = "Good effort! Practice more!";
    } else {
        resultMessageEl.innerText = "Don't give up! Try again!";
    }
}

restartBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    quizBox.classList.remove('hide');
    quizBox.style.display = 'block';
    resultBox.classList.remove('show');
    loadQuiz();
});