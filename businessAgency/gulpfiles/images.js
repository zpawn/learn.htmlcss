const gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),

    config = {
        images: {
            src: './src/images/**/*.*',
            dest: 'build/images'
        },
        sprite: {
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            imgPath: '../images/sprite.png',
            padding: 5
        }
    };

////

gulp.task('images', () => {
    return gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.dest));
});

gulp.task('sprite', (cb) => {
    const spriteData = gulp
        .src('./src/images/icons/*.png')
        .pipe(spritesmith(config.sprite));

    spriteData.img.pipe(gulp.dest('./build/images/'));
    spriteData.css.pipe(gulp.dest('./src/scss/global/'));
    cb();
});
