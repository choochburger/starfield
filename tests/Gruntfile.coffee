module.exports = (grunt) ->

  grunt.initConfig
    jasmine:
      dist:
        src: '../lib/starfield.js'
        options:
          specs: 'specs/**/*.js'

  grunt.loadNpmTasks 'grunt-contrib-jasmine'

  # Tasks
  grunt.registerTask 'test',    ['jasmine']
  grunt.registerTask 'dev',     ['copy:dev']
  grunt.registerTask 'default', ['test']
