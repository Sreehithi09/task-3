// Step 2: Interactive Quiz
const quizData = [
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },


  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Color Style Sheet", "Computer Style Sheet", "Creative Style Syntax"],
    correct: "Cascading Style Sheets",
  },

  {
    question: "What does HTML stands for?",
    options: [" Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "Hyperloop Text Markup Logic"],
    correct: "Hyper Text Markup Language"
  }
 
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizData.forEach((q, index) => {
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");

    const title = document.createElement("p");
    title.textContent = `${index + 1}. ${q.question}`;
    questionEl.appendChild(title);

    q.options.forEach(option => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${option}" />
        ${option}
      `;
      questionEl.appendChild(label);
      questionEl.appendChild(document.createElement("br"));
    });

    container.appendChild(questionEl);
  });
}

function submitQuiz() {
  let score = 0;

  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === q.correct) {
      score++;
    }
  });

  document.getElementById("quiz-result").textContent = `You scored ${score} out of ${quizData.length}`;
}

loadQuiz();

// Step 3: Fetch Data from an API (Joke)
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Failed to fetch joke.";
      console.error(err);
    });
}
