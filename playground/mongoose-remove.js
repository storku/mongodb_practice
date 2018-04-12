const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove((_id: '5acee074e453f356bb5a1052')).then(todo => {
  console.log(todo);
});

Todo.findByIdAndRemove('5acee074e453f356bb5a1052').then(todo => {
  console.log(todo);
});
