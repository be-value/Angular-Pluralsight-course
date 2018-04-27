# Learning Angular
1. Install Node package manager from [nodejs](https://nodejs.org/en/download/)
2. Install Typescript package: `npm install -g typescript`
3. Install Angular CLI       : `npm install -g @angular/cli`
4. Create an Angular app     : `ng new my-app`
5. Install new Angular app   : `npm install`
6. Start new Angular app     : `npm start`

## Adding bootstrap to your app
1. Install bootstrap package : `npm install --save bootstrap` (following [these instructions](https://www.techiediaries.com/angular-bootstrap/)
2. Do not install jquery or popper. They manipulate the DOM directly and that should only Angular do
3. Added @import `~bootstrap/dist/css/bootstrap.css` to styles.css
4. Install ng-bootstrap      : `npm install --save @ng-bootstrap/ng-bootstrap`
5. change app.modulse.ts     : add `import {NgbModule} from '@ng-bootstrap/ng-bootstrap';` and `, NgbModule.forRoot()` to the imports array
