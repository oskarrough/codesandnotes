# Relative sprite URLs with Compass and Grunt

// Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },


compass: {
            options: {
                // Makes use of the local Gemfile
                bundleExec: true,
                // … where we have defined the following:
                require: ['breakpoint', 'susy', 'sass-css-importer'],
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                httpFontsPath: '/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',

                imagesDir: '<%= yeoman.app %>/images',
                generatedImagesDir: '.tmp/images/generated',
                httpImagesPath: '../images',
                httpGeneratedImagesPath: '../images/generated',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },