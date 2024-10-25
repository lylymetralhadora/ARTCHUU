let entrar = document.getElementById("entrar");

entrar.addEventListener("click", async function(e) {
    e.preventDefault();

    const user = document.querySelector("#userc").value;
    const senha = document.querySelector("#passwordc").value;

    let dados = {user, senha};
    
    const response = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
    });
    
    const results = await response.json();

    if (results.success) {
        localStorage.setItem('', JSON.stringify(results.data))

        window.location.href = '../pageinic.html';
    } else {
        alert("nao deu :/")
    }
})