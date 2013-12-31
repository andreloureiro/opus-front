module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect : {
            server : {
                options : {
                    port : 9999,
                    base : 'build'
                }
            }
        },

        sass : {
            dist : {
                options : {
                    style : 'expanded'
                },
                files : {
                    'src/base/base.css' : 'src/base/base.scss',
                    'src/grid/grid.css' : 'src/grid/grid.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    'build/opus-front2.css': 'build/opus-front.css'
                }
            }
        },

        csslint : {
            options: {
                csslintrc: '.csslintrc'
            },
            strict : {
                options : {
                    import : 2
                },
                src : ['build/**.css']
            }
        },

        watch : {
            css : {
                files : ['src/**/**.scss'],
                tasks : ['sass:dist'],
                options : {
                    livereload : true
                }
            }
        },

        concat : {
            dist : {
                src : ['src/intro.css', 'src/base/base.css', 'src/grid/grid.css'],
                dest : 'build/keemple.css'
            }
        }

    });

    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('test', ['csslint']);
    grunt.registerTask('build', ['autoprefixer', 'concat:dist']);

}