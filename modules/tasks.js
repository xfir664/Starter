import { includeIndexPage, includeOtherPages } from './tasks/include-files.js';
import { sass } from './tasks/sass.js';
import { removeBuild } from './tasks/remove-build.js';
import { copyFonts } from './tasks/copt-fonts.js'
import { copyImages } from './tasks/copy-images.js';
import initScript from './tasks/init-script.js';
import './tasks/optimize-images.js';
import './tasks/convert-fonts.js'
import { createVendors } from './tasks/create-vendor.js'

export const tasks = {
  removeBuild: removeBuild,
  includeIndexPage: includeIndexPage,
  includeOtherPages: includeOtherPages,
  sass: sass,
  copyImages: copyImages,
  copyFonts: copyFonts,
  initScript: initScript,
  createVendors: createVendors,
}