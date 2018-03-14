'use strict';
const componentStore = require('../../lib/component-store');
const logger = require('../../lib/logger');

module.exports = (req, res) => {
  const list = componentStore.getComponentList();
  logger.log('componentList', list);
  res.send({
    attachments: list
  });
};
