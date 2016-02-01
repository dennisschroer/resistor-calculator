module.exports = function (grunt) {

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
        }
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    // Default task(s).
    grunt.registerTask("default", ["dev"]);
    grunt.registerTask("dev", ["jshint", "build"]);
    grunt.registerTask("build", ["less"]);
};