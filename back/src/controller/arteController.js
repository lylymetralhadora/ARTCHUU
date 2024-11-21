const connection = require('../config/db');
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const uploadPath = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

async function storeArte(request, response) {
    const { legenda, imagem } = request.body;
    const arte = request.files.imagem;

    // const arte = request.body.file;
    if (!request.files) {
        return response.status(400).json({
            success: false,
            message: "sem arquivo"
        })
    }
    const arteNome = Date.now() + path.extname(arte.name);

    arte.mv(path.join(uploadPath, arteNome), (erro) => {
        if (erro) {
            return response.status(400).json({
                success: false,
                message: "não movido"
            })
        }
        const params = Array(
            arteNome,
            request.body.legenda,
            request.body.usuario_id
        );
        console.log(params);

        const query = "INSERT INTO artes(arte, legenda, usuario_id) VALUES(?, ?, ?);";

        connection.query(query, params, (err, results) => {
            if (results) {
                response
                    .status(200).json({
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
        })
    });
}
async function getArtes(request, response) {
    // console.log("Entrou aqui")
    const query = "SELECT * FROM artchuu.artes order by id desc";

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
async function getArtesById(request, response) {
    const params = Array (
        request.params.id
    )

    const query = "SELECT artes.id AS id, artes.arte AS imagem, artes.legenda AS legenda, usuarios.nome  FROM artes, usuarios  WHERE artes.usuario_id = usuarios.id AND artes.id = ?";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results[0]
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
    getArtes,
    getArtesById
}