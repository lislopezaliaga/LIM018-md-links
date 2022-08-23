import { exists, getLinks, validate } from './main.js';

// eslint-disable-next-line max-len
export const mdLinks = (pathrouter, options = { validate: false }) => new Promise((resolve, reject) => {
  if (exists(pathrouter)) {
    if (options.validate === true) {
      resolve(validate(pathrouter));
    } else {
      resolve(getLinks(pathrouter));
    }
  } else {
    const errorRuta = 'No existe esta ruta';
    reject(errorRuta);
  }
});

mdLinks('pruebas', { validate: true }).then((arrayLinks) => console.log(arrayLinks)).catch((error) => console.log(error));
