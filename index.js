// Import express and request modules
var express = require('express');
var request = require('request');
require('dotenv').config();
const Service = require('./app/service');


class App {
  constructor() {
    this.service = new Service();
    this.service.start();
  }
}

new App();
