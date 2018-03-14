'use strict';

jest.mock('./files');
const componentStore = require('./component-store');

describe('componentStore', () => {
  afterEach(() => {
    componentStore.restore();
  });

  it('should get the component list', async() => {
    await componentStore.load('path');
    componentStore.createComponentList();
    return expect(componentStore.getComponentList()).toEqual(['Button', 'TestComponent']);
  });

  it('should get the component by name', async() => {
    await componentStore.load('path');
    componentStore.createComponentList();
    return expect(componentStore.getComponentByName('testcomponent')).toEqual({name: 'TestComponent'});
  });

  it('should get empty object if pool is empty', () => {
    return expect(componentStore.getRandom()).toEqual({});
  });

  it('should get the random component from pool', async() => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.4;
    global.Math = mockMath;
    await componentStore.load('path');
    return expect(componentStore.getRandom()).toEqual({name: 'Button'});
  });
});
