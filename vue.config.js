module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/renderer/pages/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Desktop'
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    pluginOptions: {
        electronBuilder: {
            preload: 'src/main/preload/index.js',
            chainWebpackMainProcess: config => {
                // Chain webpack config for electron main process only
            },
            chainWebpackRendererProcess: config => {
                // Chain webpack config for electron renderer process only (won't be applied to web builds)
            },
            // Use this to change the entrypoint of your app's main process
            mainProcessFile: 'src/main/background.js',
            // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
            // rendererProcessFile: 'src/myMainRenderFile.js',
            // Provide an array of files that, when changed, will recompile the main process and restart Electron
            // Your main process file will be added by default
            mainProcessWatch: ['src/main', 'src/renderer']
            // Provide a list of arguments that Electron will be launched with during "electron:serve",
            // which can be accessed from the main process (src/background.js).
            // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
            // Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well
            // mainProcessArgs: ['--arg-name', 'arg-value']
        }
    }
};
