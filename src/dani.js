// import axios from 'axios';

// const validateUrlStatus = (pathFile) => {
//     const savedLinks = pathFile;
//     const arrayLinksPromises = [];
//     console.log(savedLinks.length);
//     let validateLinks;
//     for (let i = 0; i < savedLinks.length; i += 1) {
//        validateLinks = axios.get(savedLinks[i].href)
//         .then((response) => {
//          /*  console.log('aqui estamos'); */
//           savedLinks[i].status = response.status;
//           savedLinks[i].message = response.statusText;
//           return savedLinks[i];
//         })
//         .catch(() => {
//          /*  console.log('en el catch'); */
//           savedLinks[i].status = 'ERROR';
//           savedLinks[i].message = 'FAIL';
//           return savedLinks;
//         });
        
//       /* console.log('array de links', arrayLinksPromises); */
//     }
//     arrayLinksPromises.push(validateLinks);

//     return Promise.all(arrayLinksPromises);
//     // resolve(arrayLinksPromises);
//   }
  

//   const a=[
//     {
//       href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
//       text: 'Markdown',
//       path: 'C:\\Users\\Lisita\\Desktop\\LIM018-md-links\\pruebas\\primera\\document1.md'
//     },
//     {
//       href: 'http://www.faztweb.com',
//       text: 'fazt.com',
//       path: 'C:\\Users\\Lisita\\Desktop\\LIM018-md-links\\pruebas\\second\\document.md'
//     },
//     {
//       href: 'http://www.fweb.com',
//       text: 'fa.com',
//       path: 'C:\\Users\\Lisita\\Desktop\\LIM018-md-links\\pruebas\\second\\document.md'
//     }
//   ];
//   validateUrlStatus(a).then((e)=>console.log(e));

//   console.log(validateUrlStatus(a).then);