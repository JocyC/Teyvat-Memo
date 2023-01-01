export const chara_url = "https://api.genshin.dev/characters";
export const weapon_url = "https://genshin-db-api.vercel.app/api/weapons";

export const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const getUniqueValues = (list) => {
  const allMaterails = list.map((item) => Object.keys(item)).flat(1);
  const allKinds = Array.from(new Set(allMaterails));
  return allKinds;
};
