// CommonJS, every file is a module (by default)
// Modules = Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-sayHi'); 

sayHi('susan');
sayHi(names.peter);
sayHi(names.john);
