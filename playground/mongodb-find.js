const {MongoClient, ObjectID} = require('mongodb');
const fs = require('fs');

function addFile(content){
  fs.writeFile(__dirname+'/mynewfile1.json', content, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('unable to connect to database server',err);
  }
  db.collection('Users').find()
    // {
    // _id: new ObjectID('5c5131786aa3e933601ee467')})
    //Find needs a cursor passed to it. Find these at http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html
    .toArray().then((docs)=>{
     addFile(JSON.stringify(docs, undefined, 2));
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch todos',err);
  });


  // db.collection('Todos').find()
  //   //Find needs a cursor passed to it. Find these at http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html
  //   .count().then((count)=>{
  //   console.log('Todos count:'+count);
  // }, (err)=>{
  //   console.log('Unable to count todos',err);
  // });

    db.close();
});
