import chalk from 'chalk';

export const inputStats = (arrayLinks) => {
  const total = arrayLinks.length;
  const links = arrayLinks.map((element) => element.href);
  const unique = new Set(links).size;
  const stats = `
  «───────────────» 
   ${chalk.magentaBright.bold(`Total : `)}${total}
  «───────────────» 
   ${chalk.magentaBright.bold(`Unique: `)}${unique}
  «───────────────»`;

  return stats;
};
// ${chalk.magentaBright(element.text.substring(0, 50))}
export const statsValidate = (arrayLinks) => {
  const brokenLinks = arrayLinks.filter((element) => element.status > 400).length;
  const stats = `
  ${inputStats(arrayLinks)}
  ${chalk.magentaBright.bold(` Broken: `)}${brokenLinks}
  «───────────────»  
  `;
  return stats;
};

// ${chalk.magentaBright.bold.bgGreen(`Total :`)}${total}