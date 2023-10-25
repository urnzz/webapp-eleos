const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');

router.get('/tasks', async (req, res) => {
  console.log('searching tasks')
  try {
      const tasks = await Task.findAll();
      res.json(tasks);
  } catch (error) {
      res.status(500).send('Erro ao obter tarefas');
  }
});

router.post('/tasks', async (req, res) => {
  console.log('adding task')
  console.log('Received data:', req.body);
  try {
      const newTask = await Task.create(req.body);
      res.json(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
