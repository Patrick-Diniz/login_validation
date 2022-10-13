let userName = localStorage.getItem("name");

let userText = document.querySelector("#username");

userText.textContent = userName;

function logout() {
    location.href = "../../index.html";
    
    localStorage.clear();
}