import React, { FC, useLayoutEffect, useRef, useEffect, useState } from 'react';
import { VariableSizeList, ListOnItemsRenderedProps } from 'react-window';
import { useListValue } from 'views/Home/hooks/useListValue';
import { Droppable, DropResult, DragDropContext } from 'react-beautiful-dnd';
import { debounce } from 'debounce';
import { FiArrowDown } from 'react-icons/fi';
import { ListContainer, GoToEndButton, FadeContainer } from './styles';
import ListItem from '../ListItem';
import ListRow from '../ListRow';

const List: FC = () => {
  const { items, listIndex, getSize, reorderList } = useListValue();
  const listRef = useRef<VariableSizeList>(null);
  const [showGoToEnd, setShowGoToEnd] = useState(false);

  useLayoutEffect(() => {
    listRef.current?.resetAfterIndex(0);
    if (items.length === 0) {
      setShowGoToEnd(false);
    }
  }, [items]);

  const goToEndList = () => {
    listRef.current?.scrollToItem(items.length - 1, 'end');
  };

  useEffect(() => {
    goToEndList();
    const timeout = setTimeout(() => {
      goToEndList();
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

  const onItemsRendered = debounce((props: ListOnItemsRenderedProps | null) => {
    if (props) {
      listRef.current?.resetAfterIndex(0);
      if (props.visibleStopIndex === props.overscanStopIndex) {
        setShowGoToEnd(false);
      } else {
        setShowGoToEnd(true);
      }
    }
  }, 50);

  if (items.length === 0) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="droppable"
        mode="virtual"
        renderClone={(provided, snapshot, rubric) => (
          <ListItem
            provided={provided}
            isDragging={snapshot.isDragging}
            item={items[rubric.source.index]}
          />
        )}>
        {(provided, snapshot) => (
          <ListContainer isDragging={snapshot.isDraggingOver}>
            <VariableSizeList
              ref={listRef}
              itemData={items}
              itemCount={items.length}
              outerRef={provided.innerRef}
              itemSize={getSize}
              height={600}
              estimatedItemSize={142}
              onItemsRendered={onItemsRendered}
              width="100%">
              {ListRow}
            </VariableSizeList>
            <FadeContainer out={!showGoToEnd} duration={0.2}>
              <GoToEndButton onClick={goToEndList}>
                <FiArrowDown />
              </GoToEndButton>
            </FadeContainer>
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
