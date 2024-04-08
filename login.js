let submitbutton = document.getElementById("submit");
let input = document.getElementById("input");
let correct = 0;
submitbutton.addEventListener("click", ()=>{
    verify(input.value);
});
function verify(v) {
    if (v =="haha") {
        document.getElementById("e").innerHTML = "Bypass code correct";
        document.getElementById("e").style.color = rgb(0,255,0);
        correct = 1;
    } else {    
        correct = 0;
        document.getElementById("e").innerHTML = "Bypass code incorrect";
        document.getElementById("e").style.color = rgb(255,0,0);
    }
    console.log(correct);
}
let getlink = document.getElementById("getlink");
getlink.addEventListener("click", ()=>{
    let str = window.location.href;
    navigator.clipboard.writeText(str);
});