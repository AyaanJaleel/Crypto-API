const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/', (req, res) => {
    fetch('https://app-api.difx.io/api/v1/pairs')
    .then(result => result.json())
    .then(json => {
        res.send(json);
    });
});

app.listen(3000, () => console.log('On port 3000...'));

