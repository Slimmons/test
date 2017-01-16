# ConcertGiraffe

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Basic Setup Instructions

**Install nodejs**

sudo apt-get install python-software-properties curl

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install nodejs

**install angular-cli**

sudo npm install -g angular-cli

**create new project**

ng new projectName

**start development server**

ng serve

**create new component (ng generate component)**

ng g c componentName

**create new component without new directory**

ng g c componentName --flat



## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NG CLI cheat sheet

new component directory

```ng g c componentName```

new component without directory

```ng g c componentName --flat```

new class

```ng g cl className```

## Templated Containers

Later if I decide to use templated containers, look up ng-content in section 2 lecture 19.  

## Databinding

Once I'm ready to add in databinding via golang, section 2 lecture 20 is where the explanation starts.

## Classes

* piece of music

composer

instrumentation (ie. which instruments, and how many)

difficulty level

* user

name

title

reputation

organization

* organization

organization name
