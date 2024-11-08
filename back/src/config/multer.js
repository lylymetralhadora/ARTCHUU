const multer = require('multer');
 
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
            cb(null, '../src/uploads');
        },
        filename: function (req, file, cb) {
            let nome_sem_espacos = file.originalname.trim();
            return cb(null, Date.now() + '_' + nome_sem_espacos);
        }
});
 
 
let upload = multer({ storage: storage });
 
module.exports = upload;