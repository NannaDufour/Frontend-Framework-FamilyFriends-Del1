import { FiSearch } from "react-icons/fi";

const SearchIcon = () => {
  return (
    <button
      aria-label="Search"
      className="flex h-13 w-13 items-center justify-center rounded-full bg-red-300 rotate-none"
    >
      <FiSearch className="h-6 w-6 text-white rotate-100" />
    </button>
  );
};

export default SearchIcon;
