'use strict';

var path = require('path');

module.exports = {
  name: require('./package').name,
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/raygun4js/dist/raygun.js');
  }
};
