const router = require('express').Router();

const { userLog } = require('../controller/loginController')

/**
 * @swagger
 * /login:
 *  store:
 *      summary: Procura um usuário existente no banco a partir do user
 *      responses:
 *          200:
 *              description: Entrou conta com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */

router.post('/login', userLog)

module.exports = router;