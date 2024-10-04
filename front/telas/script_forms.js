let button = document.getElementById("postar")

button.onclick = async function(event) {
    event.preventDefault();

    console.log("entrou no botao")

    const imagem = document.getElementById('imagem').files[0];
    const legenda = document.getElementById("legenda");

    const data = {imagem, legenda}
    
    let formData = new FormData();

    formData.append('imagem', imagem);
    formData.append('legenda', legenda);

    const response = await fetch('http://localhost:3000/api/store/artes', {
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        },
        body: formData
    })

    const results = await responde.json();

    if(results.success) {
    alert(results.message)
  } else {
    alert(results.message)
  }
}