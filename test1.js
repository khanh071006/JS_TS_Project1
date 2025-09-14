const element = document.getElementById("myBtn");
const bt2 = document.getElementById("bt2");
const a = document.getElementById("Mytext");
const sol = () => {
    a.innerText = "Changed";
}

const sol2 = () => {
    a.innerText = "Video 52";
}

element.addEventListener("click",sol);
bt2.addEventListener("click",sol2);