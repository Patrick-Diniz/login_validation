function logar() {
    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;

    localStorage.setItem("name", user);
    localStorage.setItem("password", password);

    if(user == "admin" && password == "admin") {
        alert("Sucesso");
        location.href = "pages/home/home.html"
    } else {
        alert("Usuário incorreto");
        localStorage.clear();
        location.reload();
    }
}
