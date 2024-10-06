import { rmSync } from 'node:fs';

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import fileinclude from 'gulp-file-include';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob'
import * as dartSass from 'sass';
import autoPrefixer from "gulp-autoprefixer";
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import sharp from 'gulp-sharp-responsive';
import svgo from 'gulp-svgmin'
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import refresh from 'gulp-refresh'
import rename from 'gulp-rename';
import { stacksvg } from 'gulp-stacksvg'
import server from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import webpack from 'webpack-stream';



export const imports = {
  gulp: gulp,
  fileInclude: fileinclude,
  htmlmin: htmlmin,
  dartSass: dartSass,
  gulpSass: gulpSass,
  sassGlob: sassGlob,
  autoPrefixer: autoPrefixer,
  cleanCSS: cleanCSS,
  sourcemaps: sourcemaps,
  sharp: sharp,
  svgo: svgo,
  ttf2woff: ttf2woff,
  ttf2woff2: ttf2woff2,
  babel: babel,
  webpack: webpack,
  concat: concat,
  uglify: uglify,
  server: server,
  refresh: refresh,
  rmSync: rmSync,
  rename: rename,
  stacksvg: stacksvg,
  browserify: browserify,
  source: source,
  buffer: buffer,
}
