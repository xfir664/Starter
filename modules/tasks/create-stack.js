import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { gulp, stacksvg } = imports;
const { source, dist } = paths;

export function createStack() {
    return gulp.src(`./${source}/images/icons/**/*.svg`)
    .pipe(stacksvg())
    .pipe(gulp.dest(`./${dist}/images/icons`))
}