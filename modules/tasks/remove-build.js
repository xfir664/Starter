import { rmSync } from 'node:fs';
import { paths } from "../paths.js";

const { dist } = paths;

export function removeBuild (done) {
    rmSync(`./${dist}/`, {
        force: true,
        recursive: true,
    });
    done();
}