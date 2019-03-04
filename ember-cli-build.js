'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    ifa: {
      enabled: true,
      inline: true,
    },
    fingerprint: {
      generateAssetMap: true,
      fingerprintAssetMap: true,
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    },
    prember: {
      urls: [
        'blog',
        'community',
        'community/meetups',
        'community/meetups/assets',
        'community/meetups-getting-started',
        'ember-community-survey-2019',
        'ember-users',
        'guidelines',
        'learn',
        'learn/examples',
        'about/legal',
        'logos',
        'mascots',
        'security',
        'sponsors',
        'team',
        'mascots',
        'mascots/commission-sent',
        'mascots/commission',
        'mascots/faq',
        'mascots/payment-sent',
        'mascots/payment',
        'statusboard',
        'releases',
        'releases/release',
        'releases/canary',
        'releases/beta'
      ]
    },
    'ember-cli-uglify': { // TODO: remove once this issue is fixed https://github.com/ember-cli/ember-cli/issues/8075
      uglify: {
        compress: {
          collapse_vars: false
        }
      }
    },
  });

  app.import("node_modules/highlightjs/highlight.pack.js");
  app.import('vendor/shims/highlightjs.js');

  app.import("node_modules/markdown-it/dist/markdown-it.js", {
    using: [{ transformation: "amd", as: "markdown-it" }]
  });

  return app.toTree();
};
