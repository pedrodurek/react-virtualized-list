import React, { memo, forwardRef } from 'react';
import { Item } from 'views/Home/types';
import { DraggableProvided } from 'react-beautiful-dnd';
import { ListChildComponentProps, areEqual } from 'react-window';
import {
  MainContainer,
  HeaderContent,
  Title,
  CloseButton,
  Text,
  ItemContainer,
  getItemStyle,
} from './styles';

type Props = Pick<ListChildComponentProps, 'style'> & {
  provided: DraggableProvided;
  item: Item;
  isDragging?: boolean;
  onRemove?: () => void;
};

const ListItem = forwardRef<HTMLDivElement, Props>(
  ({ provided, item, style, isDragging, onRemove }, ref) => (
    <MainContainer
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className={`item ${isDragging ? 'is-dragging' : ''}`}
      style={getItemStyle(provided, style, isDragging)}>
      <ItemContainer ref={ref}>
        <HeaderContent>
          <Title>{item.title}</Title>
          <CloseButton onClick={onRemove}>X</CloseButton>
        </HeaderContent>
        <Text>{item.text}</Text>
      </ItemContainer>
    </MainContainer>
  ),
);

export default memo(ListItem, areEqual);
