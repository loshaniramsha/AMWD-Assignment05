const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box");
const result_box = document.querySelector(".result-box");

// When Start button is clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
    console.log("clicked");
}

// When Exit button is clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

// When Continue button is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(0);
    queCounter(1);
}


// Example of how to show the result box
const showResult = () => {
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
}

// Example of how to hide the result box
const hideResult = () => {
    result_box.classList.remove("activeResult");
}

// Attach event listeners to result box buttons (optional)
const replay_btn = result_box.querySelector(".restart");
const quit_btn = result_box.querySelector(".quit");

replay_btn.onclick = () => {
    hideResult();
    quiz_box.classList.add("activeQuiz");
    // Reset quiz logic here if necessary
}

quit_btn.onclick = () => {
    hideResult();
    // Logic for quitting the quiz
}

let question_count = 1;
let que_numb=1;

const next_btn=quiz_box.querySelector(".next-btn");

next_btn.onclick = () => {
    if (question_count < question.length - 1) {
        question_count++;
        que_numb++;
        showQuestion(question_count);
        queCounter(que_numb);
    } else {
        showResult();
    }
}

function showQuestion(index) {
    const que_text = document.querySelector(".que-text");
    const option_list = document.querySelector('.option-list');

    let que_tag = '<span>' + question[index].numb+"."+question[index].question + '</span>';
    let option_tag =
        '<div class="option">' + question[index].option[0] + '<span></span></div>' +
        '<div class="option">' + question[index].option[1] + '<span></span></div>' +
        '<div class="option">' + question[index].option[2] + '<span></span></div>' +
        '<div class="option">' + question[index].option[3] + '<span></span></div>';

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option=option_list.querySelectorAll(".option");

    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}







/*showQuestion(question_count);*/
function queCounter(index) {
    const bottom_ques_counter=quiz_box.querySelector(".total-que");
    let totalQuesCountTag='<span><p>'+question_count +'</p>of<p>'+question.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML=totalQuesCountTag;
}