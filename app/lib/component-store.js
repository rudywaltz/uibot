'use strict';
const files = require('./files');

class ComponentStore {

  constructor() {
    this._components = [];
    this._componentList = [];
  }

  restore() {
    this._components = [];
    this._componentList = [];
  }

  async load(componentPath) {
    const componentContents = await files.readFilesInFolder(componentPath);
    return this._components  = componentContents.map(JSON.parse);
  }

  createComponentList() {
    this._components.forEach((component) => {
      this._componentList.push(component.name);
    });
  }

  getComponentList() {
    return this._componentList;
  }

  getComponentByName(name) {
    const component = this._components.find( element => { return element.name.toLowerCase() === name.toLowerCase(); });
    return component;
  }


  getRandom() {
    if (!this._components.length) return {};
    const index = Math.floor(Math.random() * this._components.length);
    return this._components[index];
  }

}

module.exports = new ComponentStore();
