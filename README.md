# How to steps 

## Preconditions
* (optional) `> npm install -g generator-aspnet`
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

Sources:
[1](https://github.com/antonybudianto/angular2-starter)
[2](http://asp.net-hacker.rocks/2016/04/04/aspnetcore-and-angular2-part1.html)
[3](http://www.mithunvp.com/angular-2-asp-net-core-visual-studio-code-typescript/)
[4](https://github.com/FabianGosebrink/ASPNET-Core-Angular2-StarterTemplate)

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