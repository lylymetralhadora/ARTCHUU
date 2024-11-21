let criar = document.getElementById("criar");

criar.addEventListener("click", async function(e){
    e.preventDefault();

    let nome = document.getElementById("namec").value;
    let foto = "null";
    let username = document.getElementById("userc").value;
    let email = document.getElementById("emailc").value;
    let senha = document.getElementById("passwordc").value;

    let data = {nome, username, email, senha};

    console.log(data)
    const response = await fetch('http://localhost:3000/api/create/user', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content);
    if (content.success) {
        alert('Sucesso total');
        window.location.href = './login.html';
    } else {
        alert('Não');
    }

})
