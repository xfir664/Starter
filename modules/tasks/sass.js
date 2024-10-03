import { imports } from "../imports.js";
import { paths } from "../paths.js";
import autoPrefixer from "gulp-autoprefixer";
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

const { dartSass , gulpSass, gulp, server } = imports;
const { dist, source } = paths;

const sassCompiler = gulpSass(dartSass, {
    errorLogToConsole: true,
    outputStyle: 'compressed'
});

export function sass () {
    return gulp.src(`./${source}/scss/styles.scss`)
    .pipe(sourcemaps.init())
    .pipe(sassCompiler())
    .pipe(autoPrefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${dist}/styles/`))
    .pipe(server.stream())
}
