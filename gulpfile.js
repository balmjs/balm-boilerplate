const balm = require('balm');

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
      main: './src/scripts/main.js'
    }
  },
  sprites: {
    image: ['icon']
  },
  cache: true,
  assets: {
    root: 'assets',
    publicPath: 'public'
  }
};

balm.go(mix => {
  if (balm.config.production) {
    // publish assets to your remote project
    mix.publish();
    mix.publish('index.html', 'public');
  } else {
    mix.copy('bower_components/bootstrap/fonts/*', 'src/fonts');
    mix.copy('bower_components/font-awesome/fonts/*', 'src/fonts');
  }
});
