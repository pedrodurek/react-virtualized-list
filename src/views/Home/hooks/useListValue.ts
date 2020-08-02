import { useContext } from 'react';
import { ListContext } from '../contexts/ListProvider';

export const useListValue = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('useListValue must be used within a ListProvider');
  }

  return context;
};
