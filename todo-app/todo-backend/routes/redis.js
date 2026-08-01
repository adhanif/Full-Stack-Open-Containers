const express = require('express');
const router = express.Router();

const redis = require('../redis');

router.get('/statistics', async (req, res) => {
  const addedTodos = await redis.get('added_todos');
  res.send({ added_todos: Number(addedTodos || 0) });
});

module.exports = router;
