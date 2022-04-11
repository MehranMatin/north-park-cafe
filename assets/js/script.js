
/* Starter Modal Code */
///////////////////////////
// var modal = document.getElementsByClassName("faqAnswer");
// var modalTrigger = document.getElementsByClassName("faqQuestion");
// var closeModal = document.getElementsByClassName('closeModal')

// modalTrigger.onclick = function() {
//     modal.style.display = 'block';
// }

// closeModal.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }

// modalTrigger


/* TEST CODE TO HIDE/SHOW */
///////////////////////////
// displayToggleHandler = function () {
//     var questions = document.querySelectorAll('.faqQuestion');
//     var answers = document.querySelectorAll('.faqAnswer');
//     console.log(questions);
//     console.log(answers);

//     for (var i = 0; i < questions.length; i++) {
//         questions[i].addEventListener('click', function() {
//             console.log(answers[i]);
//             if (answers[i].classList.contains('hidden')) {
//                 answers[i].className.replace('hidden', 'visible');
//                 console.log('switched to visible')
//             } else {
//                 answers[i].className.replace('visible', 'hidden');
//                 console.log('switched to hidden')
//             }
//         })
//     }
// }

// displayToggleHandler();


/* TEST CODE TO HIDE/SHOW */
///////////////////////////
// var question = document.querySelector('.faqQuestion');
// console.log(question);
// var answer = document.querySelector('.faqAnswer');

// function toggleVisibility(answer) {
//     if (answer.className === 'faqAnswer hidden') {
//         answer.className = 'faqAnswer visible';
//     } else {
//         answer.className = 'faqAnswer hidden';
//     }
// }

// question.addEventListener('click', function() {
//     toggleVisibility(answer);
// })




// var displayHandler = function () {

//     function toggleDisplayProperty(clickTargetEL, displayEl) {
//         clickTargetEL.addEventListener('click', function() {
//             toggleVisibility(displayEl);
//         })
//     }
// }

// var hiddenEl = answer[i].classList.replace("hidden", "visible");
// question[i].outerHTML = hiddenEl;