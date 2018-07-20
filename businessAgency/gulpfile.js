const tasks = [
    './gulpfiles/browserSync',
    './gulpfiles/clear',
    './gulpfiles/style',
    './gulpfiles/template',
    './gulpfiles/fonts',
    './gulpfiles/images',
    './gulpfiles/default'
];

tasks.forEach(task => require(task));
