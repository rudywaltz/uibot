'use strict';

const errorTemplate = require('./');


describe('errorTemplate', () => {
  it('should render a error template propery', () => {
    const errorMsg = 'Something went wrong';
    const expectedErrorTemplate = {
      color: 'danger',
      text: errorMsg
    };
    expect(errorTemplate(errorMsg)).toEqual(expectedErrorTemplate);

  });
});
