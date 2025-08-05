// CommonJS 모듈 예시
// Node.js 런타임 환경에서 사용됨

// @ts-nocheck
const fs = require('fs')

module.exports = {
  doStuff: function() {
    fs.readFile('./example-1.html', 'utf8', function (err, data) {
      console.log(data)
    })
  },
}
