const { Router } = require('express');
const router = Router();

const { storeComentarios, getComentarios } = require('../controller/comentController');

router.post('/store/comentarios', storeComentarios)
router.post('/get/comentarios', getComentarios)

module.exports = router