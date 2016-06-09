    module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // browserSync: {
        //     bsFiles: {
        //         src : 'stylesheets/css/*.css'
        //     },

        //     options: {
        //         server: {
        //             baseDir: "./",
        //             index: "index.html",
        //             port: 3001
        //         }
        //     }
        // },

        browserSync: {
            bsFiles: {
                src : 'stylesheets/css/*.css'
            },

            options: {
                watchTask: true,
                
                server: {
                    baseDir: "./"
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
    grunt.loadNpmTasks('grunt-browser-sync');
    // grunt.loadNpmTasks('grunt-contrib-connect');


    // -----------------------------------------
    // Register Grunt tasks
    // -----------------------------------------

    grunt.registerTask('buildCss', ['sass']);
    grunt.registerTask('default', ['buildCss', 'browserSync', 'watch']);
};
