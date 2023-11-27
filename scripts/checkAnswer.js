// questionNumber - string: value of name for <input>
// answer - string: answer to the question
// correctElement - string: id of the element for a correct answer
// incorrectElement - string: id of the element for an incorrect answer
function checkAnswer(questionNumber, answer, correctElement, incorrectElement) {
    questionSet = document.querySelectorAll(`input[name = ${questionNumber}]`);
    
    for (const selected of questionSet) {
        selected.addEventListener('change', () => {

            if (selected.value == answer) {
                document.getElementById(incorrectElement).style.display = "none";
                document.getElementById(correctElement).style.display = "flex";
            } else {
                document.getElementById(correctElement).style.display = "none";
                document.getElementById(incorrectElement).style.display = "flex";
            }

        });
    }
}

// Example
// checkAnswer("q1", "3:2", "q1-correct");
