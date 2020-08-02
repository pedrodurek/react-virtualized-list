import styled from 'styled-components';
import Button from 'components/base/Button';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ActionButton = styled(Button)`
  margin-left: ${({ theme }) => theme.dimens.spacing.small2}px;
`;
