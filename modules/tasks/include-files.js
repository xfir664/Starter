import { imports } from '../imports.js';
import { paths } from '../paths.js';

const { gulp, fileInclude, server } = imports;
const { dist, source } = paths;

const fileIncludeSetting = {
    prefix: '@@',
    basepath: '@file',
}

export function includeOtherPages() {
    return gulp.src(`./${source}/pages/*.html`)
    .pipe(fileInclude(fileIncludeSetting))
    .pipe(gulp.dest(`./${dist}/pages/`))
    .pipe(server.stream())
}

export function includeIndexPage() {
    return gulp.src(`./${source}/index.html`)
    .pipe(fileInclude(fileIncludeSetting))
    .pipe(gulp.dest(`./${dist}/`))
    .pipe(server.stream())
}
