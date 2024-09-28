import { includeIndexPage, includeOtherPages } from './tasks/include-files.js';
import { sass } from './tasks/sass.js';
import { removeBuild } from './tasks/remove-build.js';
import { copyImages } from './tasks/copy-images.js';
import initScript from './tasks/initScript.js';
import './tasks/optimize-images.js';
import './tasks/convert-fonts.js'

export const tasks = {
  removeBuild: removeBuild,
  includeIndexPage: includeIndexPage,
  includeOtherPages: includeOtherPages,
  sass: sass,
  copyImages: copyImages,
  initScript: initScript,
}