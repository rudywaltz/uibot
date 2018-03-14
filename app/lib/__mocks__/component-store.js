'use strict';
class ComponentStore {

  constructor() {
    this._components = [
      { name: 'TestComponent',
        implementation: 'testClass'
      },
      {
        name: 'TestComponent2',
        implementation: 'testWebcomponent'
      }
    ];
    this._componentList = ['TestComponent'];

    this.getRandom = jest.fn();
  }

  restore() {
    this._components = [];
    this._componentList = [];
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
    const component = this._components.find( element => { return element.name === name; });
    return component;
  }
}

module.exports = new ComponentStore();
