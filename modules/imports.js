import { rmSync } from 'node:fs';

import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import gulpSass from 'gulp-sass';
import sharp from 'gulp-sharp-responsive';
import * as dartSass from 'sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

export const imports = {
  gulp: gulp,
  fileInclude: fileinclude,
  dartSass: dartSass,
  gulpSass: gulpSass,
  sharp: sharp,
  babel: babel,
  concat: concat,
  browserSync: browserSync,
  rmSync: rmSync,
}
