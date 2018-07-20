const gulp = require('gulp');

gulp.task('watch', gulp.parallel('tpl:watch', 'scss:watch', 'js:watch'));

gulp.task('copy', gulp.parallel('fonts', 'images'));

gulp.task('build', gulp.series(
    'clear',
    gulp.parallel('js', 'tpl', 'scss', 'images', 'sprite', 'fonts')
));

gulp.task('default', gulp.series(
    'build',
    gulp.parallel('watch', 'serv')
));
