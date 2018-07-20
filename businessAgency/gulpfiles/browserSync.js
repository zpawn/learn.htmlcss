const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serv', () => {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: 'build'
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);
});
