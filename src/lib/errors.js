module.exports = {
  todoNotFound: (id) => `Record with id: ${id} not found.`,
  createRequiresParams: () => 'Requires label parameter to create new Todo.',
  updateRequiredParams: () => 'Requires label or complete parameter to create new Todo.'
};
