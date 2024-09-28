import { imports } from '../imports.js';
import { paths } from '../paths.js';

const { gulp } = imports;
const { dist, source } = paths

export function copyImages () {
    return gulp.src(`./${source}/images/**/*`)
    .pipe(gulp.dest(`./${dist}/images`))
}