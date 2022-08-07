export const getDescription = (html: string): string => {
  // match le p tag, non gureedee
  return html.match(/(<p>.+?<\/p>)/g)?.[0] || "";
};
