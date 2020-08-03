import React, { FC, useLayoutEffect, useRef, useEffect } from 'react';
import { VariableSizeList } from 'react-window';
import { useListValue } from 'views/Home/hooks/useListValue';
import { Droppable, DropResult, DragDropContext } from 'react-beautiful-dnd';
import { debounce } from 'debounce';
import { ListContainer } from './styles';
import ListItem from '../ListItem';
import ListRow from '../ListRow';

const List: FC = () => {
  const { items, listIndex, getSize, reorderList } = useListValue();
  const listRef = useRef<VariableSizeList>(null);

  useLayoutEffect(() => {
    listRef.current?.resetAfterIndex(0);
  }, [items]);

  useEffect(() => {
    listRef.current?.scrollToItem(items.length - 1, 'end');
    const timeout = setTimeout(() => {
      listRef.current?.scrollToItem(items.length - 1, 'end');
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [listIndex]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination || source.index === destination.index) {
      return;
    }
    reorderList(source.index, destination.index);
  };

  const resetCachedList = debounce(() => {
    listRef.current?.resetAfterIndex(0);
  }, 50);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer>
        <Droppable
          droppableId="droppable"
          mode="virtual"
          renderClone={(provided, snapshot, rubric) => (
            <ListItem
              provided={provided}
              isDragging={snapshot.isDragging}
              item={items[rubric.source.index]}
              style={{}}
            />
          )}>
          {(provided) => (
            <VariableSizeList
              ref={listRef}
              itemData={items}
              itemCount={items.length}
              outerRef={provided.innerRef}
              itemSize={getSize}
              height={700}
              onItemsRendered={resetCachedList}
              width="100%">
              {ListRow}
            </VariableSizeList>
          )}
        </Droppable>
      </ListContainer>
    </DragDropContext>
  );
};

export default List;
