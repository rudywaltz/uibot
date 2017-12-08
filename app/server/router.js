'use strict';
const router = require('express').Router();

router.get('/', require('./actions/root.get'));
router.get('/oauth', require('./actions/oauth.get'));
router.post('/component', require('./actions/component.post'));

module.exports = router;
