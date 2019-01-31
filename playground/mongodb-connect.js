//requiring MongoClient from mongodb
//const MongoClient = require('mongodb').MongoClient;
//Destructuring syntax for pulling properties off mongodb same as above
const {MongoClient, ObjectID} = require('mongodb');

//example of destructuring
// var user = {name:'Jared',age:28};
// var{name} = user;
// console.log(name);

//if using v3 of mongodb then replace db with client
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');
  //if using v3 of mongodb then add this line of code:
  //const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insert({
      firstName:'Larry',
      lastName:'Kemp',
      phone:'808-833-1021',
      age:45,
      Address:'564 N 323 W',
      City:'Roy',
      State:'Utah'
  },(err,result)=>{
    if(err){
      return console.log('Can\t add user');
    }
    console.log(result.ops[0]._id.getTimestamp());

  })


//if using v3 replace db.close() with client.close()
  db.close();
});
