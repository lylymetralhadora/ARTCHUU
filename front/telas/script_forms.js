//const { stringify } = require("querystring");

let button = document.getElementById("postar")

button.onclick = async function (event) {
  event.preventDefault();
  
  console.log("clicou")

  const arte = document.getElementById('imagem').files[0].name;
  console.log('imagem:', arte);
  const legenda = document.getElementById('legenda').value;
  console.log('legenda:', legenda);
  const usuario_id = localStorage.getItem('userId');
  console.log('id:', usuario_id);

  

  // const data = {
    // "imagem": imagem.name,
    // "legenda": legenda.value,
    // "usuario_id": usuario.value
  // };

  let formData = new FormData();

  formData.append("file", arte);
  formData.append("legenda", legenda);
  formData.append("usuario_id", usuario_id);

  console.log('imagem_1:', arte);
  console.log('legenda_1:', legenda);
  console.log('id_1:', usuario_id);

  
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

