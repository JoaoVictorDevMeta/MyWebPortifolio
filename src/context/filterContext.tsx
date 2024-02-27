import { createContext } from 'react';

export const FilterContext = createContext({
  filter: 'all',
  setFilter: (filter: string) => {},
});