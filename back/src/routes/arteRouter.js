const router = require('express').Router();
const upload = require('../config/multer');

const {storeArte, getArtes} = require('../controller/arteController');

router.post('/store/artes', upload.single('imagem'), storeArte);
//router.get('/get/pageinic', getArtes);

module.exports = router;