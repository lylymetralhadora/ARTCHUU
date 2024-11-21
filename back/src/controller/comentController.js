const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeComentarios(request, response) {
    const params = Array(
        request.body.usuario_id,
        request.body.comentarios,
        request.body.id_arte
    )

    let query = "INSERT INTO comentarios(usuario_id, content, id_arte"
}