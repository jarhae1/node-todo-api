const express = require('express');
const fs = require('fs');
var foo = require(__dirname + '/mynewfile1.json');


function getJson(req, res, next){
    res.send(foo);
}

var app = express();

app.get('/', (req, res)=> {
  res.send(foo);
})

//we need this to bind the application to a port on our machine. Without this
//The app will not run
//This is a common port for developing locally
app.listen(3000, ()=>{
  console.log(`server is up on port 3000`);
});
