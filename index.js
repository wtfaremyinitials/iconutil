var exec = require('exec-sync');

module.exports.toIconsetSync = function(inpt, out) {
    return exec('iconutil --convert iconset "' + inpt + '" --output "' + out + '"');
};

module.exports.toICNSSync = function(inpt, out) {
    return exec('iconutil --convert icns "' + inpt + '" --output "' + out + '"');
};
