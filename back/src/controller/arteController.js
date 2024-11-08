const connection = require('../config/db');


async function storeArte(request, response) {
    const {legenda, usuario_id} = request.body;
    console.log('dados:', legenda, usuario_id);
    const arte = request.file.filename;
    console.log('dado arte:', arte);


    let params = Array(
        arte,
        legenda,
        usuario_id
    );
        
    let query = "INSERT INTO artes(arte, legenda, usuario_id) VALUES(?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400).json({
                success: false,
                message: "Sem Sucesso",
                data: err
        });
    }
    });
}
async function getArtes(request, response) {
    console.log("Entrou aqui")
    const query = "SELECT * FROM artes order by id desc";

    connection.query(query, (err, results) => {
            if (results) {
                response.status(200).json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
            } else {
                response.status(400).json({
                    success: false,
                    message: "Erro!",
                    sql: err,
                })
    
            }
        }
    )
}
module.exports = {
    storeArte,
    getArtes
}