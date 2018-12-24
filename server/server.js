const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const personalityQuizData = require('./personality_test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/quiz', (req,res)=>{
    res.send(personalityQuizData);
})

app.listen(PORT, ()=>{
    console.log(PORT);
})
