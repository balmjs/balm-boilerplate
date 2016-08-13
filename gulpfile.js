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
  cache: true
};

balm.go(function(mix) {
  // mix.remove('/path/to/project/public');
  // mix.publish(null, '/path/to/project/public');
  // mix.publish('index.html', '/path/to/project/views', {
  //   suffix: '.blade',
  //   extname: '.php'
  // });
});
