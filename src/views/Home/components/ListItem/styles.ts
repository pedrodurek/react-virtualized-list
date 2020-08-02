import styled from 'styled-components';

export const MainContainer = styled.li`
  box-sizing: border-box;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.dimens.spacing.medium}px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.dimens.radius.small}px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h3``;

export const CloseButton = styled.span``;

export const Text = styled.p``;
