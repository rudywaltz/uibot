'use strict';
const request = require('request');
const logger = require('../../lib/logger');
const config = require('../../config');

module.exports = (req, res) => {
  if (!req.query.code) {
    res.status(500);
    res.send({ Error: 'Looks like we\'re not getting code.' });
    logger.log('Looks like we\'re not getting code.');
  } else {
    request({
      url: 'https://slack.com/api/oauth.access',
      qs: { code: req.query.code, client_id: config.clientId, client_secret: config.clientSecret },
      method: 'GET',
    }, function (error, response, body) {
      if (error) {
        logger.log(error);
      } else {
        res.json(body);
      }
    });
  }
};
