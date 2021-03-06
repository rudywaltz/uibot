'use strict';
const componentTemplate = require('./');

describe('componentTemplate', () => {

  it('should render a component config to a slack message', () => {
    const result = componentTemplate({
      name: 'Button',
      documentation: 'https://redirector.eservice.emarsys.net/ui/latest/doc/button.html',
      image: 'http://uibot.herokuapp.com/img/button.png',
      dos: 'All Words Capitalised. Always.',
      donts: 'Never break a button over two lines',
      atomicLevel: 'Molecule',
      implementation: 'Css Class',
      states: ['info', 'success', 'warning', 'danger'],
      secretInfo: 'If you need help, ask doc_Loc - that\'s what they are there for!'
    });

    expect(result).toEqual([
      {
        response_type: 'in_channel',
        fallback: 'Button',
        author_name: 'Frontend Team',
        author_link: 'https://ui.static.emarsys.net',
        title: 'Button',
        title_link: 'https://redirector.eservice.emarsys.net/ui/latest/doc/button.html'
      },
      {
        image_url: 'http://uibot.herokuapp.com/img/button.png',
        thumb_url: 'http://uibot.herokuapp.com/img/button.png'
      },
      {
        color: 'good',
        fields: [
          {
            title: 'Dos',
            value: 'All Words Capitalised. Always.',
            short: false
          }
        ]
      },
      {
        color: 'danger',
        fields: [
          {
            title: 'Don\'ts',
            value: 'Never break a button over two lines',
            short: false
          }
        ]
      },
      {
        color: '#39aad3',
        mrkdwn_in: ['fields'],
        fields: [
          {
            title: 'Atomic level',
            value: 'Molecule',
            short: true
          },
          {
            title: 'Implementation',
            value: 'Css Class',
            short: true
          },
          {
            title: 'States',
            value: '`info` `success` `warning` `danger` ',
            short: true
          },
          {
            title: 'Secret Info',
            value: 'If you need help, ask doc_Loc - that\'s what they are there for!',
            short: false
          }
        ]
      }
    ]);
  });

});
