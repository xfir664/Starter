import { imports } from "../imports.js"
import { paths } from "../paths.js"
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import notify from 'gulp-notify';
import buffer from 'vinyl-buffer';

const { server } = imports;

function initScripts() {
  return (
    browserify({
      entries: `./${paths.source}/scripts/main.js`,
    })
      .transform('babelify', {
        presets: ['@babel/preset-env'],
        sourceMaps: true,
        global: true
      })
      .bundle()
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest(`./${paths.dist}/scripts`))
      .pipe(server.stream())
  );
}

export default initScripts;