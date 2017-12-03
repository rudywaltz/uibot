'use strict';

const express = require('express');
const data = require('../data_variable.json');

class Service {
  constructor() {
    this._init();
  }

  _init() {
    const clientId = process.env.CLIENTID;
    const clientSecret = process.env.CLIENTSECRET;

    this.express = express();

    this.express.set('port', (process.env.PORT || 4390));
    this.express.use(express.static('./public'));

    this.express.get('/oauth', (req, res)=> {
      if (!req.query.code) {
          res.status(500);
          res.send({"Error": "Looks like we're not getting code."});
          console.log("Looks like we're not getting code.");
      } else {
          request({
              url: 'https://slack.com/api/oauth.access',
              qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret},
              method: 'GET', //Specify the method

          }, function (error, response, body) {
              if (error) {
                  console.log(error);
              } else {
                  res.json(body);

              }
          })
      }
  });

  this.express.get('/', function(req, res) {
    res.send('Ngrok is working! Path Hit: ' + req.url);
  });

  this.express.post('/command', function(req, res) {
    res.send({
      "attachments": data
    });
  });
 }

  start() {
    this.express.listen(this.express.get('port'), () => {
      console.log('Node app is running on port', this.express.get('port'));
    });
  }


}

module.exports = Service;
