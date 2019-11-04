const express = require('express');
const Twitter = require('twit');
const app = express();
 
app.listen(3000, () => console.log('Server running'))

const api_client = new Twitter({
    consumer_key: 'NVzI1kGvJMO21P4TK82ogHuwj',
    consumer_secret: 'XEN6lUgRV6HZSXIGQ3glGXSGbLumHH4dIiPec1YkAw9SWyUDcd',
    access_token: '2255901718-3Dn1bLGwhcGTSTopKswtRbk3iQQIZlX9Ff5EIA0',
    access_token_secret: 'zmUuvarGnx1t7iXXxpTANieYH16D9apMvs6MlGfOvSjGd'
  });

  app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    api_client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});

app.get('/user_timeline', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const params = { screen_name: 'M50Dublin', count: 12 };
   
    api_client
      .get(`statuses/user_timeline`, params)
      .then(timeline => {
       
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });      
});

app.get('/images',(req, pres)=>{
  pres.header("Access-Control-Allow-Origin", "*");
  const request = require('request');

  request('https://www.tiitraffic.ie/cams/', function(err, res, body) { 
    console.log(body); 
    pres.send(body);
  });
});

app.post('/post_tweet', (req, res) => {
 
    tweet = req.body;
     
    api_client
        .post(`statuses/update`, tweet)
        .then(tweeting => {
          console.log(tweeting);
           
          res.send(tweeting);
        })
   
       .catch(error => {
        res.send(error);
      });
         
      
  });