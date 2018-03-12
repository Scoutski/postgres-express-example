module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    label: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function() {
    // associations can be defined here
  };

  return Todo;
};