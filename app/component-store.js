'use strict';

const fs = require('fs');
const path = require('path');
const files = require('../lib/files');


class ComponentStore {

  constructor() {
    this._components = [];
  }


  async load(componentPath) {
    const componentContents = await files.readFilesInFolder(componentPath);
    return this._components = componentContents.map(JSON.parse);
  }


  getRandom() {
    if (!this._components.length) return [];
    const index = Math.floor(Math.random() * this._components.length);
    return this._components[index];
  }

}




module.exports = new ComponentStore();
