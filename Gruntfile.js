module.exports = function(grunt) {

  'use strict';

  var globalConfig = {
    timestamp: grunt.template.today('yyyymmdd-HHMM')
  }

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig,
    uglify: {
      options: {
        banner: '/* Angular Experiments <%= globalConfig.timestamp %> - Minified JavaScript  */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'app/**/*.js', '!app/node_modules/*.js', '!app/bower_components/**/*.js']
    },
    sass: {
      dev: {
        files: {
          'app/styles/app.css': 'app/styles/scss/app.scss'
        }
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        browsers: ['Chrome']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  grunt.registerTask('build', ['sass:dist', 'uglify']);

};
