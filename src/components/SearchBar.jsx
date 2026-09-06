import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch, isLoading }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub username, e.g. torvalds"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}
