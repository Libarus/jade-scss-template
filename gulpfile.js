var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

var paths = {
    src: {
        dev:'dev/**/*.*',
        jade:'dev/**/*.jade',
        scss:'dev/scss/**/*.scss'
    },
    dest:{
        app:'app/',
        jade:'app/',
        scss:'app/css/'
    }
};

gulp.task('sass',function () {
    gulp.src(paths.src.scss)
        .pipe(sass({"bundleExec": true}))
        .pipe(gulp.dest(paths.dest.scss));
});

gulp.task('jade',function () {
    var YOUR_LOCALS = {};

    gulp.src(paths.src.jade)
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: '    '
        }))
        .pipe(gulp.dest(paths.dest.jade));
});

gulp.task('default',['jade','sass']);

gulp.task('watch',function () {
    gulp.watch(paths.src.dev,['default']);
});