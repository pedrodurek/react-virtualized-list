import React, { FC, useEffect, useRef } from 'react';
import { VariableSizeList } from 'react-window';
import { Item } from 'views/Home/types';
import { useListValue } from 'views/Home/hooks/useListValue';
import { ListContainer } from './styles';
import ListItem from '../ListItem';

type Props = {
  items: Item[];
};

const List: FC<Props> = ({ items }) => {
  const listRef = useRef<VariableSizeList>(null);
  const { getSize } = useListValue();

  useEffect(() => {
    listRef.current?.scrollToItem(items.length - 1, 'end');
    listRef.current?.resetAfterIndex(0);
  }, [items]);

  return (
    <ListContainer>
      <VariableSizeList
        ref={listRef}
        useIsScrolling
        key={`list-${items.length}`}
        itemData={items}
        itemCount={items.length}
        itemSize={getSize}
        height={500}
        width="100%">
        {ListItem}
      </VariableSizeList>
    </ListContainer>
  );
};

export default List;
