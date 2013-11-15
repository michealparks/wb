module.exports = (grunt) ->
	grunt.initConfig
		pkg : grunt.file.readJSON 'package.json'

		# Move files/directories.
		copy :
			build : { files : [
				{
					expand : true
					src    : ['index.html']
					dest   : 'build/'}
				{
					expand : true
					cwd    : 'jslib/'
					src    : ['**']
					dest   : 'build/'}
			]}

		# Compile.
		coffee :
			options : { bare : true }
			build : { files : { 'js/app.js' : ['coffee/app.coffee'] }}
		less :
			build : { files : { 'css/default.css' : "css/default.less" }}

		# Minify.
		cssmin :
			build : { files : { 'build/default.min.css' : 'css/default.css' }}
		uglify :
			build : { files : { 'build/app.min.js' : 'js/*.js' }}
		embed :
			options : { threshold : '1000KB' }
			build : { files : { 'build/index.html' : 'build/index.html'}}
		htmlmin :
			options :
				removeComments : true
				collapseWhitespace : true
			build  : { files : { 'build/index.min.html' : 'build/index.html' }}

		clean : [
			'build/*.js', 'build/*.css', 'build/index.html'
		]

		# Development.
		watch :
			scripts :
				files : ['coffee/*.coffee', 'css/*.less', 'index.html']
				tasks : ['copy', 'coffee', 'less', 'uglify', 'cssmin', 'embed', 'htmlmin', 'clean']
				options : 
					spawn : false
					livereload : true

	grunt.loadNpmTasks 'grunt-contrib-copy'

	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-less'

	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-embed'
	grunt.loadNpmTasks 'grunt-contrib-htmlmin'

	grunt.loadNpmTasks 'grunt-contrib-clean'

	grunt.loadNpmTasks 'grunt-contrib-watch'

	grunt.registerTask 'default', () ->
		grunt.log.writeln '''

			Raedix Dope Assembly Line Version 0.1.0.



			Usage:
				grunt watch:<minify>   Watch and live update a repository.
				grunt build:<minify>   Build repository for production.

			Options:
				<minify>               Boolean value. Defaults to true.

			'''