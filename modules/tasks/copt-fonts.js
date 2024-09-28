import { imports } from '../imports.js';
import { paths } from '../paths.js';

const { gulp } = imports;
const { dist, source } = paths

export function copyFonts () {
    return gulp.src(`./${source}/fonts/**/*.{woff,woff2}`)
    .pipe(gulp.dest(`./${dist}/fonts`))
}