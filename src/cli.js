import { mdLinks } from './index.js';

export const cli = (router, validate) => {
  mdLinks(router, validate)
    .then((arrayLinks) => {
      if (arrayLinks.length === 0) {
        throw new Error('El archivo no contiene links');
      }
    });
};

// const cli = (route, arg1, arg2) => {
//     const validate = opt.getObjValidate(arg1, arg2);
//     return api.mdLinks(route, validate)
//       .then((response) => {
//         let result = '';
//         if (response.length === 0) {
//           result = chalk.red('md file or link not found');
//         }
