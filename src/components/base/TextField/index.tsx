import styled, { css } from 'styled-components';

const TextField = styled.input(
  ({ theme: { dimens, colors } }) => css`
    font-size: 16px;
    border: 1px solid ${colors.grey};
    padding: ${dimens.spacing.small2}px ${dimens.spacing.medium}px;
    border-radius: ${dimens.radius.small}px;
    outline: none;
  `,
);

export default TextField;
