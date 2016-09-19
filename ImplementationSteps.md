# Implementation steps 

## Preconditions (optional)
* (optional) `> npm install -g generator-aspnet`
* (optional) `> npm install -g code-generator`
* (optional) `> yo aspnet` --> "WebApiApp" -> some-application-name

## Required steps
* **Static files**
    * `project.json` --> add `"Microsoft.AspNetCore.StaticFiles": "1.0.0"` in `dependencies` section
    * `Startup.cs` add `app.UseStaticFiles()`
* `> dotnet restore`
* `> dotnet build`
* `> dotnet run`
* Create `index.html` file in wwwroot folder
* Setup hosting port and urls in `Program.cs`
* Create `package.json` and add packages.  List of packages needed can be found on [5 min quickstart of Angular2](https://angular.io/docs/ts/latest/quickstart.html) website
* `> npm install`
* `typings.json' - create identifies TypeScript definition files. See [TypeScript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#typings) for details
* `> typings install`
* `tsconfig.json` - create the TypeScript compiler configuration file. See [TypeScript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#tsconfig) for details.
* install `bower` packages
* `gulpfile.js`, `config\gulp\config.js` and `config\gulp\tasks\...` (based on [Angular2 Starter](https://github.com/antonybudianto/angular2-starter))
    * `libs.js`
    * `typescript.js`
    * `less.js`
    * `clean.js`
    * `build.js`
* `.vscode\tasks.json` - configure tasks for VSCode
    * you can use VSCode Ctrl+P> task `[task name]`
        * `task build dotnet`
        * `task start dotnet`
        * `task restore`
        * `task ts (gulp)`
        * `task less (gulp)`
        * `build (gulp)`
        * `rebuild (gulp)`
        * `task watch`
        * `task clean-app`
        * `task clean-all`
* `systemjs.config.js` - create the SystemJS configuration file
* add angular start TypeScript files `app\app.component` `app\app.module.ts` `app\main.ts`
* add `systemjs.config.js` and angular JS files to `index.html`
* ---------- Angular2 simplest example is working here

Core libraries
```
npm install @angular/core --save
npm install @angular/common --save
npm install @angular/compiler --save
npm install @angular/platform-browser --save
npm install @angular/platform-browser-dynamic --save
npm install @angular/router --save
npm install @angular/forms --save
npm install @angular/http --save
```

Optional libraries
```
npm install @angular2-material/{core,button,card,...}@latest
```