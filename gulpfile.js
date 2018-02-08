const gulp = require('gulp');
const lp = require('gulp-load-plugins')();
const browserSync = require('browser-sync');



gulp.task('default', ['clean'], function(){
    gulp.run('dev');
});
gulp.task('dev', ['build', 'watch', 'browser-sync']);
gulp.task('build', ['webpack', 'html', 'styles', 'pics', 'fonts', 'php']);

gulp.task('webpack', function() {
    return gulp.src('src/js/index.js')
        .pipe(lp.webpack({
            output: {
                filename: 'main.js'
            }
        }))
        .pipe(gulp.dest('dist/js/'));
});


gulp.task('styles', function(){
   return gulp.src('src/sass/main.*')
        .pipe(lp.plumber({
            errorHandler: lp.notify.onError(function(err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(lp.sourcemaps.init())
        .pipe(lp.sass())
        .pipe(lp.autoprefixer({browsers: ['last 2 versions']}))
        .pipe(lp.rename('main.css'))
        .pipe(lp.cssnano())
        .pipe(gulp.dest('dist/styles/'));
});

gulp.task('html', function(){
    return gulp.src('src/**.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('pics', function(){
    return gulp.src('src/img/**.*')
        .pipe(lp.imagemin())
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('php', function(){
    return gulp.src('src/**.php')
        .pipe(gulp.dest('dist/'));
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/**.*')
        .pipe(gulp.dest('dist/fonts/'));
});


gulp.task('watch', function(){
    gulp.watch('src/sass/**.*', ['styles']);
    gulp.watch('src/js/**.*', ['webpack']);
    gulp.watch('src/**.html', ['html']);
    gulp.watch('src/assets/**.*', ['assets']);
    gulp.watch('src/fonts/**.*', ['fonts']);
    gulp.watch('src/**/**.*').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        open: false,
        server: {
            baseDir: 'dist/'
        }
    });
});

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(lp.clean());
});


// IMPORTANT !!!
//  for constrict main.js file in dist/js directory write in terminal:     npm run minifyjs

