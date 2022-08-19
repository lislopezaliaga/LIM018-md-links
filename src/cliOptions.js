export const inputStats = (arrayLinks) => {
  const total = arrayLinks.length;
  const links = arrayLinks.map((element) => element.href);
  const unique = new Set(links).size;
  const stats = `
  Total: ${total}
  Unique: ${unique}`;
  return stats;
};

export const statsValidate = (arrayLinks) => {
  const brokenLinks = arrayLinks.filter((element) => element.status >= 404).length;
  const stats = `
  ${inputStats(arrayLinks)}
  Broken: ${brokenLinks}
  `;
  return stats;
};
