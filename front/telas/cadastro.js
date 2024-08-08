let criar = document.getElementById("criar");

criar.onclick = async function(e){
    e.preventDefault();

    let name = document.getElementById("namec").value;
    let user = document.getElementById("userc").value;
    let email = document.getElementById("emailc").value;
    let password = document.getElementById("passwordc").value;

    const response = await fetch('http://localhost:3000/api/login',{
        method: "POST",
        headers: {"Content-type" : "application/json:charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
        alert('Sucesso total');
    } else {
        alert('Não');
    }

}
