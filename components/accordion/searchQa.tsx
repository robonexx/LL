// SearchInput.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchQa: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <div className='w-full rounded-xl font-heading font-bold flex items-center justify-center'>
      <input
        className='w-full h-full px-8 py-3 rounded-md shadow-[inset_0_0_0_2px_#005A9C]'
        type='text'
        value={query}
        onChange={handleInputChange}
      />
      <button className='h-full px-4' onClick={handleSearch}>
        <Icon icon='lucide:search' width='24' height='24' />
      </button>
    </div>
  );
};

export default SearchQa;
