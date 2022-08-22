import { exists, getLinks, validate } from './main.js';

export const mdLinks = (pathrouter, options = { validate: false }) => new Promise((resolve) => {
  if (exists(pathrouter)) {
    if (options.validate === true) {
      resolve(validate(pathrouter));
    } else {
      resolve(getLinks(pathrouter));
    }
  } else {
    console.log('No existe esta ruta ');
  }
});

// mdLinks('src', { validate: true }).then((arrayLinks) => console.log(arrayLinks));
