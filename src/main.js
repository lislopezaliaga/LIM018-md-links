import {
  existsSync, readFileSync,
  statSync, readdirSync,
} from 'node:fs';
// import * as path from "path";

import path, { isAbsolute, resolve, extname } from 'node:path';

import { marked } from 'marked';

import fetch from 'node-fetch';

export const exists = (pathRoot) => existsSync(pathRoot);
export const absolutePath = (pathRoot) => (isAbsolute(pathRoot) ? pathRoot : resolve(pathRoot));
export const archivoMd = (route) => extname(route) === '.md';
export const readFile = (route) => readFileSync(route, 'utf-8');

export const pathIsFile = (route) => statSync(route).isFile();
export const pathIsDirectory = (route) => statSync(route).isDirectory();
export const readDir = (route) => readdirSync(route);

// console.log(readDir('src'));

const documentMd = (router) => {
  const routeAb = absolutePath(router);
  let arrayFiles = [];
  if (pathIsFile(routeAb)) {
    if (archivoMd(routeAb)) {
      arrayFiles.push(routeAb);
      // return routeAb;
    }
  } else {
    const arrayDir = readDir(router);
    arrayDir.forEach((direccion) => {
      const routerAbsolute = path.join(routeAb, direccion);
      const arrayfilesOlds = documentMd(routerAbsolute);
      arrayFiles = arrayFiles.concat(arrayfilesOlds);
    });
  }
  return arrayFiles;
};

// console.log(documentMd('src'));

// console.log(documentMd('document.md'));
export const getLinks = (router) => {
  const arrayofLinks = [];
  const expRegular = /http/g;
  const document = documentMd(router);
  document.forEach((element) => {
    const documentRead = readFile(element);
    const renderer = new marked.Renderer();
    renderer.link = (url, _, text) => {
      arrayofLinks.push({
        href: url,
        text,
        path: element,
      });
    };
    marked(documentRead, { renderer });
  });

  // console.log(documentRead);

  const arrayHttp = arrayofLinks.filter((objec) => objec.href.match(expRegular));
  if (arrayHttp.length === 0) {
    throw new Error('Este archivo o carpeta no contiene links');
  }
  return arrayHttp;
};

export const validate = (routers) => {
  const arrayLinks = getLinks(routers);
  //   return arrayLinks;
  const arrPromises = arrayLinks.map((element) => fetch(element.href)
    .then((peticion) => ({
      ...element,
      status: peticion.status,
      statusText: peticion.status < 400 ? 'ok' : 'fail',
    }))
    .catch(() => ({
      ...element,
      status: 'ERROR',
      statusText: 'FAIL',
    })));
  return Promise.all(arrPromises);
};

