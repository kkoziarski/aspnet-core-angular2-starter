# Prerequisite
* Install `Node.js` and `npm` 
    * Verify that you are running at least node **v4.x.x** and npm **3.x.x** by running `node -v` and `npm -v`
* `> npm install -g npm`
* `> npm install -g bower`
* `> npm install -g gulp`
* `> npm install -g typescript`
* `> npm install -g typings`
* `> npm install -g yo`
* `> npm install -g grunt-cli`

# Build steps
Steps required after downloading this project
* `cd .\src\aspnet-core-angular2-starter`
* `> npm install`
* `> typings install`
* `> dotnet restore`
* `> dotnet build`
* `> gulp rebuild`


* __`> dotnet run`__

## Preconditions (optional)
* (optional) `> npm install -g generator-aspnet`
* (optional) `> npm install -g code-generator`
* (optional) `> yo aspnet` --> "WebApiApp" -> some-application-name

# Implementation steps 

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
* `gulpfile.js`, `config\gulp\config.js` and `config\gulp\tasks\...` (based on [Angular2 Starter](https://github.com/antonybudianto/angular2-starter))
    * `libs.js`
    * `typescript.js`
    * `less.js`
    * `clean.js`
    * `build.js`
* `.vscode\tasks.json` - configure tasks for VSCode
    * you can use VSCode Ctrl+P> task `[task name]`
        * `task build`
        * `task start dotnet`
        * `task restore`
        * `task ts (gulp)`
        * `task less (gulp)`
        * `bld-build-app (gulp)`
        * `rbd-rebuild (gulp)`
        * `task watch`
        * `task cl-clean-app`
        * `task cla-clean-all`

Sources:
[1](https://github.com/antonybudianto/angular2-starter)
[2](https://angular.io/docs/ts/latest/quickstart.html)
[3](http://asp.net-hacker.rocks/2016/04/04/aspnetcore-and-angular2-part1.html)
[4](http://www.mithunvp.com/angular-2-asp-net-core-visual-studio-code-typescript/)
[5](https://github.com/FabianGosebrink/ASPNET-Core-Angular2-StarterTemplate)
[6](https://angular.io/docs/ts/latest/cookbook/visual-studio-2015.html)

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