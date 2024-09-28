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

async function initScripts() {
  return (
    browserify({
      entries: `./src/scripts/main.js`,
    })
      .transform('babelify', {
        presets: ['@babel/preset-env'],
        sourceMaps: true,
        global: true
      })
      .bundle()
      .on(
        'error',
        notify.onError({
          title: 'JS compiling error',
          wait: true,
        })
      )
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest(`./dist/scripts`))
      .pipe(server.stream())
  );
}

export default initScripts;