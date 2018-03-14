'use strict';
const express = require('express');
const path = require('path');
const config = require('../config');
const componentStore = require('../lib/component-store');
const logger = require('../lib/logger');
const router = require('./router');
const bodyParser = require('body-parser');

class Server {

  constructor() {
    this._init();
  }


  _init() {
    this.express = express();
    this.express.use(express.static('./public'));
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use('/', router);
  }


  async start() {
    await componentStore.load(path.resolve(__dirname, '../../components'));
    componentStore.createComponentList();
    this.express.listen(config.port, () => logger.log(`Server is running on port ${config.port}`));
  }

}

module.exports = Server;
