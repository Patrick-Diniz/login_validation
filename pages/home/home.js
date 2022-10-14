let userName = localStorage.getItem("name");

let userText = document.querySelector("#username");

userText.textContent = userName;

function logout() {
    location.href = "../../index.html";
    
<<<<<<< HEAD
    localStorage.clear();
=======
    location.href = "../../index.html";
>>>>>>> 8f735648eea3c69b3d74ce1ab0a5e5732b3896ab
}