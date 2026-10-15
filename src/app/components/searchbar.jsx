const Searchbar = () => {
  return (
    <form className="flex items-center border border-gray-300 rounded-full h-13 ">
      <input
        type="text"
        placeholder="Search breeds"
        className="flex-grow p-6 outline-none text-gray-300"
      />
    </form>
  );
};

export default Searchbar;
