const { Router } = require('express');
const controller = require('../controllers/todo')

// Every route in this file is
// automatically nested under /todo
const todoRouter = new Router();

todoRouter.get('', async (req, res) => {
  const result = await controller.getAll();
  res.status(200).json({
    result: result.map(r => r.toJSON()),
    errors: null
  });
});

todoRouter.post('', async (req, res) => {
  if (!req.body.label) {
    res.status(400).json({
      result: null,
      errors: 'Requires label parameter to create new Todo.'
    });
  } else {
    const result = await controller.create(req.body);
    console.log('todo created!', result.toJSON());
    res.status(201).json({
      result,
      errors: null
    });
  }
});

todoRouter.patch('/:id', async (req, res) => {

});

module.exports = todoRouter;
