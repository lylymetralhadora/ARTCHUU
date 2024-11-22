const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const fs = require('fs')
const fileUpload = require('express-fileupload')

const arteRouter = require('./routes/arteRouter');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const cdsRouter = require('./routes/cdsRouter');
const comentRouter = require('./routes/comentRouter');

const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use(fileUpload())

app.use('/uploads', express.static(path.join(__dirname, "uploads")))
app.use("/api", userRouter);
app.use('/api', arteRouter);
app.use('/api', loginRouter);
app.use('/api', cdsRouter);
app.use('/api', comentRouter);

module.exports = app;