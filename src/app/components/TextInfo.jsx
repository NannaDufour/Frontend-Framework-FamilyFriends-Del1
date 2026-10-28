const Textinfo = ({ breed, country }) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <h3 className="text-sm font-bold">{breed}</h3>
      <p className="text-xs text-gray-400  w-30">{country}</p>
    </div>
  );
};

export default Textinfo;
