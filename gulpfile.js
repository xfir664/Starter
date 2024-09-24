const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Подключаем gulp-sass и указываем компилятор

// Задача для компиляции SCSS в CSS
gulp.task('sass', function() {
    return gulp.src('src/styles/**/*.scss') // Путь к вашим SCSS файлам
        .pipe(sass().on('error', sass.logError)) // Компилируем и обрабатываем ошибки
        .pipe(gulp.dest('dist/css')); // Путь для сохранения скомпилированных CSS файлов
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass')); // Следим за изменениями в SCSS файлах
});



// Задача по умолчанию
gulp.task('default', gulp.series('dev'));