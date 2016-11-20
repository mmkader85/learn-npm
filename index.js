var _ = require('lodash');

var output = _.without([1,2,3], 1);
console.log(output);

export.printMsg = function() {
  console.log("index.js is called");
};
