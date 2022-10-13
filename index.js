function logar() {
    let user = document.querySelector("#name").value;

    localStorage.setItem("name", user);

    if(user == "admin") {
        alert("Sucesso");
        location.href = "pages/home/home.html"
    } else {
        alert("Usuário incorreto");
        localStorage.clear();
        location.reload();
    }
    
}