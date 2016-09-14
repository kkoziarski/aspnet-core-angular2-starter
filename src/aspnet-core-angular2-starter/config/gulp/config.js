module.exports = function () {
    var //
        config = './config/',
        srcRoot = './Frontend/',
        destRoot = "wwwroot/",
        srcApp = srcRoot + "app/",
        destApp = "./wwwroot/app/",
        npmSrc = "./node_modules/",
        npmDstLibs = destRoot + "libs/",
        ignoreDestnpmLibs = '!' + npmDstLibs + '**',
        srcAssetFiles = [
            srcRoot + '**/*.html',
            srcRoot + '**/*.css',
            srcRoot + '**/*.{jpg,gif,png,svg,ico}',
        ],
        destAssets = {
            styles: [
                destRoot + '**/*.css',
                destRoot + '**/*.css.map',
                ignoreDestnpmLibs
            ],
            images: [
                destRoot + '**/*.{jpg,gif,png,svg,ico}',
                ignoreDestnpmLibs
            ],
            templates: [
                destRoot + '**/*.html',
                ignoreDestnpmLibs
            ],
            fonts: destRoot + 'fonts/'
        },
        lessFiles = [
            srcRoot + '**/*.less',
            '!' + srcRoot + 'styles/bootstrap.variables.less'
        ],
        destCssFiles = [
            destRoot + '**/*.css',
            '!' + destRoot + '**/*.min.css',
            ignoreDestnpmLibs
        ],
        tsFiles = [
            srcApp + '**/!(*.spec)+(.ts)'
        ],
        src = {
            root: srcRoot,
            app: srcApp,
            npmLibs: npmSrc,
            tsFiles: tsFiles,
            lessFiles: lessFiles,
            assetFiles: srcAssetFiles
        }
        dest = {
            root: destRoot,
            app: destApp,
            npmLibs: npmDstLibs,
            assets: destAssets,
            cssFiles: destCssFiles,
            ignoreDestnpmLibs: ignoreDestnpmLibs
        };

    var gulpConfig = {
        root: srcRoot,
        webroot: destRoot,
        src: src,
        dest: dest
    };

    return gulpConfig;
};
// javaScriptFiles = [
//     './Scripts/*.js',
//     './Scripts/!(lib)/**/*.js',
//     '!./Scripts/_references.js',
//     '!./Scripts/restricted/**/*Spec.js'
// ],