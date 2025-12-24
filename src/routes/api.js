const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/sample:
 *   get:
 *     summary: Get sample message
 *     tags: [Sample]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/sample', (req, res) => {
  res.json({ message: 'Sample message from API' });
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', (req, res) => {
  res.json({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details
 */
router.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'User ' + req.params.id });
});

module.exports = router;
