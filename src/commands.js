// import { program } from 'commander';
// import inquirer from 'inquirer';
import mdLinks from 'md-links.angezul22';

mdLinks('src/document.txt').then((e) => console.log(e));
// program.version('0.0.1').description('A command for files markdown');
// userPath, { validate, stats }
// program.command('validat').action(() => {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: 'Ingresa una ruta',
//       name: 'hola',
//     },
//     {
//       type: 'input',
//       message: 'Hola de nuevo',
//       name: 'hola',
//     },
//   ]).then((answers) => {
//     console.log(answers);
//   });
// });

// // program.command('--stats');

// program.parse(process.argv);

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
