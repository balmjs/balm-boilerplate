var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      css: 'sass',
      js: 'scripts',
      img: 'images',
      font: 'fonts'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      common: ['jquery'],
      util: ['lodash'],
      main: './src/scripts/main.js'
    },
    vendors: ['common', 'util']
  },
  sprites: {
    image: ['icon'],
    svg: ['svg-icon']
  },
  cache: true,
  assets: {
    root: 'assets',
    publicPath: 'public'
  }
};

balm.go(function(mix) {
  if (balm.config.production) {
    // publish assets to your project
    mix.publish();
    mix.publish('index.html', 'public');
  }
});
