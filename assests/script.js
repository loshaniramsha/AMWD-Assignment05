function setName(){
    var name=document.getElementById('name').value;
    if(name==""){
        document.getElementById('error').style="display:block"
    }else{
        document.cookie="username="+name;
        //console.log(document.cookie.split('=')[1]);
        window.location.href = window.location.href.replace("/index.html","")+"/html/questions.html";
    }
}
/*quiz app*/
const start_btn=document.querySelector(".start-btn button");
const info_box=document.querySelector(".info-box");
const exit_btn=document.querySelector(".buttons .quit");
const continue_btn=document.querySelector(".buttons .restart");
const quiz_box=info_box.querySelector(".buttons .restart")

start_btn.onclick=()=>{
    info_box.classList.add("activeInfo");
}
exit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo");
}
continue_btn.onclick=()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
}

