var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      css: 'sass', // 'sass', 'less' or 'css'(postcss)
      js: 'scripts',
      img: 'images',
      font: 'fonts'
    }
  },
  styles: {
    ext: 'scss' // 'scss', 'less' or 'css'(postcss)
  },
  scripts: {
    entry: {
      mylib: ['jquery'],
      myutil: ['lodash'],
      main: './src/scripts/main'
    },
    vendors: ['mylib', 'myutil']
  },
  sprites: {
    image: ['icon'],
    svg: ['svg-icon'],
    padding: 1
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
