import styled, { keyframes } from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const MainContainer = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinIcon = styled(FaReact)`
  color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 2s infinite linear;
  font-size: 150px;
`;
