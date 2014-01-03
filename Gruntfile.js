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
                    'src/grid/grid.css' : 'src/grid/grid.scss',
                    'src/buttons/buttons.css' : 'src/buttons/buttons.scss',
                    'src/forms/forms.css' : 'src/forms/forms.scss'
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

        cssmin : {
            options : {
                report : 'gzip'
            },
            combine : {
                files : [
                    {
                        'build/opus-front.min.css' : ['bower_components/normalize-css/normalize.css', 'src/base/base.css', 'src/grid/grid.css', 'src/buttons/buttons.css', 'src/forms/forms.css']
                    },
                    {
                        'build/base.min.css' : 'src/base/base.css'
                    },
                    {
                        'build/grid.min.css' : 'src/grid/grid.css'
                    },
                    {
                        'build/buttons.min.css' : 'src/buttons/buttons.css'
                    },
                    {
                        'build/forms.min.css' : 'src/forms/forms.css'
                    }
                ]
                // modules : {
                //     buttons : {
                //         files : {
                //             'build/buttons.css' : 'src/buttons/buttons.css'
                //         }
                //     },
                //     forms : {
                //         files : {
                //             'build/forms.css' : 'src/forms/forms.css'
                //         }
                //     }
                // }
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
            base : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/base/base.css'],
                dest : 'build/base.css'
            },
            grid : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/grid/grid.css'],
                dest : 'build/grid.css'
            },
            buttons : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/buttons/buttons.css'],
                dest : 'build/buttons.css'
            },
            form : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/buttons/buttons.css'],
                dest : 'build/forms.css'
            },
            all : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/base/base.css', 'src/grid/grid.css', 'src/buttons/buttons.scss', 'src/forms/forms.css'],
                dest : 'build/keemple.css'
            }
        }

    });

    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('test', ['csslint']);
    grunt.registerTask('build', ['autoprefixer', 'concat:base', 'concat:grid', 'concat:buttons', 'concat:form', 'concat:all', 'cssmin:combine']);

}