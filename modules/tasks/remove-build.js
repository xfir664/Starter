import { rmSync } from 'node:fs';

import { imports } from "../imports.js";
import { paths } from "../paths.js";

const { gulp } = imports;
const { dist } = paths;

async function addRemoveBuild() {
    
    function removeBuild () {
        rmSync(`./${dist}/`, {
            force: true,
            recursive: true,
        });
    }

    removeBuild();
}

export default gulp.task('removeBuild', addRemoveBuild);