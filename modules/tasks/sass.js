import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { dartSass , gulpSass, gulp, browserSync } = imports;
const { dist, source } = paths;

const sassCompiler = gulpSass(dartSass, {
    errorLogToConsole: true,
    outputStyle: 'compressed'
});

async function addSass () {
    function initSass () {
        return gulp.src(`./${source}/styles/styles.scss`)
        .pipe(sassCompiler())
        .pipe(gulp.dest(`./${dist}/styles/`))
    }

    function watchSass() {
        gulp.watch(`./${source}/styles/**/*.scss`, initSass);
        gulp.watch(`./${dist}/styles`).on('change', browserSync.reload);
    }

    initSass();
    watchSass();
}

export default gulp.task('sass', addSass);