const { Router } = require('express');
const router = Router();

const { storeComentarios, getComentarios } = require('../controller/comentController');

router.post('/store/comentarios', storeComentarios)
router.get('/get/comment/:id', getComentarios)

module.exports = router