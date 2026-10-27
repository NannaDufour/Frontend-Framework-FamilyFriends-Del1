const Textinfo = ({ breed, country }) => {
  return (
    <div className="p-4">
      <h3 className="text-sm font-bold">{breed}</h3>
      <p className="text-xs text-gray-400  w-30">{country}</p>
    </div>
  );
};

export default Textinfo;
