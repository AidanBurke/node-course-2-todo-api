const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findByIdAndRemove('5ad7a6a2bbfbb938194b20f7').then((todo) => {
//   console.log(todo);
// });
