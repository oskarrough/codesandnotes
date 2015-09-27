---
title: Yeoman, Grunt and Compass sprites
---

**Update 12th of January 2014**: Lots of things changed since writing this article. Will update soon.

[Yeoman](http://yeoman.io/) (version 1.0 beta) uses handy [Grunt](http://gruntjs.com) (version 0.4.0) scripts like <span class="lang:default decode:true  crayon-inline ">$ grunt server</span>  and <span class="lang:default decode:true  crayon-inline ">$ grunt</span>  (build) to speed up your workflow, however, they don't work out of the box with the way [Compass sprites](http://compass-style.org/help/tutorials/spriting/) are normally configured. This will make it work. <!--more--> Normally Compass settings are in a config.rb file. With Grunt however it's possible to specify

[the settings](http://compass-style.org/help/tutorials/configuration-reference/) in the Gruntfile.js instead. This is the default in a new Yeoman project. Following a standard Yeoman folder structure, you compile your styles (probably Sass or Less) from /app/styles to a /.tmp directory which is not where Compass is looking for its image paths. Therefore we need to change the Compass settings <span class="lang:default decode:true  crayon-inline ">http_images_path</span>  and <span class="lang:default decode:true  crayon-inline ">http_generated_images_path</span> . However, these two settings are not directly accesible via the compass-cli, which means you can't write it in your Gruntfile.js. You have two solutions:

### 1. Specify a config.rb with Grunt Add

<span class="lang:default decode:true  crayon-inline ">config: 'config.rb'</span>  to your options of compass setting in Gruntfile.js (thanks, Starwilly)

### 2. Use the raw option You will need to make the following changes to your Compass settings in your Gruntfile.js.

<pre class="lang:js mark:10-11 decode:true">compass: {
            options: {
                require: 'susy',
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: 'app/components',
                relativeAssets: false,
                raw: 'http_images_path = '../images'nhttp_generated_images_path = '../images'n'
            },
            dist: {
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },</pre>

### Resources

- [gruntjs/grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
