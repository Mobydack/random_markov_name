const writeModel = require("./write-model")
const names = require("./names");
const generateName = require("./generate-name");

writeModel(names);

const model = require("./generated-model");

console.log("name", generateName(10, model));
