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
    main: './src/scripts/main.js'
  },
  sprites: {
    image: ['icon'],
    svg: ['icon']
  }
};

balm.go();
