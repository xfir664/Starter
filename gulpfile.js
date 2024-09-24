export async function clean() {
  return deleteSync('./build/', { force: true })
}

export function copyFonts() {
  return src('src/fonts/**/*.ttf')
    .pipe(gulp.dest('build/fonts'))
}

export function copyImages() {
  return gulp.src('src/images/**/*.{png,jpg}')
    .pipe(gulp.dest('build/images'))
}

export function copyHtml() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
}

export function build(done) {
  gulp.series(copyFonts, copyImages)(done);
}

export default gulp.series(clean, copyFonts, copyImages, copyHtml);