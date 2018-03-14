'use strict';
const router = require('express').Router();

router.get('/', require('./actions/root.get'));
router.get('/oauth', require('./actions/oauth.get'));
router.post('/component', require('./actions/component.post'));
router.post('/componentlist', require('./actions/componentlist.post'));
router.post('/component_by_name', require('./actions/component.by.name.post'));

module.exports = router;
