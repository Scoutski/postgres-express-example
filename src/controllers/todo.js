const { Todo } = require('../models');

const getAll = () => {
  // If we were worried about there being too many
  // todos, we could add a limit parameter here.
  return Todo.findAll({});
}

const get = (id) => {
  return Todo.findById(id);
}

const create = (body) => {
  return Todo
    .create({ label: body.label })
    .catch(error => error);
}

const update = async (id, body) => {
  const todo = await Todo.findById(id);
  await todo.update(body, {
    where: { id }
  });

  return todo;
}

const destroy = (id) => {
  return Todo.destroy({ where: { id } });
}

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy
}
