// script.js
let questions = [
    {
        question: "What is the most popular programming language in the world?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: 2
    },
    {
        question: "What is the purpose of the `git init` command?",
        options: ["To create a new Git repository", "To commit changes to a repository", "To push changes to a remote repository", "To pull changes from a remote repository"],
        answer: 0
    },
    {
        question: "What is the difference between `var`, `let`, and `const` in JavaScript?",
        options: ["They are all used to declare variables", "They are all used to declare constants", "They have different scopes and hoisting behaviors", "They are all used to declare functions"],
        answer: 2
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: ["To refer to the global object", "To refer to the current function", "To refer to the current object", "To refer to the parent object"],
        answer: 2
    },
    {
        question: "What is the difference between a `stack` and a `queue` data structure?",
        options: ["A stack is a Last-In-First-Out (LIFO) data structure, while a queue is a First-In-First-Out (FIFO) data structure", "A stack is a FIFO data structure, while a queue is a LIFO data structure", "A stack is used for recursion, while a queue is used for iteration", "A stack is used for iteration, while a queue is used for recursion"],
        answer: 0
    },
    {
        question: "What is the purpose of the `async/await` syntax in JavaScript?",
        options: ["To make synchronous code asynchronous", "To make asynchronous code synchronous", "To handle errors in asynchronous code", "To improve the performance of asynchronous code"],
        answer: 1
    },
    {
        question: "What is the difference between `null` and `undefined` in JavaScript?",
        options: ["`null` represents an empty value, while `undefined` represents an uninitialized variable", "`null` represents an uninitialized variable, while `undefined` represents an empty value", "`null` and `undefined` are interchangeable", "There is no difference between `null` and `undefined`"],
        answer: 0
    },
    {
        question: "What is the purpose of the `map()` method in JavaScript?",
        options: ["To filter an array", "To sort an array", "To transform an array", "To reduce an array"],
        answer: 2
    },
    {
        question: "What is the difference between a `class` and a `function` in JavaScript?",
        options: ["A class is a blueprint for creating objects, while a function is a block of code that can be executed", "A class is a block of code that can be executed, while a function is a blueprint for creating objects", "A class is used for inheritance, while a function is used for polymorphism", "A class is used for polymorphism, while a function is used for inheritance"],
        answer: 0
    },
    {
        question: "What is the purpose of the `try/catch` block in JavaScript?",
        options: ["To handle errors and exceptions", "To improve the performance of code", "To make code more readable", "To reduce the complexity of code"],
        answer: 0
    },
    // Add more questions here
];
let currentQuestion = 0;
let score = 0;
document.getElementById("question").innerText = questions[currentQuestion].question;
document.getElementById("options").innerHTML = "";
questions[currentQuestion].options.forEach((option, index) => {
    let li = document.createElement("li");
    li.innerHTML = `<input type="radio" id="option${index + 1}" name="option"><label for="option${index + 1}">${option}</label>`;
    document.getElementById("options").appendChild(li);
});
document.getElementById("options").addEventListener("click", () => {
    let selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
        let answers = questions[currentQuestion].options.indexOf(selectedOption.nextElementSibling.innerText);
        if (answers === questions[currentQuestion].answer) {
            score++;
            const checkedLabel = document.querySelector('#options input[type="radio"]:checked + label');
            checkedLabel.style.backgroundColor = 'green';
            const progressBar = document.getElementById(`bar-${currentQuestion+1}`);
            progressBar.style.backgroundColor = '#06c258';
            document.getElementById("result").innerText = `Correct!`;
            document.getElementById("result").style.color = `#06c258`;
            document.getElementById("result").classList.remove('hidden');
            document.getElementById("result").classList.add('visible');
            if(currentQuestion != 9){
            setTimeout(() => {
            document.getElementById("result").classList.remove('visible');
            document.getElementById("result").classList.add('hidden');
            }, 2000);
            }
        }else{
            const checkedLabel = document.querySelector('#options input[type="radio"]:checked + label');
            checkedLabel.style.backgroundColor = 'darkred';
            const progressBar = document.getElementById(`bar-${currentQuestion+1}`);
            progressBar.style.backgroundColor = 'red';
            document.getElementById("result").innerText = `Incorrect!`;
            document.getElementById("result").style.color = `red`;
            document.getElementById("result").classList.remove('hidden');
            document.getElementById("result").classList.add('visible');
            if(currentQuestion != 9){
                setTimeout(() => {
                document.getElementById("result").classList.remove('visible');
                document.getElementById("result").classList.add('hidden');
                }, 2000);
                }
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(() => {
            document.getElementById("question").innerText = questions[currentQuestion].question;
            document.getElementById("options").innerHTML = "";
            questions[currentQuestion].options.forEach((option, index) => {
                let li = document.createElement("li");
                li.innerHTML = `<input type="radio" id="option${index + 1}" name="option"><label for="option${index + 1}">${option}</label>`;
                document.getElementById("options").appendChild(li);
            });
        }, 2000);
        } else {
            setTimeout(() => {
            if(score <=5){
            document.getElementById("result").style.color = `red`;
            document.getElementById("result").innerText = `You scored ${score} out of ${questions.length} You can do Better!`;
             } else{
                document.getElementById("result").style.color = `#06c258`;
            document.getElementById("result").innerText = `You scored ${score} out of ${questions.length} Great Job!`;
             }
            }, 2000);
        }
    }
});

function startCountdown(seconds) {
    let countdownElement = document.getElementById('time');
    let remainingTime = seconds;

    const interval = setInterval(() => {
        countdownElement.textContent = remainingTime;
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(interval);
            countdownElement.textContent = 'Go!';
            document.getElementById("countdown").style.display = "none";
        }
    }, 1000);
}
   



