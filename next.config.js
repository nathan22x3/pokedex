const path = require('path');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

module.exports = withPlugins(
  [
    withPWA({
      pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
      },
    }),
  ],
  {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      domains: ['raw.githubusercontent.com'],
    },
    future: {
      webpack5: true,
    },
  }
);
