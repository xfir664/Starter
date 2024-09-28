import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { gulp, browserSync } = imports;
const { dist } = paths;

function createServer() {
    function startServer() { 
        browserSync.init({
            server: {
                baseDir: `./${dist}/pages`
            },
            cors: true,
            ui:false,
        })
    }
    
    startServer();
}


export default gulp.task('startServer', createServer);