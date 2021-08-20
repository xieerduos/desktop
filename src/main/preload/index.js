import {contextBridge, ipcRenderer} from 'electron';
 

contextBridge.exposeInMainWorld('electron', {
    setIgnoreMouseEvents: (isIgnore, options) => {
        ipcRenderer.send('set-ignore-mouse-events', isIgnore, options);
    }
});
