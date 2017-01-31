console.log("Hello World");
process.stdout.write("Hello World!");

// To launch with argument node 1.js argumentHere
//  Without argument => Hello undefined
var name = process.argv[2];
console.log("Hello " + name);

function printHelp(){
  console.log("1.js (c) Kyle Simpson Workshop");
  console.log("");
  console.log("usage:");
  console.log("--help         print this help");
  console.log("--name         say hello to {NAME}");
}

// install module: npm install minimist
var args = require("minimist")(process.argv.slice(2),{ string: "name"});

if (args.help || !args.name){
  printHelp();
  process.exit(1);
}

name = args.name;
console.log("Hello " + name);
// Try: node 1.js World --name=World
