import { imports } from "../imports.js";

const { gulp, concat, babel } = imports;

async function initScript() {
    return gulp.src('./src/script/**/*.js')
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/script/'))
}

export default gulp.task('script', initScript)