const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db
  //   .collection('Todos')
  //   .find({
  //     _id: new ObjectID('5acbc5e737cb1014af1f21c9')
  //   })
  //   .toArray()
  //   .then(docs => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch(err => {
  //     console.log('Unable to fetch todos', err);
  //   });

  // db
  //   .collection('Todos')
  //   .find()
  //   .count()
  //   .then(count => {
  //     console.log(`Todos count: ${count}`);
  //   })
  //   .catch(err => {
  //     console.log('Unable to fetch todos', err);
  //   });

  db
    .collection('Users')
    .find({
      name: 'Chenyu'
    })
    .toArray()
    .then(docs => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch(err => {
      console.log('Unable to fetch todos', err);
    });

  //client.close();
});
