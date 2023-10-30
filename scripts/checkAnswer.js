// questionSet - document.querySelectorAll: input[name = "<question number>"]
// answer - string: answer to the question
// correctElement - string: id of the element for a correct answer
// incorrectElement - string: id of the element for an incorrect answer
function checkAnswer(questionSet, answer, correctElement) {
    for (const selected of questionSet) {
        selected.addEventListener('change', () => {

            if (selected.value == answer) {
                document.getElementById(correctElement).style.display = "flex";
            } else {
                document.getElementById(correctElement).style.display = "none";
            }

        });
    }
}

checkAnswer(document.querySelectorAll('input[name = "q1"]'), "3:2", "q1-correct");
