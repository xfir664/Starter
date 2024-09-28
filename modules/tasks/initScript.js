import { imports } from "../imports.js"
import { paths } from "../paths.js"

const { gulp, server, uglify, babel, concat } = imports;

const { dist, source } = paths;

export function initScript() {
    return gulp.src(`./${source}/scripts/**/*.js`)
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(uglify.default())
    .pipe(gulp.dest(`./${dist}/scripts/`))
    .pipe(server.stream())
}
