import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

type Props = {
  out: boolean;
  duration?: number;
};

const Fade = styled.div<Props>(
  ({ out, duration }) => css`
    display: inline-block;
    visibility: ${out ? 'hidden' : 'visible'};
    animation: ${out ? fadeOut : fadeIn} ${duration ?? 1}s linear;
  `,
);

export default Fade;
