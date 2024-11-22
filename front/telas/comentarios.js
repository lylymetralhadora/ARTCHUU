document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);

    const arteId = urlParams.get("id");

    console.log(arteId)

    if (arteId) {
        fetch(`http://localhost:3000/api/get/getartesbyid/${arteId}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    const arteMain = document.getElementById("post");
                    arteMain.innerHTML =
                        `
                <div class="user">
                <h3>${data.data.name}</h3>

                <div class="conteudo">
                    <img src="../../back/src/uploads/${data.data.imagem}"></img>
                    <p>${data.data.legenda}</p>
                </div>
                `;

                    const comentsF = document.getElementById("comentarios");
                    comentsF.innerHTML =
                        `
                <div class="cc">
                <form id="respostas">
                    <input type="text" placeholder="comentar" id="resput"></input>
                    <button id="send" type="submit">pub</button>
                </form>
                </div>

                <div id="sendlist"> 
                    <h3>coments</h3>
                    <div class="comentss>
                    
                    </div>
                </div>
                `;

                    const form = document.getElementById('respostas');
                    form.addEventListener('submit', publicar);
                } else {
                    const postMain = document.getElementById('comentarios');
                    postMain.innerHTML = `sem post!`;
                }
            });
    }
})
async function sComment (request) {

    const response = await fetch('http://localhost:3000/api/get/comment/${arteId}');
    const result = await response.json();
    
    if (result.success) {
        const listCc = document.querySelector('.comentarios')
        result.data.forEach(comentarios => {
        const cComment = document.createElement('div');
        cComment.className = 'comentario';
        
        listCc.appendChild(cComment);
        
        const urlParams = new URLSearchParams(window.location.search);
        
        const comentario_id = comentarios.id
        
    })
}
}

async function publicar(e) {
    e.preventDefault();
    const urlParams = new URLSearchParams
    const arteId = urlParams.get("id");
    
    console.log(arteId)

    let comentario = document.getElementById("resput").value;
    let id_user = localStorage.getItem("userId");
    console.log(id_user);
    let arte_id = parseInt(arteId)

    let dados = { id_user, comentario, arte_id }
    console.log(dados)

    const response = await fetch('http://localhost:3000/api/store/comentarios', {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if (content.success) {
        alert("sucesso!!")
        window.location.reload(true);
    } else {
        alert("nao enviado")
        console.log(content.sql)
    }
}
