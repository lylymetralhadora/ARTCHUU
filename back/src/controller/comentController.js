const connection = require('../config/db');
const dotenv = require('dotenv').config();
//nunca mais mexer nessa função 
async function storeComentarios(request, response) {
    console.log(request.body);
    const params = [request.body.id_user, request.body.comentario, request.body.arte_id]
    console.log(params);
    let query = "INSERT INTO comentarios(usuario_id, content, id_arte) VALUES (?, ?, ?)"

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200).json({
                    success: true,
                    message: "sucesso bb",
                    data: results
                })
        } else {
            response
                .status(400).json({
                    success: false,
                    message: "nao rolou vius",
                    sql: err
                });
        }
    });
}

async function getComentarios(request, response) {
    const id_arte = request.params.id;

    const query = `
    SELECT usuarios.nome, comentarios.*
    FROM comentarios
    INNER JOIN usuarios ON usuarios.id = comentarios.usuario_id
    WHERE comentarios.id_arte = ${id_arte};
    `;

    connection.query(query, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "sucesso bb",
                data: results // Remove JSON.stringify
            });
        } else {
            response.status(400).json({
                success: false,
                message: "nao rolou vius",
                sql: err
            });
        }
    });
}


module.exports = {
    storeComentarios,
    getComentarios
}