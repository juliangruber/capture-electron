const { promisify } = require('util')
const exec = promisify(require('child_process').exec)
const electron = require('electron')

module.exports = ({
  url,
  width: width = 1024,
  height: height = 768,
  wait: wait = 0,
  format: format = 'png',
  clip: clip = false
}) =>
  exec(
    `${electron} ${[
      `${__dirname}/script/render.js`,
      url,
      width,
      height,
      wait,
      format.toLowerCase(),
      clip
    ].join(' ')}`,
    { maxBuffer: Infinity, encoding: 'buffer' }
  ).then(({ stdout }) => stdout)
