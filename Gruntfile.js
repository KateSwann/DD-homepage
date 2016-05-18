    module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 9001,
                    index: 'index.html'
                }
            }
        },

        sass: {
            options: {
                loadPath: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'nested'
                },
                files: [{
                    expand: true,
                    cwd: 'stylesheets/scss',
                    src: ['*.scss'],
                    dest: 'stylesheets/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            grunt: { 
                files: ["Gruntfile.js"], 
                tasks: ["default"],
                options: {
                  livereload: true
                } 
            },

            sass: {
                files: ["stylesheets/scss/**/*.scss","bower_components/foundation/scss/foundation/*.scss"],
                tasks: ["buildCss"],
                options: {
                  livereload: true
                }
            }
        }
    });

    // -----------------------------------------
    // Load Grunt tasks
    // -----------------------------------------

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // -----------------------------------------
    // Register Grunt tasks
    // -----------------------------------------

    grunt.registerTask('buildCss', ['sass']);
    grunt.registerTask('default', ['buildCss','connect', 'watch']);
};
