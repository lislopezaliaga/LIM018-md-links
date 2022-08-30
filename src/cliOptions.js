import chalk from 'chalk';

export const inputStats = (arrayLinks) => {
  const total = arrayLinks.length;
  const links = arrayLinks.map((element) => element.href);
  const unique = new Set(links).size;
  const stats = `    (👀) (👀)
  «───────────────» 
   ${chalk.magentaBright.bold(`   Total : `)}${chalk.hex('#3E00FF')(total)}
  «───────────────» 
   ${chalk.hex('#F7B2AD').bold(`   Unique: `)}${chalk.hex('#3E00FF')(unique)}
  «───────────────»`;

  return stats;
};
// ${chalk.magentaBright(element.text.substring(0, 50))}
export const statsValidate = (arrayLinks) => {
  const brokenLinks = arrayLinks.filter((element) => element.status > 400).length;
  const stats = `
  ${inputStats(arrayLinks)}
  ${chalk.yellowBright.bold(`    Broken: `)}${chalk.hex('#FFBA08')(brokenLinks)}
  «───────────────»  
  `;
  return stats;
};


export const help = `${ chalk.hex('#484D6D').bold(`\n
                   📚📖Ingrese una de las siguientes opciones (path es una ruta absoluta o relativa):
 ╔════════════════════════════════════╦═════════════════════════════════════════════════════════════════════════════════════════╗
 ║    OPCIONES                        ║                                     DESCRIPCIÓN                                         ║
 ║════════════════════════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
 ║ mdLinks <path>                     ║    Muestra los links encontrados mediante un array de objetos con su texto y path       ║
 ║════════════════════════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
 ║ mdLinks <path> --validate          ║    Muestra los links encontrados con su texto, path, status y mensaje del status.       ║
 ║════════════════════════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
 ║ mdLinks <path> --stats             ║    Muestra la estadística de los links encontrados y links únicos.                      ║
 ║════════════════════════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
 ║ mdLinks <path> --stats --validate  ║    Muestra la estadística de los links encontrados, links únicos y links rotos.         ║
 ║════════════════════════════════════║═════════════════════════════════════════════════════════════════════════════════════════║
 ║ mdLinks <path> --validate --stats  ║    Muestra la estadística de los links encontrados, links únicos y links rotos.         ║
 ╚══════════════════╩═══════════════════════════════════════════════════════════════════════════════════════════════════════════╝`)}`;
