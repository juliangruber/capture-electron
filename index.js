const { promisify } = require('util')
const exec = promisify(require('child_process').exec)
const { spawn } = require('child_process')
const electron = require('electron')

module.exports = ({
  url,
  width: width = 1024,
  height: height = 768,
  wait: wait = 0,
  format: format = 'png'
}) =>
  exec(
    `${electron} ${[
      `${__dirname}/script/render.js`,
      url,
      width,
      height,
      wait,
      format.toLowerCase()
    ].join(' ')}`,
    { maxBuffer: Infinity, encoding: 'buffer' }
  ).then(({ stdout }) => stdout)

module.exports.stream = ({
  url,
  width: width = 1024,
  height: height = 768,
  wait: wait = 0,
  format: format = 'png'
}) =>
  spawn(electron, [
    `${__dirname}/script/render.js`,
    url,
    width,
    height,
    wait,
    format.toLowerCase()
  ]).stdout
