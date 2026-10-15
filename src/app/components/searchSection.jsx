import SearchIcon from "./searchIcon";
import Searchbar from "./searchbar";

const SearchSection = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4 mb-6">
      <SearchIcon />
      <Searchbar />
    </div>
  );
};

export default SearchSection;
