/*global module:false*/

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        dist: 'dist/' + '<%= pkg.version %>',
        cssDist: '<%= dist %>' + '/css/<%= pkg.name %>.min.css',
        indexDist: '<%= dist %>' + '/html/index.min.html',

        // Task configuration.
        clean: {
          build: {
            src: ['<%= dist %>']
          }
        },
        concat: {
            options: {
                seperator: ";",
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/personal-site/**/*.js', 'bower/jquery/dist/jquery.min.js'],
                dest: '<%= dist %>' + '/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: '<%= dist %>' + '/js/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/personal-site/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                // remove warnings of known globals
                node: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    console: true,
                    module: true,
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            combine: {
                files: {
                    '<%= cssDist %>': ['src/personal-site/css/*.css', 'bower/animate.css/animate.min.css']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhiteSpace: true,
                    maxLinelength: 80,
                    keepClosingSlash: false,
                    removeAttributeQuotes: true,
                    removeScriptTypeAttributes: true,
                    removeTagWhitespace: true,
                    useShortDoctype: true
                },
                files: {
                    '<%= indexDist %>': 'src/personal-site/html/index.html'
                }
            }
        },
        imagemin: {
            dist: {
              options: {
                optimizationLevel: 5,
                progressive: true
              },
              files: [{
                expand: true,
                cwd: 'resources/media/',
                src: ['**/*.jpeg'],
                dest: '<%= dist %>'
              }]
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task.
    grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'cssmin', 'htmlmin', 'imagemin']);
};
