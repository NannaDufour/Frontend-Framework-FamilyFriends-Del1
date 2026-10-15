import { FiStar } from "react-icons/fi";

const Favourite = ({ active = false }) => {
  return (
    <button
      aria-label={active ? "Remove from favourites" : "Add to favourites"}
      aria-pressed={active}
      className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
    >
      <FiStar
        className={`h-10 w-10 rounded-full bg-white/30 p-2 text-white ${
          active ? "fill-white" : "fill-none"
        }`}
      />
    </button>
  );
};

export default Favourite;
