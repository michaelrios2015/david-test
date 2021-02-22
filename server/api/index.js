// THIS SHOULD WORK - it can be cleaned up and such but should work for
//  my porpuses

//this could have some sort of route thing so we did not need to say api or 
// some such not entirely sure need to review
const express = require('express');
const { static } = express;
const path = require('path');
const { db, models: { Test } } = require('../db');


const app = express();
module.exports = app

app.use(express.json());

app.use('/dist', static(path.join(__dirname, '..', '..', 'dist')));

// is this supposed to be here??
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '..', '..', 'index.html')));

//gets all schools
app.get('/api/tests', async(req, res, next)=> {
  try {
    res.send(await Test.findAll());
  }
  catch(ex){
    next(ex);
  }
});

//final error catcher 
app.use((err, req, res, next)=>{
  res.status(500).send({ error:err });
});



