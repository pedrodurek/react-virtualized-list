export const reorderArray = <T extends unknown>(
  array: T[],
  startIndex: number,
  endIndex: number,
): T[] => {
  const result = Array.from(array);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const removeIndex = <T extends unknown>(
  array: T[],
  index: number,
): T[] => [...array.slice(0, index), ...array.slice(index + 1)];
