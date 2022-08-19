import { exists, getLinks, validate } from './main.js';

export const mdLinks = (pathrouter, optionValidate) => new Promise((resolve) => {
  if (exists(pathrouter)) {
    if (optionValidate === 'validate') {
      resolve(validate(pathrouter));
    } else {
      console.log(getLinks(pathrouter));
    }
  } else {
    throw new Error('No existe Path');
  }
});

const inputStats = (arrayLinks) => {
  const total = arrayLinks.length;
  const links = arrayLinks.map((element) => element.href);
  const unique = new Set(links).size;
  console.log(total, unique);
};

mdLinks('src/document.md', 'validate').then((arrayLinks) => {
  inputStats(arrayLinks);
});
