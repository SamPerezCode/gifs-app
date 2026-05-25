import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  // Se ejecuta cuando el componente se monta
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]); // Al montar o cuando cambie query y onQuery

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;

/*
useEffect
Para Ejecuta efectos secundarios y
limpieza al desmontar el
componente.

Lo usaremos cada que el query se dispare cada que escribamos en el input
en este caso crearemos un Debounce: Qeu se dispare el query cuando la persona deje de escribir después de cierto tiempo
*/
