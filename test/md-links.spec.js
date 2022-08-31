import fetch from 'node-fetch';

import { mdLinks } from '../src/index.js';

import { ouputFetch, outputLinks } from './cases/casos.js';

jest.mock('node-fetch', () => jest.fn());

describe('La funcion mdLinks verifica si existe o no una ruta', () => {
  it('Caso en que no exista esa ruta', () => {
    mdLinks('documentmd').then((e) => e).catch((error) => {
      expect(error).toBe('No existe esta ruta');
    });
  });
});

describe('Cuando el usuario le manda una ruta a MDlinks', () => {
  it('Deberia dar un array de objetos con las propiedades href,title, file', () => {
    mdLinks('pruebas').then((e) => {
      console.log(e);
      expect(e).toEqual(outputLinks);
    });
  });
  it('Aunque options.validate:false Deberia dar un array de objetos con las propiedades href,title, file', () => {
    mdLinks('pruebas', { validate: false }).then((e) => {
      expect(e).toEqual(outputLinks);
    });
  });
});

describe('Cuando le pasamos validate:true   ', () => {
  it('Deberia dar un array de objetos con las propiedades href,title, file, status, ', (done) => {
    fetch.mockResolvedValueOnce({ status: 200, statusText: 'ok' });
    fetch.mockResolvedValueOnce({ status: 404, statusText: 'fail' });
    fetch.mockResolvedValueOnce({ status: 503, statusText: 'fail' });
    fetch.mockResolvedValueOnce({ status: 503, statusText: 'fail' });
    fetch.mockResolvedValueOnce({ status: 200, statusText: 'ok' });
    fetch.mockRejectedValueOnce({ status: 'ERROR', statusText: 'FAIL' });
    fetch.mockResolvedValueOnce({ status: 200, statusText: 'ok' });
    fetch.mockResolvedValueOnce({ status: 200, statusText: 'ok' });
    mdLinks('pruebas', { validate: true }).then((e) => {
      expect(e).toEqual(ouputFetch);
      done();
    });
  });
});
// describe('Caso en que no halla', () => {
//   it('Caso en que no exista esa ruta', () => {
//     mdLinks('pruebas/archivo.md').then((e) => e).catch((error) => {
//       expect(error).toBe('Este archivo o archivos no contienen links');
//     });
//   });
// });

// describe('Cuando el usuario le manda una ruta a MDlinks', () => {
//   it('Aunque options.validate:false Deberia dar un array de objetos con las propiedades href,title, file', () => {
//     mdLinks('carpeta', { validate: false }).catch((e) => {
//       expect(e).toThrow('Este archivo o archivos no contienen links');
//     });
//   });
// });

// test("Test description", () => {
//   const t = () => {
//     throw new TypeError("UNKNOWN ERROR");
//   };
//   expect(t).toThrow(TypeError);
//   expect(t).toThrow("UNKNOWN ERROR");
// });