// // function next() {
// //   let list = document.createElement("li");
// //   document.getElementById("questions").appendChild(list);
// //   let p = document.createElement("p");
// //   list.appendChild(p);
// //   for (let i = 0; i < Questions[currQuestion].a.length; i++) {
// //     let ul = document.createElement("ul");
// //     let li = document.createElement("li");
// //     list.appendChild(ul);
// //     ul.appendChild(li);
// //     const choice = document.createElement("input");
// //     const choiceLabel = document.createElement("label");
// //     choice.type = "radio";
// //     choice.name = "answer";
// //     choice.value = i;
// //     choiceLabel.textContent = Questions[currQuestion].a[i].text;

// //     li.appendChild(choice);
// //     choicesdiv.appendChild(choiceLabel);
// //   }
// }

// let currentQuestion = 0;

// function displayQuestion() {
//   const totalQuestionsElement = document.getElementById("totalQuestions");
//   const questionElement = document.getElementById("question");
//   const optionsElement = document.getElementById("options");

//   totalQuestionsElement.textContent = `Total Questions: ${questions.length}`;
//   questionElement.textContent = `${currentQuestion + 1}. ${
//     questions[currentQuestion].question
//   }`;

//   optionsElement.innerHTML = "";
//   for (let i = 0; i < questions[currentQuestion].options.length; i++) {
//     const option = questions[currentQuestion].options[i];
//     const li = document.createElement("li");
//     const label = document.createElement("label");
//     const input = document.createElement("input");
//     input.type = "radio";
//     input.name = "question";
//     input.value = String.fromCharCode(65 + i);

//     label.appendChild(input);
//     label.innerHTML += `<span>${option}</span>`;
//     li.appendChild(label);
//     optionsElement.appendChild(li);
//   }
// }

// function next() {
//   // Your logic to check the user's answer for the current question goes here

//   // Move to the next question
//   currentQuestion++;

//   // Check if there are more questions
//   if (currentQuestion < questions.length) {
//     displayQuestion();
//   } else {
//     // No more questions, show final score or submit the quiz
//     // (You can implement this part based on your design)
//   }
// }

// function previous() {
//   // Your logic to handle the "Previous" button goes here

//   // Move to the previous question
//   currentQuestion--;

//   // Check if it's the first question or not
//   if (currentQuestion >= 0) {
//     displayQuestion();
//   } else {
//     // Already at the first question, no need to go further back
//     currentQuestion = 0;
//   }
// }

// Call the displayQuestion() function to show the first question when the page loads
// displayQuestion();

let currentQuestion = -1;
let score = 0;
const questions = [
  {
    question: "1). Inside which element do we put the JavaScript?",
    options: [
      "&lt;script&gt;",
      "&lt;javascript&gt;",
      "&lt;scripting&gt;",
      "&lt;js&gt;",
    ],
    answer: "A",
  },
  {
    question: "2). Which is the correct function in JavaScript?",
    options: ["(function)", "function()", "function a ()", "[function a ()]"],
    answer: "B",
  },
  {
    question: "3). What is the use of the &le;noscript &ge; tag in Javascript?",
    options: [
      "The contents are displayed by non-js-based browsers.",
      "Clear all the cookies and cache",
      "Both A and B",
      "None of the above",
    ],
    answer: "A",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: [
      "Throws an error",
      "Ignores the statements",
      "Gives a warning",
      "None of the above",
    ],
    answer: "B",
  },
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    options: ["Boolean ", "Undefind", "Object", "None of the above"],
    answer: "C",
  },
];
function next() {
  let l = questions.length;
  console.log(currentQuestion, l);
  if (currentQuestion === l - 1) {
    checkscore();
    document.getElementById("next").style.display = "none";
    document.getElementById("previous").style.display = "none";
    let btn = document.createElement("button");
    document.getElementById("btnbox").appendChild(btn);
    btn.innerHTML = "submit";
    btn.setAttribute("class", "btn");
    btn.addEventListener("click", submitbtn);
    function submitbtn() {
      document.getElementById("main").style.display = "none";
      document.getElementById("myscore").innerHTML = "your score is " + score;
      btn.style.display = "none";
    }
  } else {
    let bool = checkscore();
    if (bool === true) {
      currentQuestion += 1;
      shownewque();
    }
  }
}

function previous() {
  currentQuestion -= 1;
  shownewque();
}
function shownewque() {
  let que = document.getElementById("q1");
  que.innerHTML = questions[currentQuestion].question;
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");
  input1.innerHTML = questions[currentQuestion].options[0];
  input2.innerHTML = questions[currentQuestion].options[1];
  input3.innerHTML = questions[currentQuestion].options[2];
  input4.innerHTML = questions[currentQuestion].options[3];
}

function checkscore() {
  let a = questions[currentQuestion].answer;
  let b = document.querySelector('input[name="question1"]:checked');
  if (b === null) {
    document.getElementById("alert").innerHTML = "please select your ans";
    return false;
  } else {
    let ans = b.value;
    if (a.toLowerCase() === ans.toLowerCase()) {
      score++;
      console.log(score);
    }
    return true;
  }
}
currentQuestion++;
shownewque();
let count = questions.length;
console.log(count);
document.getElementById("count").innerHTML = count;
