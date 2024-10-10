const router = require('express').Router();
const upload = require('../config/multer');

const {storeArte, getArtes} = require('../controller/arteController');

/**
 * @swagger
 *  /tasks/list:
 *    get:
 *      summary: Retorna todas as tarefas
 *      responses:
 *       200:
 *        description: Cadastrou a Arte com sucesso
 *         content: 
 *          application/json:
 *           schema:
 *            type: array
 *             items:
 *              type: object
 */

/**
 * @swagger
 *   /tasks/register:
 *    post:
 *     summary: aaaaaa
 *     responses:
 *      201:
 *       description: Sucesso!
 *        content:
 *         application/json:
 *          schema:
 *           type: array
 *            items:
 *             type: object
 */

/**
 * @swagger
 *  /task/:id:
 *   put:
 *    summary: Atualiza um post pelo id
 *    responses:
 *     200:
 *      description: Atualiza
 *      content:
 *       application/json:
 *        schema: 
 *         type: array
 *          items:
 *           type: object
 */

/**
 * @swagger
 *  /task/delete:
 *   delete:
 *    summary: Remove um post pelo id
 *    responses:
 *      200:
 *       description: Uma lista de posts
 *       content:
 *        application/json:
 *         schema:
 *          type: array
 *           items:
 *            type: object
 */

router.post('/store/artes', upload.single('imagem'), storeArte);
//router.get('/get/pageinic', getArtes);



module.exports = router;