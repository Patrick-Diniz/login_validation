let userName = localStorage.getItem("name");

let userText = document.querySelector("#username");

userText.textContent = userName;

function logout() {
    localStorage.clear();
    
    location.href = "../../index.html";
}