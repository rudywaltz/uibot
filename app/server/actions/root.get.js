'use strict';

module.exports = (req, res) => {
  res.send('Ngrok is working! Path Hit: ' + req.url);
};
