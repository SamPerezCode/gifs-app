import { useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-container">
      <h1>{query}</h1>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button>Buscar</button>
    </div>
  );
};

export default SearchBar;
