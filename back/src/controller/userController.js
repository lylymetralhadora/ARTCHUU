const connection = require('../config/db');
const dotenv = require('dotenv').config();


async function cadastroUsuario(request, response) {

    let params = Array(
        request.body.nome,
        //request.body.foto,
        request.body.username,
        request.body.email,
        request.body.senha
    )


    let query = "INSERT INTO usuarios(nome, username, email, senha) VALUES(?, ?, ?, ?);";

    connection.query(query, params, (err, results) => {
        console.log(query);
        if(results) {
            response
            .status(201)
            .json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message:"Sem Sucesso",
                data: err
        })
    }
    })
}

module.exports = {
    cadastroUsuario
}