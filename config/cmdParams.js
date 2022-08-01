const options = require("./options");

const params = require("yargs")
  .scriptName("npm run wdio")
  .option("browser", {
    alias: ["b", "browser"],
    describe: "browser choice",
    options: options.browsers,
  }).argv;

module.exports = params;