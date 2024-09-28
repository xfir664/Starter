import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { gulp, ttf2woff, ttf2woff2 } = imports;
const { raw, source } = paths

function convertFonst () {
    return gulp.src(`./${raw}/fonts/**/*.ttf`)
    .pipe(ttf2woff())
    .pipe(gulp.dest(`./${source}/fonts`))
    .pipe(gulp.src(`./${raw}/fonts/**/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(`./${source}/fonts`))
}

export default gulp.task('convertFonts', convertFonst)