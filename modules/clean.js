import { gulpConfig } from "./config.js";

export async function clean() {
  return gulpConfig.imports.del('./build/', { force: true })
}