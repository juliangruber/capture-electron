# capture-electron

Capture screenshots using [electron](http://electron.atom.io/).

[![build status](https://secure.travis-ci.org/juliangruber/capture-electron.png)](http://travis-ci.org/juliangruber/capture-electron)

## Example

Capture a `800x600` screenshot of [github.com](http://github.com):

```js
const capture = require('capture-electron')
const fs = require('fs')

capture({
  url: 'https://github.com/',
  width: 800,
  height: 600
}).then(screenshot => {
  fs.writeFileSync(`${__dirname}/example.png`, screenshot)
  console.log('open example.png')
})
```

![github.com](https://raw.github.com/juliangruber/capture-electron/master/example.png)

## API

### screenshot({ url, width = 1024, height = 768, wait = 0, format = 'png' })

Capture a screenshot of `url`, returns a `Promise` which resolves with a buffer.

Options:

- `url` Page url
- `width` Viewport width
- `height` Viewport height
- `wait` Time in `ms` to wait after the `DOMContentLoaded` event
- `format` File format (`png`, `jpg`, `bmp`)

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install capture-electron
```

## License

(MIT)

Copyright (c) 2017 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
