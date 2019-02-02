var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://admin:@ds119755.mlab.com:19755/critter', {
    keepAlive: true,
    useMongoClient: true
});

mongoose.Promise = Promise;

module.exports.User = require('./user');