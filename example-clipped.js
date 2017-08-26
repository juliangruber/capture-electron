const capture = require('.')
const fs = require('fs')

capture({
  url: 'https://github.com/',
  width: 320,
  height: 320,
  clip: true
}).then(screenshot => {
  fs.writeFileSync(`${__dirname}/example-clipped.png`, screenshot)
  console.log('open example.png')
})
