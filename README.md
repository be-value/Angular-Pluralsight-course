# Learning Angular
1. Install Node package manager from [nodejs](https://nodejs.org/en/download/)
2. Install Typescript package: `npm install -g typescript`
3. Install Angular CLI       : `npm install -g @angular/cli`
4. Create an Angular app     : `ng new my-app`
5. Install new Angular app   : `npm install`
6. Start new Angular app     : `npm start`

## Adding components to your app
1. Generate new component    : `ng g c my-component --flat`
2. OR Generate anything else : use this [Angular CLI Reference](https://cli.angular.io/reference.pdf)

## Adding bootstrap to your app
1. Install bootstrap package : `npm install --save bootstrap` (following [these instructions](https://www.techiediaries.com/angular-bootstrap/))
2. Do not install jquery or popper. They manipulate the DOM directly and that should only Angular do
3. Added @import `~bootstrap/dist/css/bootstrap.css` to styles.css
4. Install ng-bootstrap      : `npm install --save @ng-bootstrap/ng-bootstrap`
5. change app.modulse.ts     : add `import {NgbModule} from '@ng-bootstrap/ng-bootstrap';` and `, NgbModule.forRoot()` to the imports array

## To update the project to use scss
1. Install Node-sass package : `npm install node-sass --save-dev` (according to [these instructions](https://stackoverflow.com/questions/36220256/angular-cli-sass-options))
2. Set the default style ext : `ng set defaults.styleExt scss`
3. Fix in .angular.cli.json  : styles.css => styles.scss and rename this file

## Theming
Use this [article](https://dzone.com/articles/bootstrap-4-and-angular-a-beginners-guide-to-custo) to add and/or customize bootstrap themes

