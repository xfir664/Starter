import { imports } from '../imports.js';
import { paths } from '../paths.js';

const { gulp, fileInclude, browserSync } = imports;
const { dist, source } = paths;

const fileIncludeSetting = {
    prefix: '@@',
    basepath: '@file'
}

async function addIncludeFiles() {

    function initIncludeFiles() {
        return gulp.src(`./${source}/pages/*.html`)
        .pipe(fileInclude(fileIncludeSetting))
        .pipe(gulp.dest(`./${dist}/pages`))
        .pipe(browserSync.stream())
    }

    function watchIncludeFiles() {
        gulp.watch(`./${source}/**/*.html`, initIncludeFiles);
        gulp.watch(`./${dist}/pages`).on('change', browserSync.reload);
    }

    initIncludeFiles();
    watchIncludeFiles();
}

export default gulp.task('includeFiles', addIncludeFiles);
