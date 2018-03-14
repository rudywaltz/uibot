'use strict';
const componentStore = require('../../lib/component-store');
const componentTemplate = require('../../lib/component-template');

module.exports = (req, res) => {
  const firstComponent = req.body.text.split(' ')[0];
  const componentData = componentStore.getComponentByName(firstComponent);
  res.send({
    attachments: componentData ?
      componentTemplate(componentData) :
      'error'
  });
};
