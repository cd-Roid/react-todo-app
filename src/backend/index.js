const express = require('express');
const  _ = require('express-json');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = 3001;
const uri = `mongodb+srv://cd-RoiD:${process.env.MONGO_PASSWORD}@cluster0.cpt7m.mongodb.net/Todos?retryWrites=true&w=majority`;


 MongoClient.connect(uri,{ useUnifiedTopology: true }, async function(err, client) {   
  if (err) {
    throw err;
  }
 // const cursor = await client.db('Todos').collection('todos').insertOne({text:"Run mongodb",done: false})

});

app.use(_);
app.listen(PORT, () => {
  console.log(`Todo Backend listening at http://localhost:${PORT}`);
});