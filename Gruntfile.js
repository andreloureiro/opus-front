module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 9999,
          base: 'build',
          hostname: '0.0.0.0'
        }
      },
      test: {
        options: {
          port: 9998,
          base: 'src',
          hostname: '0.0.0.0'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'src/base/base.css': 'src/base/base.scss',
          'src/grid/grid.css': 'src/grid/grid.scss',
          'src/buttons/buttons.css': 'src/buttons/buttons.scss',
          'src/forms/forms.css': 'src/forms/forms.scss',
          'src/tables/tables.css': 'src/tables/tables.scss',
          'src/menus/menus.css': 'src/menus/menus.scss',
          'src/messages/messages.css': 'src/messages/messages.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 2 version', 'ie 9']
        },
        src: 'build/*.css'
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['build/**.css']
      }
    },

    clean: {
      build: {
        src: ['build']
      }
    },

    concat: {
      base: {
        src: ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/base/base.css'],
        dest: 'build/base.css'
      },
      grid: {
        src: ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/grid/grid.css'],
        dest: 'build/grid.css'
      },
      buttons: {
        src: ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/buttons/buttons.css'],
        dest: 'build/buttons.css'
      },
      form: {
        src: ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/buttons/buttons.css'],
        dest: 'build/forms.css'
      },
      tables: {
        src: ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/tables/tables.css'],
        dest: 'build/tables.css'
      },
      menus: {
        src: ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/menus/menus.css'],
        dest: 'build/menus.css'
      },
      messages: {
        src: ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/messages/messages.css'],
        dest: 'build/messages.css'
      },
      all: {
        src: [
          'src/intro.css',
          'bower_components/normalize-css/normalize.css',
          'src/base/base.css',
          'src/grid/grid.css',
          'src/buttons/buttons.css',
          'src/forms/forms.css',
          'src/tables/tables.css',
          'src/menus/menus.css',
          'src/messages/messages.css'
        ],
        dest: 'build/opus-front.css'
      }
    },

    cssmin: {
      combine: {
        files: [{
          'build/opus-front.min.css': [
            'bower_components/normalize-css/normalize.css',
            'src/base/base.css',
            'src/grid/grid.css',
            'src/buttons/buttons.css',
            'src/forms/forms.css',
            'src/tables/tables.css',
            'src/menus/menus.css',
            'src/messages/messages.css'
          ]
        }, {
          'build/base.min.css': ['bower_components/normalize-css/normalize.css', 'src/base/base.css']
        }, {
          'build/grid.min.css': ['bower_components/normalize-css/normalize.css', 'src/grid/grid.css']
        }, {
          'build/buttons.min.css': ['bower_components/normalize-css/normalize.css', 'src/buttons/buttons.css']
        }, {
          'build/forms.min.css': ['bower_components/normalize-css/normalize.css', 'src/forms/forms.css']
        }, {
          'build/tables.min.css': ['bower_components/normalize-css/normalize.css', 'src/tables/tables.css']
        }, {
          'build/menus.min.css': ['bower_components/normalize-css/normalize.css', 'src/menus/menus.css']
        }, {
          'build/messages.min.css': ['bower_components/normalize-css/normalize.css', 'src/messages/messages.css']
        }]
      }
    },

    compress: {
      dist: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'build/',
        src: ['*.min.css'],
        dest: 'build/'
      }
    },

    filesize: {
      dist: {
        files: [{
          expand: true,
          cwd: 'build',
          src: '*'
        }]
      }
    },

    watch: {
      css: {
        files: ['src/**/**.scss'],
        tasks: ['sass:dist'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.registerTask('serve', [
    'connect:server',
    'watch'
  ]);
  grunt.registerTask('test', [
    'connect:test',
    'watch'
  ]);
  grunt.registerTask('build', [
    'clean:build',
    'concat:base',
    'concat:grid',
    'concat:buttons',
    'concat:form',
    'concat:tables',
    'concat:menus',
    'concat:messages',
    'concat:all',
    'autoprefixer:dist',
    'cssmin:combine',
    'compress:dist',
    'filesize:dist'
  ]);

}