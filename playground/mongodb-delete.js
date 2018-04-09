const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db
  //   .collection('Todos')
  //   .deleteMany({ text: 'Eat lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //deleteOne
  // db
  //   .collection('Todos')
  //   .deleteOne({ text: 'Eat lunch' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //findOneAndDelete
  // db
  //   .collection('Todos')
  //   .findOneAndDelete({ completed: false })
  //   .then(result => {
  //     console.log(result);
  //   });

  // db
  //   .collection('Users')
  //   .deleteMany({ name: 'Hello' })
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5acbe6d9e453f356bb59d98f') })
    .then(result => {
      console.log(JSON.stringify(result, null, 2));
    });

  //client.close();
});
