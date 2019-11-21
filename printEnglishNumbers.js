const cmdLineArgs = process.argv.slice(2);
const getErrorMsgOrRequireEngNum = require("./src/generateEnglishNum.js")
  .getErrorMsgOrRequireEngNum;

console.log(getErrorMsgOrRequireEngNum(cmdLineArgs));