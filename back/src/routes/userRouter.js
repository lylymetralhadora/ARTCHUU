const {Router} = require('express');
const router = Router();

const {cadastroUsuario} = require('../controller/userController');

router.post('/create/user', cadastroUsuario);

module.exports = router;