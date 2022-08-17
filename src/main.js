import { existsSync, readFileSync } from 'node:fs';

import { isAbsolute, resolve, extname } from 'node:path';

import { marked } from 'marked';

export const exists = (pathRoot) => existsSync(pathRoot);
export const absolutePath = (pathRoot) => (isAbsolute(pathRoot) ? pathRoot : resolve(pathRoot));
export const archivoMd = (route) => extname(route) === '.md';

export const readFile = (route) => readFileSync(route, 'utf-8');

const documentMd = (router) => {
  const routeAb = absolutePath(router);
  if (archivoMd(routeAb)) {
    return routeAb;
  }
  throw new Error('Path is not an .md file');
};
// console.log(documentMd('document.md'));
export const getLinks = (router) => {
  const arrayofLinks = [];
  const document = documentMd(router);
  const documentRead = readFile(document);
  // console.log(documentRead);

  const renderer = new marked.Renderer();
  renderer.link = (url, _, text) => {
    arrayofLinks.push({
      href: url,
      text,
      path: document,
    });
  };
  marked(documentRead, { renderer });
  return arrayofLinks;
};
// console.log(getLinks('src/README.md'));
// const arrayofLinks = [];
// const renderer = new marked.Renderer();
// const file = readFile('src/document.md');
// renderer.link = (urlFile, _, urlText) => {
//   arrayofLinks.push({
//     href: urlFile,
//     text: urlText,
//     // path: filePath,
//   });
// };
// marked(file, { renderer });
// console.log(arrayofLinks);

// // console.log(renderer);
// // const getLinksMd = (route) => {
// //     const arrayMdFiles = getMdFiles(route);
// //     const renderer = new marked.Renderer();
// //     const arrayofLinks = [];
// //     arrayMdFiles.forEach((filePath) => {
// //       const file = fs.readFileSync(filePath, 'utf8');
// //       renderer.link = (urlFile, _, urlText) => {
// //         arrayofLinks.push({
// //           href: urlFile,
// //           text: urlText,
// //           path: filePath,
// //         });
// //       };
// //       marked(file, { renderer });
// //       // debug('File', marked(file.toString(), { renderer }));
// //     });
// //     return arrayofLinks;
// //   };

// // onst getMdFiles = (routeFile) => {
// //     let arrayMdFile = [];
// //     const route = getAbsoluteRoute(routeFile);
// //     if (isFile(route)) {
// //       if (isMdFile(route)) {
// //         arrayMdFile.push(route);
// //       }
// //     } else {
// //       const arrayOfFiles = fs.readdirSync(route);
// //       arrayOfFiles.forEach((file) => {
// //         const arrayMd = getMdFiles(path.join(route, file));
// //         arrayMdFile = arrayMdFile.concat(arrayMd);
// //       });
// //     }
// //     return arrayMdFile;
// //   };

// // console.log(archivoMd('C:/Lisita/Desktop/LIM018-md-links/src/document.md'));

// console.log(convertrelativeToAbsolutePath('src/document.md'));
// const verifyDirectory = (inputPath) => {
//   getInformation = fs.statSync(inputPath)
//   return getInformation
//   // return getInformation.isDirectory();
// }
// console.log(verifyDirectory('src/document'))
// console.log(a);
// const b = path.isAbsolute('document.md')
// console.log(b);

// existsSync= require 'fs';
// import { existsSync } from 'node:fs';
// console.log(existsSync);
// import { isAbsolute, resolve } from 'node:path'

// //Función si existe la ruta
// export const getpathExist = (route) => existsSync(route);
// //Función identifica si la ruta es absoluta
// export const getpathAbsolute = (route) => isAbsolute(route);
// //Función que convierte la ruta relativa a absoluta
// export const convertrelativeToAbsolutePath = (route) => resolve(route);
// //Función que da lectura al archivo
// export const readFile = (route) => readFileSync(route,'utf-8');
// //Función que determina si es un archivo
// export const pathIsFile = (route) => statSync(route).isFile();
// //Función que determina si es un directorio
// export const pathIsDirectory = (route) => statSync(route).isDirectory();
