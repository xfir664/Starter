import path from 'path';
import fs from 'fs';
import gulp from "gulp";
import sharp from 'sharp'
const { src, dest } = gulp;

export function getAllImages(dirPath) {
  let results = [];

  if (!fs.existsSync(dirPath)) {
    console.error(`Directory not found: ${dirPath}`);
    return results;
  }

  const list = fs.readdirSync(dirPath);
  if (list.length === 0) {
    console.log(`No files found in directory: ${dirPath}`);
    return results;
  }
  list.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else {
      results.push(filePath);
    }
  });

  return results;
}

const allFiles = getAllImages(path.resolve(`./src/images/`));
console.log(allFiles);

export function optimizeImages() {
  console.log(11);
  for (file of allFiles) {
    sharp(file)
      .resize(300, 200)
      .toFile('build/images/file.jpg', function (err) {
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
      });
  }
}

export function copyStatics() {
  src([allFiles])
    .pipe(sharp())
  dest(`build/images`)
}
