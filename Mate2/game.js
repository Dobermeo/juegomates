// Función para generar una suma al azar entre dos números
function generateRandomSum(min, max) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const sum = num1 + num2;
    return { num1, num2, sum };
  }
  
  // Función para generar las preguntas y respuestas para cada nivel
  function generateQuestions() {
    const questions = [];
    for (let i = 0; i < 10; i++) {
      const sum = generateRandomSum(10, 99);
      const question = `${sum.num1} + ${sum.num2}`;
      const answer = sum.sum.toString();
      questions.push({ question, answer });
    }
    return questions;
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
  
  // Generar las preguntas al azar para cada nivel
  const questions = generateQuestions();
  
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
  
  // Iniciar el juego mostrando la primera pregunta
  showQuestion();
  