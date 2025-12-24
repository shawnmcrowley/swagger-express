const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const config = require('../config');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: config.swagger.title,
      version: config.swagger.version,
      description: config.swagger.description,
    },
    servers: [{ url: `http://localhost:${config.port}` }]
  },
  apis: ['./src/routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
