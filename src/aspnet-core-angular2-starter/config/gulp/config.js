module.exports = function () {
    var //
        root = '',
        config = root + 'config/',
        webroot = "wwwroot/",
        appSrc = "app/",
        appDst = "./wwwroot/app/",
        npmSrc = "./node_modules/",
        npmDstLibs = webroot + "libs/",
        index = webroot + 'index.html',
        assetsRoot = webroot + '',
        assets = {
            styles: assetsRoot + 'styles/',
            images: assetsRoot + 'images/',
            fonts: assetsRoot + 'fonts/'
        },
        // javaScriptFiles = [
        //     './Scripts/*.js',
        //     './Scripts/!(lib)/**/*.js',
        //     '!./Scripts/_references.js',
        //     '!./Scripts/restricted/**/*Spec.js'
        // ],
        lessFiles = [
            'styles/**/*.less',
            '!styles/bootstrap.variables.less'
        ],
        cssFiles = [
            assets.styles + '**/*.css',
            '!' + assets.styles + '**/*.min.css'
        ],
        tsFiles = [
            appSrc + '**/!(*.spec)+(.ts)'
        ]
        src = {
            root: root,
            app: appSrc,
            npmLibs: npmSrc,
            tsFiles: tsFiles,
            lessFiles: lessFiles,
            cssFiles: cssFiles
        }
        dest = {
            root: root,
            webroot: webroot,
            app: appDst,
            npmLibs: npmDstLibs,
            index: index,
            assetsRoot: assetsRoot,
            assets: assets
        };

    var gulpConfig = {
        root: root,
        webroot: webroot,
        src: src,
        dest: dest
    };

    return gulpConfig;
};