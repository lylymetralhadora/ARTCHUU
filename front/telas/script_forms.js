//const { stringify } = require("querystring");

let button = document.getElementById("postar")

button.onclick = async function (event) {
  event.preventDefault();
  
  console.log("clicou")

  const imagem = document.getElementById('imagem').files[0];
  const legenda = document.getElementById('legenda');
  const usuario = localStorage.getItem('userId')
  let formData = new FormData();
  formData.append('imagem', imagem.name);
  formData.append('legenda', legenda.value);
  formData.append('usuario', usuario);
  console.log(imagem.name, legenda.value, usuario);
  console.log(formData);
  
  const response = await fetch('http://localhost:3000/api/store/artes', {
    method: "POST",
    body: formData
  });
  
  const results = await response.json();

  if (results.success) {
    alert(results.message)
  } else {
    alert(results.message)
  }
}

function savePost(usuario, arte, legenda) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
  const newPost = {
    usuario: usuario,
    imagem: arte,
    legenda: legenda
  }

  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));

}

// document.getElementById('formulario').addEventListener('submit', function(event) => {
//   preventDefault();
// })