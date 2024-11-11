const app = require('./app');
const port = app.get('port');
app.listen(port, () => console.log(`run on port ${port}!`));
const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")


const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Artchuu",
            version: "1.0.0",
            description: "Rede Social"
        },
        servers: [{ url: "http://localhost:3000"}],
    },
    apis: [`${__dirname}/routes/*.js`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))