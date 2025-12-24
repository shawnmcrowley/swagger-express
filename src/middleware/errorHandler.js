const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
};

const notFound = (req, res) => {
  res.status(404).json({ error: { message: 'Route not found', status: 404 } });
};

module.exports = { errorHandler, notFound };
