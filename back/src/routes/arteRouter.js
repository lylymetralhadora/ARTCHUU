const router = require('express').Router();
const upload = require('../config/multer');

const {storeArte, getArtes} = require('../controller/arteController');


router.post('/store/storeArte', storeArte);

router.get('/get/getArtes', getArtes);
/*router.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
  });*/


module.exports = router;