const {MongoClient, ObjectID} = require('mongodb');
const fs = require('fs');


MongoClient.connect('mongodb://localhost:27017/Test',(err,db)=>{
  if (err) {
    return console.log('unable to connect to database server',err);
  }
//deleteMany
   // db.collection('Todos').deleteMany(
   //   {text: "Study Node"}).then((result)=>{
   //     console.log(result);
   //   })

//deleteOne
    // db.collection('Todos').deleteOne(
    //   {text:"Study Node"}).then((result)=>{
    //     console.log(result)
    //   })

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete(
    { _id: new ObjectID('5c528088a2fbf636ff04b536')}).then((result)=>{
      console.log(JSON.stringify(result,undefined,2))
    });


    db.close();
  });
