// Webpack
require('../index.html')

var StackTrace = require('stacktrace-js')

try {
    require('./app')
} catch (e) {
    StackTrace.fromError(e).then(function(result) {
        console.log(result)
    }, function(err) {
        console.log(err)
    })['catch'](function(err) {
        console.log('ERROR!');
        console.log(err);
    })
}
