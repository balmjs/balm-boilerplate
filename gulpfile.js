var balm = require('balm');

balm.config = {
  static: true,
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      css: 'sass',
      js: 'scripts'
    }
  },
  styles: {
    ext: 'scss'
  }
};

balm.go();
