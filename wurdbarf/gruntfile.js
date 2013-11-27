module.exports = function(grunt) {
  // Defines discrete list of tasks, may be combined
  var compileTasks = ['coffee:build']; //'jade', 'stylus', 'autoprefixer', 'coffee'];
  var minifyTasks = []; //'cssmin', 'uglify', 'embed', 'htmlmin', 'clean:min'];
  var finishTasks = [];
  
  // Configures grunt tasks
  grunt.initConfig({
    jade: {
      build: {
        files: {'build/index.html': 'develop/partials/*.jade'}
      }
    },
    stylus: {
      build: {
        files: {'build/main.css': 'develop/css/*.styl'}
      }
    },
    autoprefixer: {
      build: {
        src: 'build/main.css',
        dest: 'build/main.css'
      }
    },
    coffee: {
      build: {
        options: {bare: true},
        files: {'build/app.js': ['develop/coffee/*.coffee']}
      }
    },
    
    cssmin: {
      build: {
        files: {'build/main.css': 'build/main.css'}
      }
    },
    uglify: {
      build: {
        files: {'build/app.js': 'build/app.js'}
      }
    },
    embed: {
      options: {threshold: '1000KB'},
      build: {
        files: {'build/index.html': 'build/index.html'}
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      build: {
        files: {'build/index.min.html': 'build/index.html'}
      }
    },
    
    clean: {
      min: ['build/*.js', 'build/*.css']
    },
    
    watch: {
      options: { 
        livereload: true
      },
      compress: {
        files: ['develop/**', 'gruntfile.coffee'],
        tasks: compileTasks.concat(minifyTasks)
      },
      noCompress: {
        files: ['develop/**', 'gruntfile.coffee'],
        tasks: compileTasks
      }
    }
  });
  
  // Loads node modules
  require('load-grunt-config')(grunt);
  
  // Compile task, recommended for deployment
  grunt.registerTask('compile', function() {
    console.log (arguments[0])
    if (arguments[0] == 'nocompress') {
      console.log ('here')
      grunt.task.run(compileTasks)
    } else {
      //grunt.task.run(compileTasks.concat(minifyTasks));
    }
  });
  
  // Shows documentation
  grunt.registerTask('default', function() {
    //grunt.log.writeln();
      // '''
  
      // Raedix Dope Assembly Line Version 0.1.0.
      
      // Usage:
      // grunt watch:<minify>   Watch and live update a repository.
      // grunt build:<minify>   Build repository for production.
      
      // Option:
      // <minify>               Set either 'compress' or 'noCompress'
    
      // '''
    //);
  });
};