const {Router} = require('express');

const router = Router();

const {storeArte, getArtes} = require('../controller/arteController');

router.post('/store/artes', storeArte);
//router.get('/get/pageinic', getArtes);

module.exports = router;