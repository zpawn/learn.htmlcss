const gulp = require('gulp');

gulp.task('watch', gulp.parallel('tpl:watch', 'scss:watch'));

gulp.task('copy', gulp.parallel('fonts', 'images'));

gulp.task('default', gulp.series(
    'clear',
    gulp.parallel('tpl', 'scss', 'images', 'sprite', 'fonts'),
    gulp.parallel('watch', 'serv')
));
