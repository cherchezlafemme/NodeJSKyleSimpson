// Sync version
// function say(filename) {
//   return fs.readFileSync(filename);
// }

// Assync version: better practice. Use callbacks/promises
// function say(filename,cb) {
//   return fs.readFile(filename,cb);
// }

// Extended version:

function say(filename,cb) {
  return fs.readFile(filename, function(err, contents){
    if (err){
      cb(err);
    } else {
      setTimeout(function(){
        cb(null, contents);
      }, 1000);
    }
  });
}

var fs = require("fs");

module.exports.say = say;