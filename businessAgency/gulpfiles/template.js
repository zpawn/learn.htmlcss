const gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    arg = require('yargs')
        .alias('d', 'dev')
        .argv,

    config = {
        src: './src/tpl/**/*.pug',
        dest: './build/.',
        pug: {},
        plumber: {
            errorHandler: notify.onError((err) => {
                return {
                    title: 'Pug',
                    message: err.message
                }
            })
        }
    };

////

gulp.task('tpl', () => {

    const pugConfig = Object.assign({}, config.pug, {
        pretty: !!arg.dev
    });

    return gulp.src(config.src)
        .pipe(plumber(config.plumber))
        .pipe(pug(pugConfig))
        .pipe(gulp.dest(config.dest));
});

gulp.task('tpl:watch', () => {
    arg.dev = true;
    gulp.watch('./src/tpl/**/*.pug', gulp.series('tpl'));
});
