import { imports } from "../imports.js";
import { paths } from "../paths.js";
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import { webpackConfig } from '../../webpack.config.js';
import generateDynamicLoader from '../../generateFilesList.js'

const { server, gulp } = imports;

function initScripts() {
  
  generateDynamicLoader();

  return gulp.src(`./${paths.source}/scripts/**/*.js`) // Измените путь, чтобы выбрать все JS файлы
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(`./${paths.dist}/scripts`))
    .pipe(server.stream());
}

export default initScripts;
