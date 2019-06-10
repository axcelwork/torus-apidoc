const glob = require("glob");
const entries = glob.sync("./resources/js/src/assets/**/*.js");

module.exports = {
  entry: entries,
  output: {
    path: __dirname + '/dist/assets/js',
    filename: 'app.js'
  }
};

