import { mdLinks } from '../src/index.js';
import { outputLinks } from './cases/casos.js';

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
  it('Deberia dar un array de objetos con las propiedades href,title, file, status, ', () => {
    mdLinks('pruebas', { validate: true }).then((e) => {
      expect(e).toEqual(outputLinks);
    });
  });
});
