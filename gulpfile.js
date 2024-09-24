import { gulpConfig } from "./modules/config.js";
import { getAllImages, optimizeImages } from "./modules/copy-statics.js";

const { gulp, tasks } = gulpConfig;
const { clean, copyStatics } = tasks;
const { series, paralel } = gulp;

export async function test() {
  await series(optimizeImages);
}

export function build(done) {
  series(clean, copyStatics)(done);
}

export default series(clean);