import React, { FC, useRef, useEffect } from 'react';
import { Item } from 'views/Home/types';
import { ListChildComponentProps } from 'react-window';
import { useListValue } from 'views/Home/hooks/useListValue';
import {
  MainContainer,
  HeaderContent,
  Title,
  CloseButton,
  Text,
  ItemContainer,
} from './styles';

type DataProps = Item & {
  onClose: () => void;
};

type Props = Omit<ListChildComponentProps, 'data'> & {
  data: DataProps[];
};

const ListItem: FC<Props> = ({ data, index, isScrolling, style }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { setSize } = useListValue();

  useEffect(() => {
    if (itemRef.current) {
      setSize(index, itemRef.current.getBoundingClientRect().height + 12);
    }
  }, []);

  return (
    <MainContainer style={style}>
      <ItemContainer ref={itemRef}>
        {isScrolling ? (
          <span>Scrolling</span>
        ) : (
          <>
            <HeaderContent>
              <Title>{data[index].title}</Title>
              <CloseButton>X</CloseButton>
            </HeaderContent>
            <Text>{data[index].text}</Text>
          </>
        )}
      </ItemContainer>
    </MainContainer>
  );
};

export default ListItem;
