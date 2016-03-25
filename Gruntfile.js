module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    grunt.initConfig({
        "merge-json": {
            "i18n": {
                files: {
                    "dist/en.json": [ "public/**/*en.json" , "public/assets/zot/*en.json", "public/assets/foo/*-en.json" ],
                    "dist/de.json": [ "public/**/*-de.json" ]
                }
            }
        },
        watch: {
            files: [ "public/assets/bar/bar-en.json" , "public/assets/zot/*en.json", "public/assets/foo/*en.json" ],
            tasks: ['merge-json']
        }
    });



    grunt.registerTask('default', ['copy:dist']);
};
