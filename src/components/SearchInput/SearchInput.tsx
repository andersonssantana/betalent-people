import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchInput.css';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="search-input__container">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input__input"
        aria-label="Pesquisar"
      />
      <FaSearch className="search-input__icon" />
    </div>
  );
};

export default SearchInput;
