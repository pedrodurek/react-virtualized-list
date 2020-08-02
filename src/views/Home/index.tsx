import React, { FC, useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { MainContainer } from './styles';
import Controllers from './components/Controllers';
import List from './components/List';
import { Item } from './types';
import ListProvider from './contexts/ListProvider';

const Home: FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const onGenerate = (numItems: number | null) => {
    if (numItems) {
      const itemsGenerated = Array.from({ length: numItems }).map<Item>(
        (_item, index) => ({
          title: `Item ${Number(items.length + index)}`,
          text: loremIpsum({ sentenceUpperBound: 30 }),
        }),
      );
      setItems((prev) => [...prev, ...itemsGenerated]);
    }
  };

  return (
    <MainContainer>
      <ListProvider>
        <Controllers onGenerate={onGenerate} onReset={() => setItems([])} />
        <List items={items} />
      </ListProvider>
    </MainContainer>
  );
};

export default Home;
