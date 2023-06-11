document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const surveyScreen = document.getElementById("surveyScreen");
    const thankYouScreen = document.getElementById("thankYouScreen");
    const startBtn = document.getElementById("startBtn");
    const previousBtn = document.getElementById("previousBtn");
    const skipBtn = document.getElementById("skipBtn");
    const nextBtn = document.getElementById("nextBtn");
    const questionNumberEl = document.getElementById("questionNumber");
    const questionTextEl = document.getElementById("questionText");
  
    let currentQuestion = 1;
  
    startBtn.addEventListener("click", function() {
      welcomeScreen.style.display = "none";
      surveyScreen.style.display = "block";
    });
  
    previousBtn.addEventListener("click", function() {
      if (currentQuestion > 1) {
        currentQuestion--;
        updateQuestion();
      }
    });
  
    nextBtn.addEventListener("click", function() {
      if (currentQuestion < 5) {
        currentQuestion++;
        updateQuestion();
      } else {
        showThankYouScreen();
      }
    });
  
    skipBtn.addEventListener("click", function() {
      if (currentQuestion < 5) {
        currentQuestion++;
        updateQuestion();
      } else {
        showThankYouScreen();
      }
    });
  
    function updateQuestion() {
      questionNumberEl.textContent = currentQuestion;
      questionTextEl.textContent = getQuestionText(currentQuestion);
  
      previousBtn.disabled = currentQuestion === 1;
    }
  
    function showThankYouScreen() {
      surveyScreen.style.display = "none";
      thankYouScreen.style.display = "block";
      setTimeout(function() {
        resetSurvey();
      }, 5000);
    }
  
    function resetSurvey() {
      currentQuestion = 1;
      updateQuestion();
      thankYouScreen.style.display = "none";
      welcomeScreen.style.display = "block";
    }
  
    function getQuestionText(questionNumber) {
      switch (questionNumber) {
        case 1:
          return "How satisfied are you with our products?";
        case 2:
          return "How fair are the prices compared to similar retailers?";
        case 3:
          return "How satisfied are you with the value for money of your purchase?";
        case 4:
          return "On a scale of 1-10, how likely are you to recommend us to your friends and family?";
        case 5:
          return "What could we do to improve our service?";
        default:
          return "";
      }
    }
  
    updateQuestion();
  });
  