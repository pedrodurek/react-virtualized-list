import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import Button from 'components/base/Button';

export const ListContainer = styled.ul<{ isDragging: boolean }>(
  ({ theme: { dimens, colors }, isDragging }) => css`
    position: relative;
    width: 100%;
    max-width: 360px;
    margin: ${dimens.spacing.large2}px 0;
    background-color: ${isDragging
      ? hexToRgba(colors.primary, 0.3)
      : colors.lightGrey};
    box-shadow: 2px 2px 6px -2px ${hexToRgba(colors.black, 0.25)};
    padding: ${dimens.spacing.small2}px;
    border-radius: ${dimens.radius.small}px;
    li:not(:last-child) > * {
      margin-bottom: ${dimens.spacing.small}px;
    }
  `,
);

export const GoToEndButton = styled(Button)<{ showButton: boolean }>`
  opacity: ${({ showButton }) => (showButton ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  display: flex;
  padding: 9px 10px;
  bottom: 12px;
  right: 12px;
  font-size: x-large;
  border-radius: 50%;
`;
