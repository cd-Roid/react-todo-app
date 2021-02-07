const express = require('express');
const  _ = require('express-json');
const bodyParser = require('body-parser');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');


const app = express();
const jsonParser = bodyParser.json();
const PORT = 3001;
const uri = `mongodb+srv://cd-RoiD:${process.env.MONGO_PASSWORD}@cluster0.cpt7m.mongodb.net/Todos?retryWrites=true&w=majority`;


 MongoClient.connect(uri,{ useUnifiedTopology: true }, async function(err, client) {   
  if (err) {
    throw err;
  }

  db = client.db('Todos');
});

app.get('/', async (req , res)=>{
    try {
        const todos = await db.collection('todos').find({}).toArray();
        res.json(todos); 
    } catch (error) {
        throw error;
    }
})


app.post('/', jsonParser,async (req , res)=>{
    try {
        const data = {text: req.body.text, done: false}
        await db.collection('todos').insertOne(data);
        res.json({desc: "Successfully added"});
    } catch (error) {
        throw error;
    }
})  


app.put('/:id', async (req , res)=>{
    try {

        await db.collection('todos').findOneAndUpdate({_id: ObjectId(req.params.id)},{$set:{'done':false}});
        res.json({desc: "Successfully updated"});
    } catch (error) {
        throw error;
    }
})

app.delete('/:id', async (req , res)=>{
    try {

        await db.collection('todos').deleteOne({_id: ObjectId(req.params.id)});
        res.json({desc: "Successfully deleted"});
    } catch (error) {
        throw error;
    }
})

app.use(_);
app.use(jsonParser);
app.listen(PORT, () => {
  console.log(`Todo Backend listening at http://localhost:${PORT}`);
});

