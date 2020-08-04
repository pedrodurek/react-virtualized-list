import styled from 'styled-components';
import { ColContainer } from 'components/containers';

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.dimens.spacing.medium}px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled(ColContainer).attrs({ as: 'footer' })`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
