# Grunt

What is grunt

## Installing Grunt

Next, install Yeoman, Grunt and Bower:
> npm install -g yo grunt-cli bower

Make sure all global npm modules are up to date:
> npm update -g

Git clone your project. CD in to it and run:
> npm install && bower install

This will install all the dependancies in bower.json and package.json locally into the project.

In almost every project we're using Sass, Compass and Susy. Since Susy relies on both Sass and Compass as dependancies you will get all three just by installing Susy:
> gem install susy


## Grunt Webapp
Grunt gives your project structure. In the root there are some configuration files:
bower.json -> a list of components managed through bower. Running “bower install” will install them into /app/components
package.json -> a list of components managed through npm. Running “npm install” will install them locally into the project

## Ideas for grunt
- deploy
- js linting
- building

## Yeoman
