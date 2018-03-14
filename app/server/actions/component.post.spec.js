'use strict';
const componentPost = require('./component.post');
const componentStore = require('../../lib/component-store');

jest.mock('../../lib/component-store');
jest.mock('../../lib/component-template');

describe('componentPost', () => {
  it('shoud send random component', () => {
    const res = {
      send: jest.fn()
    };

    componentPost({}, res);

    expect(componentStore.getRandom).toHaveBeenCalled();
  });
});
