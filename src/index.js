import { exists } from './main.js';
import { validate } from './validate.js';

export const mdLinks = (pathrouter, options) => new Promise((resolve) => {
  if (exists(pathrouter)) {
    resolve(validate(pathrouter));
  } else {
    throw new Error('No existe Path');
  }
});
mdLinks('src/document.md').then((e) => console.log(e));
