// Modules
// |> Modules are smaller files that hold code that performs certain functions or methods
//      - They held to breakdown a project so that all the code isn't just in one file
//      - "Encapsulated Code" (only share minimum)
//      - CommonJS, every file (in Node) is module (by default)

// Accessing the shared objects via 'require'
// Always should start with the './' at the begining of the path when importing modules you've created
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
// The function in this module is still imported because the function is called in that module
require('./7-mind-grenade')
sayHi('susan')
// To access specific of the other imported module you can use the property names
sayHi(names.john)
sayHi(names.peter)
