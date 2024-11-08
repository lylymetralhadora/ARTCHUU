//const { stringify } = require("querystring");

let button = document.getElementById("postar")

button.onclick = async function (event) {
  event.preventDefault();
  
  console.log("clicou")

  const arte = document.querySelector('#imagem').files[0];
  const legenda = document.querySelector('#legenda');
  const usuario_id = localStorage.getItem('userId');

  

  // const data = {
    // "imagem": imagem.name,
    // "legenda": legenda.value,
    // "usuario_id": usuario.value
  // };

  let formData = new FormData();

  formData.append("file", arte);
  formData.append("legenda", legenda);
  formData.append("usuario_id", usuario_id);

  
  const response = await fetch('http://localhost:3000/api/store/artes', {
    method: "POST",
    body: formData,
  });
  
  const results = await response.json();
  
  if (results.success) {
    alert(results.message);
    window.location.href="../pageinic.html"
  } else {
    alert(results.message);
  }
}

