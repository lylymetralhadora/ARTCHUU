let button = document.getElementById("postar")

button.onclick = async function(event) {
    event.preventDefault();

    console.log("entrou no botao")

    const imagem = document.getElementById('imagem').files[0];
    const legenda = document.getElementById("legenda");
    //let nomeImagem = imagem.name <--- nome da imagem
    const data = {imagem, legenda}

    /*script_forms.js:11 Uncaught (in promise) ReferenceError: nomeImagem is not defined
    at button.onclick (script_forms.js:11:19)*/
    
    let formData = new FormData(data);

    formData.append('imagem', imagem);
    formData.append('legenda', legenda);

    console.log(formData);

    const response = await fetch('http://localhost:3000/api/store/artes', {
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        },
        body: formData
    })

    const results = await response.json();

    if(results.success) {
    alert(results.message)
  } else {
    alert(results.message)
  }
}