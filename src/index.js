'use strict'

const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')
const path = require('path')

// restart when make change
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
})

// window program
let createWindow;


// start programas
app.on('ready', () => {
    // init window
    createWindowCreatePassword()

    // listen when close principal window
    createWindow.on('closed',() => {
        app.quit()
    })

    //Nav pagination
    // const NavWindow = Menu.buildFromTemplate(templateMenuNav)
    // Menu.setApplicationMenu(NavWindow)
})


//fuction to create CreatePassword
function createWindowCreatePassword(){
    createWindow = new BrowserWindow({
        width: 350,
        height: 370,
        title: 'Create Password',
        backgroundColor:'#A23896'
    })

    // Routing
    createWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    // Configuration window
    createWindow.resizable = false;
    Menu.setApplicationMenu(null)
}

//template nav
// const templateMenuNav = [
//     {
//         label: 'Create',

//     },
//     {
//         label: 'DevTools',
//         click(item,focusedWindow) {
//            focusedWindow.toggleDevTools();
//         }
//     }
// ]