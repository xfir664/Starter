import { imports } from './modules/imports.js';
import { tasks } from './modules/tasks.js';
import { paths } from './modules/paths.js';

const { gulp, server } = imports;
const { series, parallel } = gulp;

const {
  removeBuild,
  includeIndexPage,
  includeOtherPages,
  sass,
  copyImages,
  copyFonts,
  initScript,
  createVendors,
} = tasks

function reloadServer (done) {
  server.reload();
  done();
} 

export function startServer() { 
  server.init({
      server: {
          baseDir: `./${paths.dist}`
      },
      cors: true,
      ui:false,
  })

  gulp.watch(`./${paths.source}/index.html`, gulp.series(includeIndexPage));
  gulp.watch(`./${paths.source}/pages/**/*.html`, gulp.series(includeOtherPages));
  gulp.watch(`./${paths.source}/components/**/*.html`, gulp.series(includeOtherPages, includeIndexPage));
  gulp.watch(`./${paths.source}/scss/**/*.scss`, gulp.series(sass));
  gulp.watch(`./${paths.source}/scripts/**/*.js`, gulp.series(initScript));
}

export function startDev(done) {
  series(
    removeBuild,
    parallel(
      includeIndexPage,
      includeOtherPages,
      sass,
      copyImages,
      copyFonts,
      initScript,
      createVendors,
    ),
    startServer
  )
    (done)
}