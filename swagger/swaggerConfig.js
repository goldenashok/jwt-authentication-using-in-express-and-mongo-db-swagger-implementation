const swaggerJSDoc = require('swagger-jsdoc');
const dotEnv = require('dotenv');

dotEnv.config();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for Mongo DB, MVC, JWT Token and swagger',
        version: '1.0.0',
        description: 'This is a REST API application made with Express. It retrieves data from json data.',
        contact: {
            email: 'ashokgalaxy07@gmail.com',
        },
    },
    servers: [
        {
            url: process.env.DEVELOPMENTURL,
            description: 'Development server',
        },
        {
            url: process.env.PRODUCTIONURL,
            description: 'Production server',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
};


const options = {
    swaggerDefinition,
    apis: ['./*.js', './routes/*.js', './swagger/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;