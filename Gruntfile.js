module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      all: [
        "app/**/*.js",
        "Gruntfile.js"
      ],
      options: {
        curly: true,
        latedef: true,
        undef: true,
        unused: true,
        globals: {
          angular: true,
          console: true,
          module: true,
          describe: true,
          it: true,
          beforeEach: true,
        }
      }
    },
    less: {
      all: {
        files: {
          "assets/css/style.css": "assets/less/style.less"
        }
      }
    },
    replace: {
      // Build index.html
      buildHTML: {
        options: {
          patterns: [
            {
              match: 'version',
              replacement: '<%= pkg.version %>'
            }
          ]
        },
        files: [
          { flatten: true, src: 'index.tmpl.html', dest: 'index.html' }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-replace");

  // Default task(s).
  grunt.registerTask("default", ["dev"]);
  grunt.registerTask("dev", ["jshint", "build"]);
  grunt.registerTask("build", ["less", "replace"]);
};