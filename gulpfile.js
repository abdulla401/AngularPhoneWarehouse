/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    path = require('path'),
    print = require('gulp-print'),
    cache = require('gulp-cache'),
    eslint = require('gulp-eslint'),
    livereload = require('gulp-livereload'),
    del = require('del');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

gulp.task('index', function () {
    gulp.src('public/bow-index.html')
        .pipe(inject(gulp.src(['./public/js/**/*.js', 'public/css/main.css'], {read: false}, {relative: true})))
        .pipe(gulp.dest('dist'));
});
//wiredep
gulp.task('bower', function () {
    gulp.src('public/bow-index.html')
        .pipe(wiredep({
            optional: {
                js: [
                    'public/js/**.*.js'
                ]
            },
            goes: 'here'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('vendor-scripts', function() {

    return gulp.src(wiredep().js)

        .pipe(gulp.dest('dist/vendor'));

});

// Styles
gulp.task('styles', function() {
    return sass('src/styles/main.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('dist/styles'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src('public/js/**/*.js')
//        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
    return del(['dist/styles', 'dist/scripts', 'dist/images']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});


gulp.task('less', function () {
    return gulp.src('./public/js/**/*.less')
        .pipe(print())
        .pipe(less())
        .pipe(concat('custom.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('lint', function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['./public/js/**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['styles']);

    gulp.watch('./public/js/**/*.less', ['less']);

    gulp.watch('./public/js/**/*.js', ['lint']);

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/images/**/*', ['images']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);

});
