'use strict';
const componentStore = require('../../lib/component-store');

module.exports = (req, res) => {
  res.send({
    attachments: componentStore.getComponentList()
  });
};
