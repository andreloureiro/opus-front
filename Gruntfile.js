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
            },
            test : {
                options : {
                    port : 9998,
                    base : 'src'
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
                    'src/forms/forms.css' : 'src/forms/forms.scss',
                    'src/tables/tables.css' : 'src/tables/tables.scss',
                    'src/menus/menus.css' : 'src/menus/menus.scss',
                    'src/messages/messages.css' : 'src/messages/messages.scss'
                }
            }
        },

        // autoprefixer: {
        //     dist: {
        //         files: {
        //             'build/opus-front2.css': 'build/opus-front.css'
        //         }
        //     }
        // },

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
                        'build/opus-front.min.css' : [
                        'bower_components/normalize-css/normalize.css',
                        'src/base/base.css',
                        'src/grid/grid.css',
                        'src/buttons/buttons.css',
                        'src/forms/forms.css',
                        'src/tables/tables.css',
                        'src/menus/menus.css',
                        'src/messages/messages.css']
                    },
                    {
                        'build/base.min.css' : ['bower_components/normalize-css/normalize.css', 'src/base/base.css']
                    },
                    {
                        'build/grid.min.css' : ['bower_components/normalize-css/normalize.css', 'src/grid/grid.css']
                    },
                    {
                        'build/buttons.min.css' : ['bower_components/normalize-css/normalize.css', 'src/buttons/buttons.css']
                    },
                    {
                        'build/forms.min.css' : ['bower_components/normalize-css/normalize.css', 'src/forms/forms.css']
                    },
                    {
                        'build/tables.min.css' : ['bower_components/normalize-css/normalize.css', 'src/tables/tables.css']
                    },
                    {
                        'build/menus.min.css' : ['bower_components/normalize-css/normalize.css', 'src/menus/menus.css']
                    },
                    {
                        'build/messages.min.css' : ['bower_components/normalize-css/normalize.css', 'src/messages/messages.css']
                    },
                    {
                        'individual_build/base.min.css' : ['bower_components/normalize-css/normalize.css', 'src/base/base.css']
                    },
                    {
                        'individual_build/grid.min.css' : 'src/grid/grid.css'
                    },
                    {
                        'individual_build/buttons.min.css' : 'src/buttons/buttons.css'
                    },
                    {
                        'individual_build/forms.min.css' : 'src/forms/forms.css'
                    },
                    {
                        'individual_build/tables.min.css' : 'src/tables/tables.css'
                    },
                    {
                        'individual_build/menus.min.css' : 'src/menus/menus.css'
                    },
                    {
                        'individual_build/messages.min.css' : 'src/messages/messages.css'
                    }
                ]
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
            tables : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/tables/tables.css'],
                dest : 'build/tables.css'
            },
            menus : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/menus/menus.css'],
                dest : 'build/menus.css'
            },
            messages : {
                src : ['src/intro.css', 'bower_components/normalize-css/normalize.css', 'src/messages/messages.css'],
                dest : 'build/messages.css'
            },
            all : {
                src : [
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
                dest : 'build/opus-front.css'
            }
        },

        clean : {
            build : {
                src : ['build']
            }
        }

    });

    grunt.registerTask('serve', ['connect:server', 'watch']);
    grunt.registerTask('test', ['connect:test', 'watch']);
    grunt.registerTask('build', ['clean:build', 'concat:base', 'concat:grid', 'concat:buttons', 'concat:form', 'concat:tables', 'concat:menus', 'concat:messages', 'concat:all', 'cssmin:combine']);

}