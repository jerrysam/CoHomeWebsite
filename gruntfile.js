'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      sass: {
        files: "assets/sass/*.scss",
        tasks: "sass:dev"
      }
    },
    sass: {
      dev: {
        files: {
          "assets/css/main.css": "assets/sass/main.scss"
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Launch BrowserSync + watch task
  grunt.registerTask('default', ['browserSync', 'watch']);
};
