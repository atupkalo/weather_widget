const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');


gulp.task('default', ['clean'], function(){
    gulp.run('dev');
});
gulp.task('dev', ['build', 'watch', 'browser-sync']);
gulp.task('build', ['scripts', 'html', 'styles', 'assets', 'fonts']);

gulp.task('scripts', function(){
    return gulp.src('src/js/**.*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('styles', function(){
   return gulp.src('src/sass/main.*')
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(rename('main.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles/'));
});

gulp.task('html', function(){
    return gulp.src('src/**.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('assets', function(){
    return gulp.src('src/assets/**.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/'));
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/**.*')
        .pipe(gulp.dest('dist/fonts/'));
});


gulp.task('watch', function(){
    gulp.watch('src/sass/**.*', ['styles']);
    gulp.watch('src/js/**.*', ['scripts']);
    gulp.watch('src/**.html', ['html']);
    gulp.watch('src/assets/**.*', ['assets']);
    gulp.watch('src/fonts/**.*', ['fonts']);
    gulp.watch('src/**/**.*').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    });
});

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});




