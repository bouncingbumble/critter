var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://admin:adminpasswordforcritter1@ds119755.mlab.com:19755/critter', {
    keepAlive: true
});

mongoose.Promise = Promise;

module.exports.User = require('./user');
module.exports.Message = require('./message');