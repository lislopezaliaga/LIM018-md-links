import { inputStats, statsValidate } from './cliOptions.js';
import { mdLinks } from './index.js';

export const cli = (path, options) => {
  if (options) {
    if (options === '--validate' || options === '--v') {
      return mdLinks(path, { validate: true })
        .then((links) => links);
    } if (options === '--stats' || options === '--s') {
      return mdLinks(path, { validate: true })
        .then((links) => inputStats(links));
    } if (options === '--stats --validate' || options === '--validate --stats' || options === '--v --s' || options === '--s --v') {
      return mdLinks(path, { validate: true })
        .then((links) => statsValidate(links));
    }
    return 'help';
  }
  return mdLinks(path, { validate: false })
    .then((arrayLinks) => arrayLinks);
};

const [, , ...args] = process.argv;

const pathRouter = args[0];
const input = [];
for (let i = 0; i < args.length; i += 1) {
  input.push(args[i]);
}
const inputJoin = input.join(' ');

cli(pathRouter, inputJoin)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
