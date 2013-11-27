# Grunt and Yeoman

[Yeoman](http://yeoman.io/) is an opinionated collection of workflows for all kinds of different projects. Yeoman (also just called Yo) sets up the a solid folder structure and fills your projects with best practices. This is called scaffolding. It relies heavily on Grunt and Bower.

[Grunt](http://gruntjs.com/) is a task-based command line JavaScript tool for automating common tasks in web development as compilation and building. It compiles, builds, tests and helps you develop your project.

Got it? Ok.

## Grunt: The JavaScript Task Runner

I remember the first time I learned about Grunt and was like "wow, hell no! Too much stuff I don't need, don't understand and don't want to invest time in." Now I'm 19 but my mind is older. It is worth the time.

> Why use a task runner?
In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

> Why use Grunt?
The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze.

When it comes to choosing and configuring all the Grunt tasks you'd want is where Yeoman comes in.

## What is Yeoman?

In my opinion, Yeoman is first and foremost a smart community of developers that help each other nail down best practices in our industry.

See Yeoman.md

## Installing Grunt

Next, install Yeoman, Grunt and Bower:
> npm install -g  grunt-cli bower

Make sure all global npm modules are up to date:
> npm update -g

Git clone your project. CD in to it and run:
> npm install && bower install

This will install all the dependancies in bower.json and package.json locally into the project.

In almost every project we're using Sass, Compass and Susy. Since Susy relies on both Sass and Compass as dependancies you will get all three just by installing Susy:
> gem install susy

## Yeoman

Grunt gives your project structure. In the root there are some configuration files:
bower.json -> a list of components managed through bower. Running “bower install” will install them into /app/components
package.json -> a list of components managed through npm. Running “npm install” will install them locally into the project

## Ideas for grunt

- deploy
- js linting
- building

### References

- [Gruntjs.com](http://gruntjs.com/)
- [Yeoman.io](http://yeoman.io/)
- http://www.integralist.co.uk/posts/grunt-boilerplate/ (A very thorough article explaining and helping you start Grunt)
- http://merrickchristensen.com/articles/gruntjs-workflow.html
- http://www.integralist.co.uk/posts/grunt-boilerplate/
