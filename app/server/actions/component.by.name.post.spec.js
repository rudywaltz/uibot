'use strict';
const componentTemplate = require('../../lib/component-template');
const componentPost = require('./component.by.name.post');

jest.mock('../../lib/component-store');
jest.mock('../../lib/component-template');

describe('componentByName', () => {


  it('shoud get the component name from parameter', ()=> {
    const res = {
      send: jest.fn()
    };

    componentPost({body: {text: 'TestComponent'}}, res);
    const expectedResponse = {'name': 'TestComponent', implementation: 'testClass'};
    expect(componentTemplate).toHaveBeenCalledWith(expectedResponse);
    componentTemplate.mockReset();
    componentTemplate.mockRestore();
  });

  it('shoud not get the component name from parameter if is not in componentList', ()=> {
    const res = {
      send: jest.fn()
    };

    componentPost({body: {text: ''}}, res);
    expect(componentTemplate).toHaveBeenCalledTimes(0);
    componentTemplate.mockReset();
    componentTemplate.mockRestore();
  });
});
