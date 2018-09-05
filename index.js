const getTweets = require('./twitter');
const express = require('express');
const app = express();


var message = "";

promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
  }, 2000)
});

promise1.then(msg => console.log(msg));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/query/:search', (req, res) => {
 if(req.params && req.params.search){
   /*return new Promise(resolve => {
     resolve(getTweets(req.params.search).then(data => res.send(data)));
   });*/
   getTweets(req.params.search).then(data => res.send(data.map(data => data.text)));
 }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));