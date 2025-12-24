module.exports = {
  port: process.env.PORT || 3005,
  env: process.env.NODE_ENV || 'development',
  swagger: {
    title: 'Express API',
    version: '2.0.0',
    description: 'Modern Express API with Swagger documentation'
  }
};
