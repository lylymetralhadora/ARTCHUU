let button = document.getElementById("postar")

button.onclick = async function(e) {
    e.preventDefault();

    let form = document.getElementById("formulario");

    let dadosForm = new FormData(form);

    console.log(dadosForm)

    const response = await fetch('http://localhost:3000/api/store/artes', {
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