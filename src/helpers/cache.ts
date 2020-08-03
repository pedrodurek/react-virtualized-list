export const setCachedData = <T extends Object | unknown[] | null>(
  key: string,
  data: T,
) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCachedData = <T extends Object | unknown[]>(
  key: string,
): T | null => {
  const result = localStorage.getItem(key);
  return result && JSON.parse(result);
};
