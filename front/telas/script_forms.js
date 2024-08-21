const { response } = require("express");

let button = document.getElementById("enviar")

button.onclick = async function() {
    let form = document.getElementById("formulario");
    let dadosForm = new FormData(form);

    const response = await fetch('http://localhost:3000/api/store/pageinic', {
        method: "POST",
        body: dadosForm
    })

    let content = await response.json();

    if(content.sucess) {
        alert("Postado!")
    } else {
        alert("Algo deu errado")
        console.log(content.sql);
    }
}