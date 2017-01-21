module.exports = function () {
    var //
        config = './config/',
        srcRoot = './src/',
        destRoot = "../Backend/wwwroot/",
        srcApp = srcRoot + "app/",
        destApp = "../Backend/wwwroot/app/",
        npmSrc = "./node_modules/",
        npmDstLibs = destRoot + "libs/",
        ignoreDestNpmLibs = '!' + npmDstLibs + '**/*',
        srcAssetFiles = [
            '**/*.html',
            '**/*.{jpg,gif,png,svg,ico}',
        ],
        destAssets = {
            styles: [ // styles to clean
                destRoot + '**/*.css',
                destRoot + '**/*.css.map',
                ignoreDestNpmLibs
            ],
            images: [
                destRoot + '**/*.{jpg,gif,png,svg,ico}',
                ignoreDestNpmLibs
            ],
            templates: [
                destRoot + '**/*.html',
                ignoreDestNpmLibs
            ],
            fonts: destRoot + 'fonts/'
        },
        lessFiles = [
            '**/*.less',
            '!' + srcRoot + 'styles/bootstrap.variables.less'
        ],
        tsFiles = [
            '**/!(*.spec)+(.ts)'
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
            ignoreDestNpmLibs: ignoreDestNpmLibs
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