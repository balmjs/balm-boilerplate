const balm = require('balm');

balm.config = {
  styles: {
    extname: 'scss', // css,scss,less
    sprites: ['icons']
  },
  scripts: {
    entry: {
      mylib: ['jquery'],
      myutil: ['lodash'],
      main: './src/scripts/main.js'
    }
  },
  assets: {
    cache: true
  }
};

balm.go(mix => {
  if (mix.env.isProd) {
    // publish assets to your remote project
    mix.publish();
    mix.publish('index.html', 'public');
  } else {
    mix.copy('bower_components/bootstrap/fonts/*', 'src/fonts');
    mix.copy('bower_components/font-awesome/fonts/*', 'src/fonts');
  }
});
