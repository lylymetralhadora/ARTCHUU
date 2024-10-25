const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function createCds(request, response) {
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha
    );
    
    console.log(params);
    const query = "INSERT INTO usuario (usuario, nome, email, senha) VALUES(?, ?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if (results) { 
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso total",
                data: results
            })
        } else {
            console.log(err);
            response
            .status(400)
            .json({
                sucess: false,
                message: "Nao",
                sql: err
            })
        }
    })
}

module.exports = {
    createCds
}