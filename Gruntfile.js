module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyy-mm-dd") %> */\n'
			},
			build: {
				src: 'dist/L.Control.Rose.js',
				dest: 'dist/L.Control.Rose.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ["uglify"]);
};

