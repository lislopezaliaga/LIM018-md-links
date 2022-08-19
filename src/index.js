import { exists, getLinks, validate } from './main.js';

export const mdLinks = (pathrouter, optionValidate) => new Promise((resolve, reject) => {
  if (exists(pathrouter)) {
    if (optionValidate.validate) {
      resolve(validate(pathrouter));
    } else {
      resolve(getLinks(pathrouter));
    }
  } else {
    console.log('No existe esta ruta ');
  }
});

// const statValidateLinks = (input) => {
//   const total = input.length;
//   const unique = new Set(input.map((link) => link.href)).size;
//   const broken = input.filter((link) => link.statusText === 'FAIL').length;
//   const result = `\n${chalk.green('Total: ')} ${total} \n${chalk.green('Unique: ')} ${unique} \n${chalk.red('Broken: ')} ${broken}`;
//   return result;
// };

// const inputStats = (arrayLinks) => {
//   const total = arrayLinks.length;
//   const links = arrayLinks.map((element) => element.href);
//   const unique = new Set(links).size;
//   console.log(total, unique);
// };

// mdLinks('src/document.md', { validate: false }).then((arrayLinks) => console.log(arrayLinks));
