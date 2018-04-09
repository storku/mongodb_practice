const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne(
  //   {
  //     text: 'something to do',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, null, 2));
  //   }
  // );

  // db.collection('Users').insertOne(
  //   {
  //     name: 'Chenyu',
  //     age: 26,
  //     location: 'Boston'
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, null, 2));
  //   }
  // );

  client.close();
});
