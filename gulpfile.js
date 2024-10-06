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
  createStack,
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
      serveStatic: [
        {
          route: '/fonts',
          dir: `./${paths.source}/fonts`
        },
        {
          route: '/images',
          dir: `./${paths.source}/images`
        },
        {
          route: '/*.ico',
          dir: `./${paths.source}/*.ico`
        },
        {
          route: '/*.webmanifest',
          dir: `./${paths.source}/*.webmanifest`
        },
        {
          route: '/favicons',
          dir: `./${paths.source}/favicons`
        },
        {
          route: '/vendor',
          dir: `./${paths.source}/vendor`
        },
      ],
      cors: true,
      ui:false,
  })

  gulp.watch(`./${paths.source}/index.html`, gulp.series(includeIndexPage));
  gulp.watch(`./${paths.source}/pages/**/*.html`, gulp.series(includeOtherPages));
  gulp.watch(`./${paths.source}/components/**/*.html`, gulp.series(includeOtherPages, includeIndexPage));
  gulp.watch(`./${paths.source}/scss/**/*.scss`, gulp.series(sass));
  gulp.watch([`./${paths.source}/scripts/**/*.js`, `!./${paths.source}/scripts/dynamicLoader.js`], gulp.series(initScript));
}

export function startBuild(done) {
  series(
    removeBuild,
    parallel(
      includeIndexPage,
      includeOtherPages,
      sass,
      initScript,
      createStack,
      copyImages,
      copyFonts,
    )
  )(done);
}

export function startDev(done) {
  series(
    removeBuild,
    parallel(
      includeIndexPage,
      includeOtherPages,
      sass,
      initScript,
      createStack,
    ),
    startServer
  )
    (done)
}