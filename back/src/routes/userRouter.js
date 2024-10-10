const {Router} = require('express');
const router = Router();

const {cadastroUsuario} = require('../controller/userController');
/**
 * @swagger
 * /tasks/list:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: Cadastrou o usuário com sucesso
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

/**
 * @swagger
 * /tasks/register:
 *   post:
 *     summary: aaaaaa
 *     responses:
 *       201:
 *         description: Sucesso!
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

/**
 * @swagger
 * /task/:id:
 *   put:
 *     summary: Atualiza um cadastro
 *     responses:
 *       200:
 *         description: Atualiza
 *         content:
 *           application/json:
 *             schema: 
 *               type: array
 *               items:
 *                 type: object
 */

/**
 * @swagger
 * /task/delete:
 *   delete:
 *     summary: Remove um usuario
 *     responses:
 *       200:
 *         description: Uma lista de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.post('/create/user', cadastroUsuario);

module.exports = router;