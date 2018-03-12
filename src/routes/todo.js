const { Router } = require('express');
const controller = require('../controllers/todo');
const errors = require('../lib/errors');

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

todoRouter.get('/:id', async (req, res) => {
  const result = await controller.get(req.params.id);
  if (result === null) {
    res.status(404).json({
      result: null,
      errors: errors.todoNotFound(req.params.id)
    });
  } else {
    res.status(200).json({
      result,
      errors: null
    });
  }
});

todoRouter.post('', async (req, res) => {
  if (!req.body.label) {
    res.status(400).json({
      result: null,
      errors: errors.createRequiresParams()
    });
  } else {
    const result = await controller.create(req.body);
    res.status(201).json({
      result,
      errors: null
    });
  }
});

todoRouter.patch('/:id', async (req, res) => {
  if (req.body.label === undefined && req.body.complete === undefined) {
    res.status(400).json({
      result: null,
      errors: errors.updateRequiredParams()
    });
  } else {
    const result = await controller.update(req.params.id, req.body);
    res.status(200).json({
      result,
      errors: null
    });
  }
});

todoRouter.delete('/:id', async (req, res) => {
  const result = await controller.destroy(req.params.id);
  res.status(200).json({
    result,
    errors: null
  });
});

module.exports = todoRouter;
