server = require("./app/server")
// server = require("./app/ecosystem.config")
const exec = require('child_process').exec;
const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({width: 200, height: 400})
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on ("before-quit", (event) => {
    exec('pm2 stop all')
    process.exit (); // really let the app exit now
  });

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    exec('pm2 stop all')
    if (process.platform !== 'darwin') {
        exec('pm2 stop all')
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})