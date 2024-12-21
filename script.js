let questionIndex = 0;
const questions = [
    { question: 'Где тут Менди?', correct: 0, answers: [
        'https://static.wikia.nocookie.net/brawlstars/images/6/66/Mandy_Brawl_Stars.png/revision/latest/scale-to-width-down/350?cb=20230526130231',
        'https://cdn.pixabay.com/photo/2017/08/30/01/43/cat-2696363_960_720.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mayot_2022.jpg/800px-Mayot_2022.jpg',
        'https://cdn.pixabay.com/photo/2017/07/16/22/47/volleyball-2508464_960_720.jpg'
    ]},
    { question: 'Где тут котик?', correct: 0, answers: [
        'https://cdn.pixabay.com/photo/2017/08/30/01/43/cat-2696363_960_720.jpg',
        'https://static.wikia.nocookie.net/brawlstars/images/6/66/Mandy_Brawl_Stars.png/revision/latest/scale-to-width-down/350?cb=20230526130231',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mayot_2022.jpg/800px-Mayot_2022.jpg',
        'https://cdn.pixabay.com/photo/2017/07/16/22/47/volleyball-2508464_960_720.jpg'
    ]},
    { question: 'Где тут Майот?', correct: 0, answers: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mayot_2022.jpg/800px-Mayot_2022.jpg',
        'https://static.wikia.nocookie.net/brawlstars/images/6/66/Mandy_Brawl_Stars.png/revision/latest/scale-to-width-down/350?cb=20230526130231',
        'https://cdn.pixabay.com/photo/2017/08/30/01/43/cat-2696363_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/07/16/22/47/volleyball-2508464_960_720.jpg'
    ]},
    { question: 'Где тут волейбол?', correct: 0, answers: [
        'https://cdn.pixabay.com/photo/2017/07/16/22/47/volleyball-2508464_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/08/30/01/43/cat-2696363_960_720.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mayot_2022.jpg/800px-Mayot_2022.jpg',
        'https://static.wikia.nocookie.net/brawlstars/images/6/66/Mandy_Brawl_Stars.png/revision/latest/scale-to-width-down/350?cb=20230526130231'
    ]}
];

function checkAnswer(element, isCorrect) {
    const result = document.getElementById('result');

    if (isCorrect) {
        result.innerHTML = "Правильный ответ!";
        result.style.backgroundColor = 'green';
        questionIndex++;
        if (questionIndex < questions.length) {
            setTimeout(nextQuestion, 1000);
        } else {
            showFinalMessage();
        }
    } else {
        result.innerHTML = "Неправильный ответ, попробуй снова!";
        result.style.backgroundColor = 'red';
    }

    result.style.display = 'block';
}

function nextQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById('question').textContent = questions[questionIndex].question;
        const options = document.querySelectorAll('.option img');
        const currentQuestion = questions[questionIndex];

        for (let i = 0; i < options.length; i++) {
            options[i].src = currentQuestion.answers[i];
        }
    }
}

function showFinalMessage() {
    const finalMessage = `
        <div class="final-message">
            <p>Все эти правильные ответы ассоциируются у меня с тобой. Мне нравятся твои вкусы, и я уважаю их, как и тебя саму. Люблю тебя, котеночек мой!</p>
            <img src="https://cdn.pixabay.com/photo/2018/04/12/13/53/cat-3313815_960_720.jpg" alt="Котик">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mayot_2022.jpg/800px-Mayot_2022.jpg" alt="Майот">
            <img src="https://static.wikia.nocookie.net/brawlstars/images/6/66/Mandy_Brawl_Stars.png/revision/latest/scale-to-width-down/350?cb=20230526130231" alt="Менди">
            <img src="https://cdn.pixabay.com/photo/2017/07/16/22/47/volleyball-2508464_960_720.jpg" alt="Волейбол">
        </div>
    `;
    document.getElementById('result').innerHTML = finalMessage;
}
