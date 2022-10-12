export const slugify = (w) => {
  const separated = w
    .split(/[\-\s/]/g)
    .filter((i) => i !== "")
    .map((i) => i.toLowerCase());

  return separated.join("-");
};

export const trimName = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength + 1) + "...";
  } else {
    return str;
  }
};
