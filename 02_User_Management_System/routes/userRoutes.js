const express = require('express');
const { createUser, updateUser, getUserById } = require('../controllers/userController');

const router = express.Router();

router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUserById);

module.exports = router;
