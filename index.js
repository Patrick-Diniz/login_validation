function logar() {
    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;

    localStorage.setItem("name", user);
    localStorage.setItem("password", password);

    if(user == "admin" && password == "admin") {
        alert("Sucesso");
<<<<<<< HEAD
        location.href = "pages/home/home.html"
=======
        location.href = "./pages/home/home.html"
>>>>>>> 8f735648eea3c69b3d74ce1ab0a5e5732b3896ab
    } else {
        alert("Usuário incorreto");
        localStorage.clear();
        location.reload();
    }
}
