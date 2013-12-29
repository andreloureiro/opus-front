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
                    'build/opus-front.css' : ['src/**/**.scss']
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
        }

    });

    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('test', ['csslint']);
    grunt.registerTask('build', ['autoprefixer']);

}