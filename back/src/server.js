//importar arquivo
const app = require('./app');
//importar porta
const port = app.get('port');

//testar API
app.listen(port, () => console.log(`run on port ${port}!`));