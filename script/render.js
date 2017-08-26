const { app, BrowserWindow } = require('electron')

const url = process.argv[2]
const width = Number(process.argv[3])
const height = Number(process.argv[4])
const wait = Number(process.argv[5])
const format = process.argv[6]
const clip = process.argv[7] === 'true'

let win

app.on('ready', () => {
  win = new BrowserWindow({ width, height, show: false })
  win.loadURL(url)
  win.on('closed', () => {
    win = null
  })
  win.webContents.on('did-finish-load', () => {
    setTimeout(() => {
      // set background?
      const args = []
      if (clip) {
        args.push({
          x: 0,
          y: 0,
          width,
          height
        })
      }
      args.push(img => {
        const buf =
          format === 'jpg' || format === 'jpeg'
            ? img.toJPEG()
            : format === 'bmp' ? img.toBitmap() : img.toPNG()
        const written = process.stdout.write(buf)
        if (written) process.exit()
        else process.stdout.on('drain', () => process.exit())
      })
      win.capturePage(...args)
    }, wait)
  })
})
