const express = require('express');
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user')


let app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  let todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000,()=>{
  console.log('Started on port 3000');
})

module.exports = {app};


// let newTodo = new Todo.Todo({
//     text: 'Ride Bike',
//     completed: false,
//     completedAt:2
//   });
// let newUser = new User.User({
//     email: 'jaredcannon6@gmail.com'
//   });
// newUser.save().then((doc)=>{
//   console.log('saved to do', JSON.stringify(doc,undefined,2))
// }, (e)=>{
//   console.log('Unable to save todo')
// })
