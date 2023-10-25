const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Chave secreta para a geração do token - em um ambiente real, coloque em uma variável de ambiente
const SECRET_KEY = 'rafael';

router.post('/register', async (req, res) => {
  try {
    const newUser = await User.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  console.log('Login route hit');
  try {
      const { email, password } = req.body;
      const user = await User.loginUser(email, password);
      console.log(email, password);

      // Gere um token JWT com base no ID do usuário
      const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

      // Enviar os detalhes do usuário e o token para o cliente
      res.json({
        user: {
            id: user.id,
            username: user.username, // send the username
            email: user.email,
        },
        token: token
    });
      
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});


module.exports = router;
