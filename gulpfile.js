import { imports } from './modules/imports.js';
import { tasks } from './modules/tasks.js';


const { gulp } = imports;
const { series, parallel } = gulp;

export function startDev() {
  series(
    tasks.removeBuild,
    parallel(
      tasks.includeFiles,
      tasks.sass,
      tasks.script,
    ),
    tasks.startServer
  )();
}