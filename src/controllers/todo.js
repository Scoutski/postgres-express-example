const { Todo } = require('../models');

const create = (body) => {
  return Todo
    .create({ label: body.label })
    .catch(error => error);
};

const getAll = () => {
  // If we were worried about there being too many
  // todos, we could add a limit parameter here.
  return Todo.findAll({});
}

module.exports = {
  create,
  getAll
}