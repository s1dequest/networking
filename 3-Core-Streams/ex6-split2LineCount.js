const split = require('split2');
const through = require('through2');

var count = 0;
process.stdin
  .pipe(split())
  .pipe(through((buf, enc, next) => {
    console.log(buf);
    next();
  }));
