const connection = require('../config/db');

async function userLog(request, response) {

    const params = Array(
        request.body.user
    );
    console.log(params);
    const query = "SELECT * FROM usuarios where username = ? limit 1";

    connection.query(query, params, (err, results) => {
        console.log("results", results)
        try {
            if (results.length > 0) {
                console.log(results)
                if (request.body.senha === results[0].senha) {
                    response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso bb`,
                            data: results[0]
                        });
                } else {
                    console.log('erro', err)
                    response
                        .status(400)
                        .json({
                            success: false,
                            message: `Nao`
                        });
                }
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `nao encontrado`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { //pra caso não aconteça erros na execução
            response
                .status(400).json({
                    success: false,
                    message: "erro",
                    query: err,
                    sqlMessage: err
                })
        }
    })
}

module.exports = {
    userLog
}