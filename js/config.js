seajs.config({
  // Enable plugins
  plugins: ['shim'],

  // Configure alias
  alias: {
    'jquery': {
      src: 'lib/jquery-1.9.1.min.js',
      exports: 'jQuery'
    },
    'bootstrap-datetimepicker': 'lib/datetimepicker.js',
    'bootstrap-datetimepicker.zh-CN': 'lib/locales/bootstrap-datetimepicker.zh-CN.js'
  }
});

