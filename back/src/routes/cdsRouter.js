const { Router } = require('express');
const router = Router();

const { createCds } = require('../controller/cdsController');

/**
 * @swagger
 * /create/user:
 *  store:
 *      summary: Cadastrando um usuário
 *      responses:
 *          200:
 *              description: Cadastrado com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/create/user', createCds);

module.exports = router;