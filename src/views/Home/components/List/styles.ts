import styled from 'styled-components';

export const ListContainer = styled.ul`
  height: calc(100vh - 286px);
  padding: 0;
  width: 100%;
  max-width: 560px;
  overflow-y: auto;
  margin: ${({ theme }) => theme.dimens.spacing.large2}px 0;
  li:not(:last-child) > * {
    margin-bottom: ${({ theme }) => theme.dimens.spacing.medium}px;
  }
`;
