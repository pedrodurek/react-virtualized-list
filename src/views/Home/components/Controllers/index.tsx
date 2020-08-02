import React, { FC, useState, ChangeEvent } from 'react';
import TextField from 'components/base/TextField';
import { useListValue } from 'views/Home/hooks/useListValue';
import { MainContainer, ActionButton } from './styles';

type Props = {
  onGenerate: (numItems: number | null) => void;
  onReset: () => void;
};

const Controllers: FC<Props> = ({ onGenerate, onReset }) => {
  const [numItems, setNumItems] = useState<number | null>(null);
  const { clearSizes } = useListValue();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value) {
      setNumItems(Number(value));
    }
  };

  const onResetList = () => {
    clearSizes();
    onReset();
  };

  return (
    <MainContainer>
      <TextField placeholder="# of items" onChange={onChange} />
      <ActionButton onClick={() => onGenerate(numItems)}>Generate</ActionButton>
      <ActionButton onClick={onResetList}>Reset</ActionButton>
    </MainContainer>
  );
};
export default Controllers;
