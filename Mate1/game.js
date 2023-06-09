// Definir preguntas y respuestas correctas para cada nivel
const questions = [
    { question: '10 + 10', answer: '20' },
    { question: '20 + 10', answer: '30' },
    { question: '30 + 10', answer: '40' },
    { question: '40 + 10', answer: '50' },
    { question: '50 + 10', answer: '60' },
    { question: '60 + 10', answer: '70' },
    { question: '70 + 10', answer: '80' },
    { question: '80 + 10', answer: '90' },
    { question: '90 + 10', answer: '100' },
    { question: '100 + 10', answer: '110' }
  ];

  // Función para mezclar las preguntas al azar
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  let currentQuestion = 0;
  let score = 0;
  let attempts = 0;
const maxAttempts = 10;
  
  const questionElement = document.getElementById('question');
  const answerInput = document.getElementById('answer');
  const scoreElement = document.getElementById('score');
  const gameoverElement = document.getElementById('gameover');
  const resultImage = document.getElementById('resultImage');
  const resultText = document.getElementById('resultText');
  const finalScore = document.getElementById('finalScore');
  
  // Función para mostrar la pregunta actual
  function showQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
  }
  
  // Función para comprobar la respuesta ingresada
  function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestion].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
    }

    attempts++;
  
    currentQuestion++;
    answerInput.value = '';
  
    if (currentQuestion < questions.length && attempts < maxAttempts) {
        showQuestion();
      } else {
        endGame();
      }
  
    scoreElement.textContent = 'Puntuación: ' + score;
  }
  
  // Función para finalizar el juego
  function endGame() {
    gameoverElement.style.display = 'block';
  
    if (score >= 7) {
      resultImage.src = 'congrats_green.jpg';
      resultText.textContent = '¡Felicitaciones!';
      finalScore.textContent = 'Tu puntuación es: ' + score;
      finalScore.classList.add('green');
    } else {
      resultImage.src = 'congrats_red.jpg';
      resultText.textContent = 'Ánimo, sigue practicando.';
      finalScore.textContent = 'Tu puntuación es: ' + score;
      finalScore.classList.add('red');
    }
  }

  // Mezclar las preguntas al azar antes de iniciar el juego
shuffleQuestions();
  
  // Iniciar el juego mostrando la primera pregunta
  showQuestion();
  