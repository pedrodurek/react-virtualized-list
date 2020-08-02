import React, { FC, createContext, useRef } from 'react';

type ListValue = {
  setSize: (index: number, size: number) => void;
  getSize: (index: number) => number;
  clearSizes: () => void;
};

type SizeMap = {
  [index: number]: number;
};

export const ListContext = createContext<ListValue | undefined>(undefined);

const ListProvider: FC = ({ children }) => {
  const sizeMap = useRef<SizeMap>({});

  const setSize = (index: number, size: number) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
  };

  const getSize = (index: number) => sizeMap.current[index] ?? 146;

  const clearSizes = () => {
    sizeMap.current = [];
  };

  console.log('ListProvider/index.tsx:23:', sizeMap);
  return (
    <ListContext.Provider value={{ setSize, getSize, clearSizes }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
