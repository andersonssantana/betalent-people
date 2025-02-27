import { FaSearch } from 'react-icons/fa';
import './SearchInput.css';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className="search-input__container">
      <input
        type="text"
        name="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        className="search-input__input"
      />
      <FaSearch className="search-input__icon" />
    </div>
  );
}

export default SearchInput;
