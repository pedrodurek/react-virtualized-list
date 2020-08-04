import styled, { css } from 'styled-components';
import hexToRgba from 'hex-to-rgba';

type Props = {
  variant: 'primary' | 'secondary';
};

const Button = styled.button(
  ({ theme: { dimens, colors } }) => css`
    font-size: 16px;
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: ${dimens.spacing.small}px ${dimens.spacing.small2}px;
    border-radius: ${dimens.radius.small}px;
    border: 0;
    cursor: pointer;
    outline: none;
    transition: all 0.15s ease-in-out;
    :hover {
      background-color: ${colors.primaryDarker};
    }
    :active:focus {
      box-shadow: 0 0 0 0.2rem ${hexToRgba(colors.primary, 0.5)};
    }
  `,
);

export default Button;
