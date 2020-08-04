import styled, { css } from 'styled-components';
import { DraggableProvided } from 'react-beautiful-dnd';
import { CSSProperties } from 'react';
import hexToRgba from 'hex-to-rgba';

export const MainContainer = styled.li`
  box-sizing: border-box;
  list-style-type: none;
`;

export const ItemContainer = styled.div<{ isDragging?: boolean }>(
  ({ theme: { dimens, colors }, isDragging }) => css`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
    padding: ${dimens.spacing.medium}px;
    box-shadow: 1px 1px 5px 0px
      ${hexToRgba(colors.black, isDragging ? 0.75 : 0)};
    border-radius: ${dimens.radius.small}px;
  `,
);

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  margin: ${({ theme }) => theme.dimens.spacing.small2}px 0;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  svg {
    font-size: x-large;
  }
`;

export const Text = styled.p``;

export const getItemStyle = (
  provided: DraggableProvided,
  style?: CSSProperties,
  _isDragging?: boolean,
) => {
  const combined = {
    ...style,
    // width: `calc(${style?.width} - 16px)`,
    ...provided.draggableProps.style,
  };

  // const marginBottom = 12;
  // const withSpacing = {
  //   ...combined,
  //   height: isDragging ? combined.height : combined.height - marginBottom,
  //   marginBottom,
  // };
  return combined;
};
