'use strict';
const componentlistPost = require('./componentlist.post');

jest.mock('../../lib/component-store');

describe('componentlistPost', () => {
  it('shoud send whole list of component', () => {
    const responseMock = jest.fn();
    const res = {
      send: responseMock
    };

    componentlistPost({}, res);

    expect(responseMock).toHaveBeenCalledWith({'attachments': ['TestComponent']});
  });
});
