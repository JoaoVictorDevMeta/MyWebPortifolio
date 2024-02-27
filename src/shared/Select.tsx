import { useContext } from 'react';
import Select from 'react-select';
import { FilterContext } from '../context/filterContext';

const options = [
    { value: 'all', label: 'Todos' },
    { value: 'favorite', label: 'Favoritos' },
];

export const Selector = () => {
  const { setFilter } = useContext(FilterContext);

  const handleSelectChange = (selectedOption: any) => {
    setFilter(selectedOption.value);
  };

  return (
    <Select 
      defaultValue={options[0]}
      options={options}
      onChange={handleSelectChange}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            primary: '#594671',
        }
        })}
        styles={{
            control: (provided) => ({
                ...provided,
                border: '1px solid black',
                width: '200px',
                background: 'none',
                cursor: 'pointer',
            }),
        }}
    />
  );
};