module.exports = function(grunt) {

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('assemble');

  // Project configuration.
  grunt.initConfig({

    // Before generating any new files, remove any previously-created files.
    clean: {
      distribution: ['dist']
    },

    // Markdown to HTML
    markdown: {
      all: {
        options: {
          gfm: true,
          highlight: 'auto'
        },
        files: [
          {
            expand: true,
            src: 'Chapters/**/*.md',
            //src: 'chapters/*.md',
            dest: 'dist/html',
            ext: '.html'
          }
        ]
      }
    },

    // Markdown to PDF
    markdownpdf: {
      options: {
        concatFiles: true,
        paperFormat: 'A4',
        renderDelay: 2000,
        paperBorder: '1cm'
      },
      files: {
        src: 'Chapters/**/*.md',
        dest: 'dist/pdf'
      }
    },

    // Assemble for what?
    assemble: {
      options: {
        assets: 'assets',
        plugins: ['permalinks'],
        partials: ['includes/**/*.hbs'],
        layout: ['layouts/default.hbs'],
        data: ['data/*.{json,yml}']
      },
      pages: {
        src: ['Chapters/**/*.md'],
        dest: './'
      }
    },
  })

  grunt.registerTask('default', [
    'clean',
    'markdown',
    'markdownpdf'
  ])
}
