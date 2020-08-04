import React, { memo, forwardRef, CSSProperties } from 'react';
import { Item } from 'views/Home/types';
import { DraggableProvided } from 'react-beautiful-dnd';
import { areEqual } from 'react-window';
import { GrFormClose } from 'react-icons/gr';
import {
  MainContainer,
  HeaderContent,
  Title,
  CloseButton,
  Text,
  ItemContainer,
  getItemStyle,
} from './styles';

type Props = {
  provided: DraggableProvided;
  item: Item;
  isDragging?: boolean;
  onRemove?: () => void;
  style?: CSSProperties;
};

const ListItem = forwardRef<HTMLDivElement, Props>(
  ({ provided, item, style, isDragging, onRemove }, ref) => (
    <MainContainer
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={getItemStyle(provided, style, isDragging)}>
      <ItemContainer isDragging={isDragging} ref={ref}>
        <HeaderContent>
          <Title>{item.title}</Title>
          <CloseButton onClick={onRemove}>
            <GrFormClose />
          </CloseButton>
        </HeaderContent>
        <Text>{item.text}</Text>
      </ItemContainer>
    </MainContainer>
  ),
);

export default memo(ListItem, areEqual);
