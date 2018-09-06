const getTweets = require('./twitter');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World! Auto deployed with Now now. Only working with PR though'));

app.get('/query/:search', (req, res) => {
 if(req.params && req.params.search){
   getTweets(req.params.search).then(data => res.send(data.map(data => data.text)));
 }
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));
