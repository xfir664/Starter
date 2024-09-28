import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { gulp, sharp } = imports;
const { raw, source } = paths; 

async function optimizeRaster() {
        const RAW_DENSITY = 2;
        const TARGET_FORMATS = [undefined, 'webp']; // undefined — initial format: jpg or png
    
            const formats = [];

            for(const format of TARGET_FORMATS) {
                for(let density = RAW_DENSITY; density > 0; density--) {
                    formats.push(
                        {
                            format,
                            rename: { suffix: `@${density}x` },
                            width: ({width}) => Math.ceil(width* density / RAW_DENSITY),
                            jpegOptions: { progressive: true},
                        },
                    )
                }
            }

        return gulp.src(`./${raw}/images/**/*.{png, jpg, jpeg}`)
            .pipe(sharp({formats}))
            .pipe(gulp.dest(`./${source}/images`))
    }

export default gulp.task('optimizeImages', optimizeRaster);