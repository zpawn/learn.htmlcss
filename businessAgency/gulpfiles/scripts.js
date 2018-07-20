const gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),

    _if = require('gulp-if'),
    arg = require('yargs')
        .alias('d', 'dev')
        .argv,

    config = {
        app: {
            src: [
                './src/js/**/*.js'
            ],
            destFile: 'app.min.js',
            dest: './build/js/.'
        },

        dep: {
            dep: [],
            destFile: 'dep.min.js',
            dest: './build/js/.'
        },
        sourcemaps: {
            loadMaps: true,
            largeFile: true
        },
        plumber: {
            errorHandler: notify.onError((err) => {
                return {
                    title: 'JavaScript',
                    message: err.message
                }
            })
        },
    };

////

gulp.task('js', () => {
    return gulp.src(config.app.src)
        .pipe(plumber(config.plumber))
        .pipe(
            _if(arg.dev, sourcemaps.init(config.sourcemaps))
        )
        .pipe(babel())
        .pipe(concat(config.app.destFile))
        .pipe(
            _if(arg.dev, sourcemaps.write())
        )
        .pipe(
            _if(!arg.dev, uglify())
        )
        .pipe(gulp.dest(config.app.dest))
});

gulp.task('js:watch', () => {
    arg.dev = true;
    gulp.watch('./src/js/**/*.js', gulp.series(['js']));
});

gulp.task('js:dep', () => {
    return gulp
        .src(config.dep.src)
        .pipe(
            _if(arg.dev, sourcemaps.init(config.sourcemaps))
        )
        .pipe(concat(config.dep.destFile))
        .pipe(
            _if(arg.dev, sourcemaps.write())
        )
        .pipe(
            _if(!arg.dev, uglify())
        )
        .pipe(gulp.dest(config.dep.dest))
});
