import React, { FC, createContext, useRef, useState, useEffect } from 'react';
import { Item } from 'views/Home/types';
import { reorderArray, removeIndex } from 'helpers/array';
import { setCachedData, getCachedData } from 'helpers/cache';

type SizeMap = {
  [index: number]: number;
};

type CachedItems = {
  items: Item[];
  listIndex: number;
};

type ListValue = {
  items: Item[];
  listIndex: number;
  setSize: (index: number, size: number) => void;
  getSize: (index: number) => number;
  resetList: () => void;
  reorderList: (startIndex: number, endIndex: number) => void;
  addItems: (items: Item[]) => void;
  removeItem: (index: number) => void;
};

export const ListContext = createContext<ListValue | undefined>(undefined);

const ListProvider: FC = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [listIndex, setListIndex] = useState(0);
  const sizeMap = useRef<SizeMap>({});

  useEffect(() => {
    if (listIndex > 0) {
      setCachedData('list-item', { items, listIndex });
    }
  }, [items, listIndex]);

  useEffect(() => {
    const cachedItems = getCachedData<CachedItems>('list-item');
    if (cachedItems) {
      setItems(cachedItems.items);
      setListIndex(cachedItems.listIndex);
    }
  }, []);

  const setSize: ListValue['setSize'] = (index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
  };

  const getSize: ListValue['getSize'] = (index) =>
    sizeMap.current[index] ?? 146;

  const resetList: ListValue['resetList'] = () => {
    sizeMap.current = {};
    setItems([]);
    setListIndex(0);
    setCachedData('list-item', null);
  };

  const reorderList: ListValue['reorderList'] = (startIndex, endIndex) => {
    setItems(reorderArray(items, startIndex, endIndex));
  };

  const addItems: ListValue['addItems'] = (itemsGenerated) => {
    setListIndex((prev) => prev + itemsGenerated.length);
    setItems((prev) => [...prev, ...itemsGenerated]);
  };

  const removeItem: ListValue['removeItem'] = (index) => {
    setItems((prev) => removeIndex(prev, index));
  };

  return (
    <ListContext.Provider
      value={{
        items,
        listIndex,
        setSize,
        getSize,
        resetList,
        reorderList,
        addItems,
        removeItem,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
