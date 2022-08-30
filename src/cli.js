#! /usr/bin/env node

import { inputStats, statsValidate,help } from './cliOptions.js';

import { mdLinks } from './index.js';


export const cli = (path, options) => {
    if (options) {
      if (options === '--validate') {
        return mdLinks(path, { validate: true })
          .then((links) => links);
      } if (options === '--stats') {
        return mdLinks(path, { validate: true })
          .then((links) => inputStats(links));
      } if (options === '--stats --validate' || options === '--validate --stats') {
        return mdLinks(path, { validate: true })
          .then((links) => statsValidate(links));
      }
    return Promise.reject(help);
    }
    return mdLinks(path, { validate: false })
      .then((arrayLinks) => arrayLinks);
};

const [, , ...args] = process.argv;

const pathRouter = args[0];
const input = [];
for (let i = 1; i < args.length; i += 1) {
  input.push(args[i]);
}
const inputJoin = input.join(' ');

if (pathRouter=== undefined) {
  console.log(help);
 } else {
cli(pathRouter, inputJoin)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
 }





  