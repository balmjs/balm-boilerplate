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
      main: './src/scripts/main.js'
    },
    vendors: ['common']
  },
  sprites: {
    image: ['icon'],
    svg: ['icon']
  },
  cache: true,
  assets: {
    root: 'assets',
    publicPath: 'public',
    subDir: ''
  }
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.remove('./assets/public');
    mix.publish();
    mix.publish('index.html', 'public');
  }
});
