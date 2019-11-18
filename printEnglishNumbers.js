const cmdLineArgs = process.argv.slice(2);
const getEngNum = require('./src/generateEnglishNum.js').getEngNum;

console.log(getEngNum(cmdLineArgs));

