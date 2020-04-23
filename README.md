# capture-electron

Capture screenshots using [electron](http://electron.atom.io/).

![CI](https://github.com/juliangruber/capture-electron/workflows/CI/badge.svg)

## Features

- Promise and Stream interfaces
- Configurable Viewport
- Waits for `DOMContentLoaded`
- File formats `png`, `jpg` and `bmp`

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

### screenshot.stream(options)

Takes the same options as above, but returns a stream instead.

Example:

```js
capture
  .stream({
    url: 'https://github.com/',
    width: 800,
    height: 600
  })
  .pipe(fs.createWriteStream(`${__dirname}/example-stream.png`))
  .on('close', () => console.log('open example-stream.png'))
```

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install capture-electron
```

## CI

This project requires an `xvfb` setup to be running in your CI environment.
For an example how to set one up, check out the [.travis.yml](https://github.com/juliangruber/capture-electron/blob/master/.travis.yml).
After that, no further setup is required however, as the electron executable is
installed automatically.

## Related projects

- __[capture-screenshot](https://github.com/juliangruber/capture-screenshot)__ &mdash; Capture screenshots in multiple browsers
- __[capture-chrome](https://github.com/juliangruber/capture-chrome)__ &mdash; Capture screenshots using Chrome
- __[capture-phantomjs](https://github.com/juliangruber/capture-phantomjs)__ &mdash; Capture screenshots using PhantomJS

## Sponsors

This module is proudly supported by my [Sponsors](https://github.com/juliangruber/sponsors)!

Do you want to support modules like this to improve their quality, stability and weigh in on new features? Then please consider donating to my [Patreon](https://www.patreon.com/juliangruber). Not sure how much of my modules you're using? Try [feross/thanks](https://github.com/feross/thanks)!

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
