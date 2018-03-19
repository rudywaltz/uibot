'use strict';
const componentStore = require('../../lib/component-store');
const componentTemplate = require('../../lib/component-template');
const logger = require('../../lib/logger');

module.exports = (req, res) => {
  const json = JSON.parse(req.body.payload);
  const selected = json.actions[0].selected_options[0].value;
  const componentData = componentStore.getComponentByName(selected);
  logger.log('interactive ', selected);
  res.send({
    attachments: componentTemplate(componentData)
  });
};
