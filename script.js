let currentQuestion = 0;

const questions = [
    { question: "Mennyi 5 + 3?", answer: 8 },
    { question: "Mennyi 10 - 4?", answer: 6 },
    { question: "Mennyi 7 * 2?", answer: 14 }
];

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const messageElement = document.getElementById('message');

    if (userAnswer === questions[currentQuestion].answer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadNextQuestion();
        } else {
            document.getElementById('question-container').innerHTML = '<p>Gratulálunk! Sikeresen megoldottad az összes feladatot!</p>';
        }
    } else {
        messageElement.innerText = "Rossz válasz. Próbáld újra!";
    }
}

function loadNextQuestion() {
    document.getElementById('question').innerText = questions[currentQuestion].question;
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
}
