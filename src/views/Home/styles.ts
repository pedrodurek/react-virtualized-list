import styled from 'styled-components';
import { ColContainer } from 'components/containers';

export const MainContainer = styled(ColContainer).attrs({ as: 'main' })`
  align-items: center;
  margin-top: ${({ theme }) => theme.dimens.spacing.large2}px;
`;
