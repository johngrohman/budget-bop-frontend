import { app, BrowserWindow } from "electron";
import path, { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1300,
        height: 800,
        webPreferences: {
            preload: join(__dirname, "preload.js"),
            nodeIntegration: false,
        },
    });

    const startUrl = "http://localhost:3000";
    mainWindow.loadURL(startUrl);

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
