import React, { FC, useEffect, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useListValue } from 'views/Home/hooks/useListValue';
import { ListChildComponentProps } from 'react-window';
import { Item } from 'views/Home/types';
import ListItem from '../ListItem';

export type Props = Omit<ListChildComponentProps, 'data'> & {
  data: Item[];
};

const ListRow: FC<Props> = ({ data, index, style }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { setSize, removeItem } = useListValue();

  useEffect(() => {
    if (itemRef.current) {
      setSize(index, itemRef.current.getBoundingClientRect().height + 12);
    }
  }, [data]);

  const item = data[index];
  return (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {(provided) => (
        <ListItem
          ref={itemRef}
          provided={provided}
          item={item}
          style={style}
          onRemove={() => removeItem(index)}
        />
      )}
    </Draggable>
  );
};

export default ListRow;
