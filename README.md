<div align="center">

# Express API with Swagger & HTMX

**Modern Node.js/Express API server with Swagger documentation and HTMX frontend**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.19-blue)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-3.0-85EA2D)](https://swagger.io/)
[![HTMX](https://img.shields.io/badge/HTMX-1.9-3D72D7)](https://htmx.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[Features](#-features) •
[Getting Started](#-getting-started) •
[Configuration](#-configuration) •
[Usage](#-usage) •
[Contributing](#-contributing)

</div>

---

## 📋 Overview

Production-ready Express API server with automatic Swagger documentation generation and an interactive HTMX-powered frontend. Features modular architecture, reusable components, and best practices for scalable Node.js applications.

## ✨ Features

- 🚀 **Modern Express Server** - Clean, modular architecture
- 📚 **Auto-generated Swagger Docs** - Interactive API documentation
- ⚡ **HTMX Frontend** - Zero-build interactive UI
- 🔧 **Reusable Components** - Middleware, config, utilities
- 🎯 **Best Practices** - Error handling, logging, structure
- 🔄 **Hot Reload** - Node.js native --watch flag

## 🏗️ Architecture Overview

This project demonstrates a production-ready Express application with:

- **Express 4.19**: Modern REST API framework
- **Swagger/OpenAPI 3.0**: Auto-generated API documentation
- **HTMX 1.9**: Zero-build interactive frontend
- **Modular Structure**: Reusable middleware and utilities

## 📁 Project Structure

```
swagger-api-docs/
├── src/
│   ├── config/
│   │   └── index.js           # Centralized configuration
│   ├── middleware/
│   │   └── errorHandler.js    # Error handling middleware
│   ├── routes/
│   │   └── api.js             # API route definitions
│   ├── utils/
│   │   └── swagger.js         # Swagger configuration
│   └── server.js              # Main server file
├── public/
│   └── index.html             # HTMX frontend
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shawnmcrowley/swagger-express.git

# Navigate to project
cd swagger-api-docs

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3005](http://localhost:3005) to view the dashboard.

## 🔧 Configuration

### Environment Variables

Edit `src/config/index.js`:

```javascript
module.exports = {
  port: process.env.PORT || 3005,
  env: process.env.NODE_ENV || 'development',
  swagger: {
    title: 'Your API Title',
    version: '1.0.0',
    description: 'Your API description'
  }
};
```

### Adding New Routes

1. Edit `src/routes/api.js`
2. Add route with Swagger JSDoc comments
3. Swagger docs auto-update

Example:

```javascript
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/products', (req, res) => {
  res.json({ products: [] });
});
```

## 📖 Usage

### Access Points

- **Dashboard**: http://localhost:3005
- **API Docs**: http://localhost:3005/api-docs
- **API Endpoints**: http://localhost:3005/api/*

### Available Endpoints

- `GET /api/sample` - Sample message
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user by ID

### HTMX Frontend

The dashboard provides interactive API testing:
- Click buttons to test endpoints
- View formatted JSON responses
- Real-time API interaction without page reloads

## 🎯 Key Features

### Reusable Components

- **Config Module**: Centralized configuration management
- **Error Handler**: Consistent error handling middleware
- **Swagger Utility**: Reusable Swagger setup

### Best Practices

- Modular architecture for scalability
- Separation of concerns (routes, middleware, config)
- Automatic API documentation
- Error handling and validation
- Clean code structure

## 🚀 Deployment

### Building for Production

```bash
NODE_ENV=production npm start
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3005
CMD ["npm", "start"]
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Express.js team for the robust framework
- Swagger/OpenAPI for API documentation standards
- HTMX for modern frontend interactions
- Open source community for inspiration

## 📧 Contact

[Creator - Shawn M. Crowley](mailto:shawn.crowley@lycra.com)

Project Link: [https://github.com/shawnmcrowley/swagger-express](https://github.com/shawnmcrowley/swagger-express)

---

<div align="center">
Made with ❤️ using Node.js, Express, and HTMX
</div>
