import fetch from 'node-fetch';
import { getLinks } from './main.js';

export const validate = (routers) => {
  const arrayLinks = getLinks(routers);
  //   return arrayLinks;
  const arrPromises = arrayLinks.map((element) => fetch(element.href)
    .then((e) => {
      if (e.status >= 200 && e.status < 400) {
        return {
          ...element,
          status: e.status,
          statusText: e.statusText,
        };
      }
      return {
        ...element,
        status: e.status,
        statusText: 'FAIL',
      };
    })
    .catch(() => ({
      ...element,
      status: 'ERROR',
      statusText: 'FAIL',
    })));
  return Promise.all(arrPromises);
};
// const a = resolve(validate('src/README.md'));
// console.log(a);
