function printHelp(){
  console.log("1.js (c) Kyle Simpson Workshop");
  console.log("");
  console.log("usage:");
  console.log("--help         print this help");
  console.log("--file={NAME}        read the file of {NAME} and output it");
  console.log("");
}

// install module: npm install minimist
var args = require("minimist")(process.argv.slice(2),{ string: "file"});

if (args.help || !args.file){
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld.js");

// For Sync option:
// var contents = hello.say(args.file);
// console.log(contents.toString());

// Type node command-line-nodejs-simple-program-2.js --file=text.txt in order to launch it

// NodeJSKyleSimpson [task-2] :> node command-line-nodejs-simple-program-2.js --file=text.txt
// This is a text file. We want to test the program that should be opening this file. If you see this - Great! It worked. Time to take a break.

// Async Callbacks
hello.say(args.file, function(err,contents){
  if (err) {
    console.error("Error: " + err);
  } else {
    console.log(contents.toString());
  }
});