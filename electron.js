const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const BUILD_PATH = path.join(__dirname, 'build');
const INDEX_HTML = path.join(BUILD_PATH, 'index.html');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    // Prevent the native minimise shortcut (Cmd/Ctrl+M) from stealing focus.
    mainWindow.webContents.on('before-input-event', (event, input) => {
        const isMessageShortcut =
            (input.meta || input.control) && input.key?.toLowerCase() === 'm';

        if (isMessageShortcut) {
            event.preventDefault();
        }
    });

    if (!fs.existsSync(INDEX_HTML)) {
        const message = [
            'Unable to locate dist/index.html.',
            'Please run `npm run build` before starting Electron.'
        ].join(' ');
        throw new Error(message);
    }

    mainWindow.loadFile(INDEX_HTML);
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
