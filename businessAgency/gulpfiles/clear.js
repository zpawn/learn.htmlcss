const gulp = require('gulp'),
    rimraf = require('rimraf'),

    config = {
        dest: './build'
    };

gulp.task('clear', (cb) => rimraf(config.dest, cb));
