module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
};