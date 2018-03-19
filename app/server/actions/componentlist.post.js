'use strict';
const componentStore = require('../../lib/component-store');
const logger = require('../../lib/logger');

module.exports = (req, res) => {
  const optionslist = componentStore.getComponentList().map(option => {
    return {
      text: option,
      value: option.toLowerCase()
    };
  });
  const list = [{
    'text': 'Please select component',
    'fallback': 'If you could read this message, you\'d be choosing something fun to do right now.',
    'color': '#3AA3E3',
    'attachment_type': 'default',
    'callback_id': 'component_from_list',
    'actions': [{
      'name': 'component_from_list',
      'text': 'Choose component',
      'type': 'select',
      'options': optionslist
    }]
  }];
  logger.log('componentList', list);
  res.send({
    attachments: list
  });
};
