import styled from 'styled-components';
import { DraggableProvided } from 'react-beautiful-dnd';
import { CSSProperties } from 'react';

export const MainContainer = styled.li`
  box-sizing: border-box;
  list-style-type: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.dimens.spacing.medium}px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.dimens.radius.small}px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h3``;

export const CloseButton = styled.span``;

export const Text = styled.p``;

export const getItemStyle = (
  provided: DraggableProvided,
  style: CSSProperties,
  isDragging?: boolean,
) => {
  const combined = {
    ...style,
    ...provided.draggableProps.style,
  };

  const marginBottom = 12;
  const withSpacing = {
    ...combined,
    height: isDragging ? combined.height : combined.height ?? 0 - marginBottom,
    marginBottom,
  };
  return withSpacing;
};
