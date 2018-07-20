const gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    csso = require('gulp-csso'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    _if = require('gulp-if'),
    arg = require('yargs')
        .alias('d', 'dev')
        .argv,

    config = {
        src: './src/scss/index.scss',
        dest: './build/css/.',
        csso: {
            comments: false,
            sourceMap: false
        },
        rename: {
            basename: 'style',
            suffix: '.min'
        },
        plumber: {
            errorHandler: notify.onError((err) => {
                return {
                    title: 'Scss',
                    message: err.message
                }
            })
        }
    };

gulp.task('scss', () => {
    return gulp.src(config.src)
        .pipe(plumber(config.plumber))
        .pipe(
            _if(arg.dev, sourcemaps.init())
        )
        .pipe(gulpSass())
        .pipe(
            _if(arg.dev, sourcemaps.write())
        )
        .pipe(
            _if(!arg.dev, csso(config.csso))
        )
        .pipe(rename(config.rename))
        .pipe(gulp.dest(config.dest));
});

gulp.task('scss:watch', () => {
    arg.dev = true;
    gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
});
