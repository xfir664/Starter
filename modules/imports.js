import { rmSync } from 'node:fs';

import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import sharp from 'gulp-sharp-responsive';
import svgo from 'gulp-svgmin'
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify-es';
import server from 'browser-sync';
import refresh from 'gulp-refresh'
import rename from 'gulp-rename';

export const imports = {
  gulp: gulp,
  fileInclude: fileinclude,
  dartSass: dartSass,
  gulpSass: gulpSass,
  sharp: sharp,
  svgo: svgo,
  ttf2woff: ttf2woff,
  ttf2woff2: ttf2woff2,
  babel: babel,
  concat: concat,
  uglify: uglify,
  server: server,
  refresh: refresh,
  rmSync: rmSync,
  rename: rename,
}
