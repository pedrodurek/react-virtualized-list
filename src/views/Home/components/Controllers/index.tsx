import React, { FC, useState, ChangeEvent } from 'react';
import TextField from 'components/base/TextField';
import { useListValue } from 'views/Home/hooks/useListValue';
import { loremIpsum } from 'lorem-ipsum';
import { Item } from 'views/Home/types';
import { RowContainer } from 'components/containers';
import { ActionButton } from './styles';

const Controllers: FC = () => {
  const [numItems, setNumItems] = useState<string>('');
  const { listIndex, resetList, addItems } = useListValue();

  const generateItems = () => {
    if (numItems) {
      const itemsGenerated = Array.from<unknown, Item>(
        { length: Number(numItems) },
        (_, index) => {
          const i = listIndex + index;
          return {
            id: `item-${i}`,
            title: `Item ${i}`,
            text: loremIpsum({ sentenceUpperBound: 30 }),
          };
        },
      );
      addItems(itemsGenerated);
      setNumItems('');
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumItems(event.target.value);
  };

  return (
    <RowContainer>
      <TextField
        placeholder="# of items"
        onChange={onChange}
        value={numItems}
      />
      <ActionButton onClick={generateItems}>Generate</ActionButton>
      <ActionButton onClick={resetList}>Reset</ActionButton>
    </RowContainer>
  );
};
export default Controllers;
