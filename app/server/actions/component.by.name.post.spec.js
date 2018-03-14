'use strict';
const componentTemplate = require('../../lib/component-template');
const errorTemplate = require('../../lib/error-template');
const componentPost = require('./component.by.name.post');

jest.mock('../../lib/component-store');
jest.mock('../../lib/component-template');
jest.mock('../../lib/error-template');

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
    expect(errorTemplate).toHaveBeenCalledWith('Sorry we didn\'t find any component!');
    componentTemplate.mockReset();
    componentTemplate.mockRestore();
  });
});
