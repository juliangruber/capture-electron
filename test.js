const { test } = require('tap')
const screenshot = require('.')
const http = require('http')

let server, url

test('setup', t => {
  server = http.createServer((req, res) => res.end('ohai!'))
  server.listen(() => {
    url = `http://localhost:${server.address().port}`
    t.end()
  })
})

test('promise', async t => {
  const pic = await screenshot({ url })
  t.ok(pic)
  t.ok(Buffer.isBuffer(pic))
})

test('stream', t => {
  t.plan(2)
  screenshot
    .stream({ url })
    .once('data', chunk => t.ok(Buffer.isBuffer(chunk)))
    .on('end', () => t.ok(true))
})

test('cleanup', t => {
  server.close()
  t.end()
})
