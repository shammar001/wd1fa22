const startButton = document.getElementsById('start-btn')
const nextButton = document.getElementsById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})

function startGame() {
	console.log('Started')
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}

function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText = question.question
}

function selectAnswer(){
	question.answers.forEach(answer =>{
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correc) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}

function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild
		(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
	   nextButton.classList.remove('hide')
    } else {
		startButton.innerText = 'Restart'
		startButton.classList.remove('hide')
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	}	else {
		element.classList.add('wrong')
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [
	{
		question: 'What is 9 + 9?',
		answers: [
			{ text: '18', correct: true },
			{ text: '4', correct: false },
			{ text: '2', correct: false },
			{ text: '9', correct: false },
		]
	}, 
	{
		question: "Is web development hard?",
		answers: [
			{ text: 'Not at all', correct: false },
			{ text: '100%, Yes.', correct: true },
			{ text: 'What is Web Development?', correct: false },
			{ text: 'Not sure', correct: false }
		]
	},
	{
		question: "The years 1989 and 2023 dates of the week, fall on the same day."
		answers: [
			{ text: 'That is impossible.', correct: false },
			{ text: 'Yes!', correct: true }
		]
	},
	{
		question: "What is 3 x 3?"
		answers: [
			{ text: '13', correct: false },
			{ text: '9', correct: true },
			{ text: '7', correct: false },
			{ text: '3', correct: false }
		]
	},
	{
		question: "What is the best holiday?"
		answers: [
			{ text: 'Labor Day', correct: false },
			{ text: 'Halloween', correct: true },
			{ text: 'Easter', correct: false },
			{ text: 'Presidents Day', correct: false }
		]
	}
]
