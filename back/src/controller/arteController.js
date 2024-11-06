//const { Connection } = require('mysql2/typings/mysql/lib/Connection');
const connection = require('../config/db');
const dotenv = require('dotenv').config();

const fs = require('fs');
const { request } = require('http');
const path = require('path');

// const uploadPath = path.join(__dirname, '..', 'uploads');
// if(!fs.existsSync(uploadPath)) {
//     fs.mkdirSync(uploadPath);
// }

const storageArte = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, './uploads');
    },
    filename:(request, file, cb) => {
        cb(null, Date.now() + '-' + arte.legenda);
    }
});

const upload = multer({storageArte: storageArte});
app.post('/upload', upload.single('image'), (request, response) => {
    if (request.file) {
        response.json({ message: 'Arquivo enviado com sucesso' });
    } else {
        response.status(400).json({ error: 'Nenhum arquivo selecionado' });
    }
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});

async function storeArte(request, response) {
    let params = Array(
        request.body.imagem,
        request.body.legenda,
        request.body.usuario_id,
    )
        
        console.log(params);
    let query = "INSERT INTO artes(arte, legenda, usuario_id) VALUES(?, ?, ?);";

    connection.query(query, params, (err, results) => {
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
                message: " Sem Sucesso",
                data: err
        })
    }
    })
}

//     if(!request) {
//         return response.status(400).json({
//             success: false,
//             message: "Arquivo não enviado"
//         });
//     }
//     const imagem = request.files.arte;
//     console.log(imagem)
//     const imagemNome = Date.now() + path.extname(imagem.name)
//     arte.mv(path.join(uploadPath, imagemNome), (erro) => {
//         if(erro) {
//             return response.status(400).json({
//                 success: false,
//                 message: "erro ao mover o arquivo"
//             });
//         }

//         const params = Array(
//             imagemNome,
//             request.body.legenda
//         )

//         const query = "INSERT INTO artes(imagem, legenda) VALUES(?, ?, ?, ?)";
//         connection.query(query, params, (err, results) => {
//             if (results) {
//                 response.status(200).json({
//                     success: true,
//                     message: "Sucesso!",
//                     data: results
//                 })
//             } else {
//                 response.status(400).json({
//                     success: false,
//                     message: "Erro!",
//                     sql: err,
//                 })
    
//             }
//     })


//     })
// }

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