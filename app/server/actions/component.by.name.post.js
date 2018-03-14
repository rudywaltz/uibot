'use strict';
const componentStore = require('../../lib/component-store');
const componentTemplate = require('../../lib/component-template');
const errorTemplate = require('../../lib/error-template');
const logger = require('../../lib/logger');

module.exports = (req, res) => {
  const firstComponent = req.body.text.split(' ')[0];
  logger.log('ComponntByName', firstComponent);
  const componentData = componentStore.getComponentByName(firstComponent);
  if (!componentData) {
    logger.log('ComponntByName', 'missingComponent', firstComponent);
  }
  const errorMsg = 'Sorry we didn\'t find any component!';

  res.send({
    attachments: componentData ? componentTemplate(componentData) : errorTemplate(errorMsg)
  });
};
