var balm = require('balm');

balm.config = {
  static: true,
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      css: 'sass',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      common: ['jquery'],
      main: './src/scripts/main.js'
    },
    vendors: ['common']
  },
  sprites: {
    image: ['icon'],
    svg: ['icon']
  }
};

balm.go();
