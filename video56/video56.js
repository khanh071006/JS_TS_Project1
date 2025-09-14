const bt1 = document.getElementById("bt1");
const pw = document.getElementById("pw");
const name = document.getElementById("name");


bt1.addEventListener("click",() => {
    if (name.value === "donggiakhanh" && pw.value === "123456"){
        alert("Login Successful");
        window.location.href= "redirect.html"
    }
    else{
        alert("Login False");
        name.style.borderColor = "red";
        pw.style.borderColor = "red"; 
    }
})