const gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),

    config = {
        sprite: {
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            imgPath: '../images/sprite.png',
            padding: 5
        }
    };

////

gulp.task('images', () => {
    return gulp.src('./src/images/**/*.*')
        .pipe(gulp.dest('build/images'));
});

gulp.task('sprite', (cb) => {
    const spriteData = gulp
        .src('./src/images/icons/*.png')
        .pipe(spritesmith(config.sprite));

    spriteData.img.pipe(gulp.dest('./build/images/'));
    spriteData.css.pipe(gulp.dest('./src/scss/components/'));
    cb();
});
