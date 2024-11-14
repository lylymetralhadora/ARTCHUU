//const { stringify } = require("querystring");

let button = document.getElementById("postar")

button.onclick = async function (event) {
  event.preventDefault();
  
  console.log("clicou")
  
  let usuario_id = localStorage.getItem('userId');
  console.log(usuario_id)
  let form = document.getElementById('formulario');
  let fDados = new FormData(form);
  fDados.append("usuario_id", usuario_id);
  // let arte = document.getElementById('imagem').files[0].value;
  // console.log('imagem:', arte);
  // let legenda = document.getElementById('legenda').value;
  // console.log('legenda:', legenda);
  // console.log('id:', usuario_id);

  
  // const data = {
    // "imagem": imagem.name,
    // "legenda": legenda.value,
    // "usuario_id": usuario.value
  // };

  // fDados.append("file", arte);
  // fDados.append("legenda", legenda);

  // console.log('imagem_1:', arte);
  // console.log('legenda_1:', legenda);
  // console.log('id_1:', usuario_id);

  
  const response = await fetch('http://localhost:3000/api/store/storeArte', {
    method: "POST",
    body: fDados
  });
  
  const results = await response.json();
  
  if (results.success) {
    alert(results.message);
    window.location.href="../pageinic.html"
  } else {
    alert(results.message);
    console.log(results.sql);
  }
}

