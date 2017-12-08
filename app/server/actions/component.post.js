'use strict';
const componentStore = require('../../lib/component-store');
const componentTemplate = require('../../lib/component-template');

module.exports = (req, res) => {
  res.send({
    attachments: componentTemplate(componentStore.getRandom())
  });
};
