const {MongoClient, ObjectID} = require('mongodb');
const fs = require('fs');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('unable to connect to database server',err);
  }

  db.collection('Todos').findOneAndUpdate({
     text : "Kiss Wife"
  }, {
    $set: {
      completed: true
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  });

  db.collection('Users').findOneAndUpdate({
    phone : "808-833-1020",
  }, {
    $inc: {
      age: 3
    }
  },{
    returnOriginal:false
  }).then((result1)=>{
    console.log(JSON.stringify(result1,undefined,2));
  });
  db.close();
});
