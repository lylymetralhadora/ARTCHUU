document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);

    const postId = urlParams.get("id");

    console.log(postId)

    if(postId) {
        fetch(`http://localhost:3000/api/get/getartesbyid/${postId}`)
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                console.log(data.data)
                const postMain = document.getElementById("post");
                postMain.innerHTML = 
                `
                <div class="user">
                <h3>${data.data.nome}</h3>

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