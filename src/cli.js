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

// console.log(cli('src/document.md', '--s --v'));
