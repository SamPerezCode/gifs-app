import { useState } from "react";
import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";

const GifsApp = () => {
  const [previousTerms, serPreviousTerms] = useState([
    " dragon ball z",
  ]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    console.log({ query });
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

      {/* Búsquedas Previas  */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};

export default GifsApp;
