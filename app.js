// npm - this is a global command that comes with node install
// npm --version or npm --v -> checks version of npm

// local dependency - use it only in the partuclar project
// npm i <packageName> - the command to install dependency as a local dependency

// global dependency - use it in any project
// npm install -g <packageName> - windows command to install a dependency as a global dependency
// sudo install -g <packageName> - mac/unix command to install a dependency as a global dependency

// package.json - the manifest file (stores important info about project/package)
// manual approach to creating package.json (create it in the root, then create the properties and everything else in it)
// npm init - the 'automated approach' (this is step by step and you can press enter to skip)
// npm init -y - with this process everything is set to default

// Testing out the lodash dependency
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);