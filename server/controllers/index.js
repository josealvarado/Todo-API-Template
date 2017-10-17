const todos = require('./todos');
const todoItems = require('./todoItem');

/*
  Where we're going to be exporting our controllers from.
  Helps consolidate imports (require statements) from once central place.
*/

module.exports = {
  todos,
  todoItems,
};
