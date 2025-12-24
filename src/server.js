const express = require('express');
const path = require('path');
const config = require('./config');
const { specs, swaggerUi } = require('./utils/swagger');
const apiRoutes = require('./routes/api');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', apiRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
  console.log(`API Docs: http://localhost:${config.port}/api-docs`);
});

module.exports = app;
