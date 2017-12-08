'use strict';

module.exports = componentConfig => {
  return [
    {
      fallback: componentConfig.name,
      author_name: 'Frontend Team',
      author_link: 'https://ui.static.emarsys.net',
      title: componentConfig.name,
      title_link: componentConfig.documentation
    },
    {
      image_url: componentConfig.image,
      thumb_url: componentConfig.image
    },
    {
      color: 'good',
      fields: [
        {
          title: 'Dos',
          value: componentConfig.dos,
          short: false
        }
      ]
    },
    {
      color: 'danger',
      fields: [
        {
          title: 'Don\'ts',
          value: componentConfig.donts,
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
          value: componentConfig.atomicLevel,
          short: true
        },
        {
          title: 'Implementation',
          value: componentConfig.implementation,
          short: true
        },
        {
          title: 'States',
          value: '`' + componentConfig.states.join('` `') + '` ',
          short: true
        },
        {
          title: 'Secret Info',
          value: componentConfig.secretInfo,
          short: false
        }
      ]
    }
  ];
};
