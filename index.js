const { promisify } = require('util')
const exec = promisify(require('child_process').exec)
const { spawn } = require('child_process')
const electron = require('electron')
const escape = require('shell-escape')

module.exports = ({
  url,
  width: width = 1024,
  height: height = 768,
  wait: wait = 0,
  format: format = 'png'
}) =>
  exec(
    escape([
      electron,
      `${__dirname}/script/render.js`,
      url,
      width,
      height,
      wait,
      format.toLowerCase()
    ]),
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
