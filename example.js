const capture = require('.')
const fs = require('fs')

capture({
  url: 'https://github.com/',
  width: 800,
  height: 600
}).then(screenshot => {
  fs.writeFileSync(`${__dirname}/example.png`, screenshot)
  console.log('open example.png')
})
