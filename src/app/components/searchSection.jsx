import SearchIcon from "./searchIcon";
import Searchbar from "./searchbar";
import Form from "next/form";

const SearchSection = () => {
  return (
    <Form className="mb-6 grid grid-cols-[auto_1fr] items-center gap-4">
      <SearchIcon />
      <Searchbar />
    </Form>
  );
};

export default SearchSection;
