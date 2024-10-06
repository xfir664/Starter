import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { 
    dartSass,
    gulpSass,
    gulp,
    server,
    autoPrefixer,
    cleanCSS,
    sourcemaps,
    sassGlob,

} = imports;

const { dist, source } = paths;

const sassCompiler = gulpSass(dartSass, {
    errorLogToConsole: true,
    outputStyle: 'compressed'
});

export function sass () {
    return gulp.src(`./${source}/scss/styles.scss`)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sassCompiler())
    .pipe(autoPrefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${dist}/styles/`))
    .pipe(server.stream())
}
