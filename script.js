const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the color of the sky?",
        options: ["Blue", "Green", "Red", "Yellow"],
        answer: "Blue"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(option, button));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption, button) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }

    // Disable all option buttons after an answer is selected
    Array.from(optionsElement.children).forEach(btn => {
        btn.disabled = true;
    });

    nextButton.style.display = "block"; // Show next button
}

function showResult() {
    quizElement.style.display = "none";
    resultElement.style.display = "block";
    scoreElement.textContent = score;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.style.display = "none"; // Hide next button until an answer is selected
        Array.from(optionsElement.children).forEach(btn => {
            btn.disabled = false; // Re-enable option buttons
            btn.classList.remove("correct", "incorrect"); // Reset button styles
        });
    } else {
        showResult();
    }
});

// Initial load
loadQuestion();
nextButton.style.display = "none"; // Hide next button initially
const quizElement = document.getElementById("quiz");
