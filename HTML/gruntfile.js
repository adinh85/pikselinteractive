// Generated on 2014-01-14 using generator-angular 0.7.1
'use strict';

/* jshint node: true */
module.exports = function(grunt) {


    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Define the configuration for all the tasks
    grunt.initConfig({

        watch: {
            js: {
                files: ['scripts/{,**/}*.js'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['css/{,*/}*.css'],
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '{,**/}*.html',
                    'styles/{,*/}*.css',
                    'img/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        // The actual grunt server settings
        connect: {
            server: {
                options: {
                    hostname: '127.0.0.1',
                    keepalive: true,
                    port: 9999,
                    base: '.',
                    open: true
                }
            }
        }

    });

    grunt.registerTask('serve', function() {
        grunt.task.run([
            'connect:server',
            'watch'        
            ]);
    });

}