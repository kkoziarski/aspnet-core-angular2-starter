module.exports = function () {
    var //
        config = './config/',
        srcRoot = './Frontend/',
        destRoot = "wwwroot/",
        srcApp = srcRoot + "app/",
        destApp = "./wwwroot/app/",
        npmSrc = "./node_modules/",
        npmDstLibs = destRoot + "libs/",
        ignoreDestNpmLibs = '!' + npmDstLibs + '**/*',
        srcAssetFiles = [
            srcRoot + '**/*.html',
            srcRoot + '**/*.{jpg,gif,png,svg,ico}',
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
            srcRoot + '**/*.less',
            '!' + srcRoot + 'styles/bootstrap.variables.less'
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