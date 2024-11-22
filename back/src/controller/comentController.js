const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeComentarios(request, response) {
    const params = Array(
        request.body.usuario_id,
        request.body.comentarios,
        request.body.id_arte
    )

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
    const id_arte = request.params.id_arte;

    const query = `
    SELECT usuarios.nome, comentarios.*
    FROM comentarios
    INNER JOIN usuarios ON usuarios.id = comentarios.usuario_id
    INNER JOIN artes ON artes.id = comentarios.id_arte
    WHERE comentarios.usuario_id = usuarios.id AND comentarios.id_arte = ${id_arte};
    `
    console.log(results);
    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200).json({
                    success: true,
                    message: "sucesso bb",
                    data: JSON.stringify(results)
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

module.exports = {
    storeComentarios,
    getComentarios
}