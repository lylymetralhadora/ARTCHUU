const { Connection } = require('mysql2/typings/mysql/lib/Connection');
const connection = require('../config/db_pub.sql');
const dotenv = require('dotenv').config();

const fs = require('fs');
const path = require('path');

const uploadPath = path.join(__dirname, '..', 'uploads');
if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}
async function storeArte(request, response) {
    if(!request.files) {
        return response.status(400).json({
            success: false,
            message: "Arquivo não enviado"
        });
    }
    const imagem = request.files.arte;
    const imagemNome = Date.now() + path.extname(imagem.name)
    arte.mv(path.join(uploadPath, imagemNome), (erro) => {
        if(erro) {
            return response.status(400).json({
                success: false,
                message: "erro ao mover o arquivo"
            });
        }

        const params = Array(
            imagemNome,
            request.body.legenda
        )

        const query = "INSERT INTO artes(imagem, legenda) VALUES(?, ?, ?, ?)";
        connection.query(query, params, (err, results) => {
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
    })


    })
}

async function getArtes(request, response) {
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