const config = {
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

const api = (mix) => {
  if (mix.env.isDev) {
    mix.copy('bower_components/bootstrap/fonts/*', 'src/fonts');
    mix.copy('bower_components/font-awesome/fonts/*', 'src/fonts');
  }
};

module.exports = () => {
  return {
    config,
    api
  };
};
