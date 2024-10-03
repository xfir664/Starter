import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { rename, gulp } = imports;
const { dist } = paths;

export function createVendors () {
    return gulp.src('node_modules/swiper/swiper-bundle.css')
    .pipe(rename('vendor.css'))
    .pipe(gulp.dest(`./${dist}/styles/`))
}
