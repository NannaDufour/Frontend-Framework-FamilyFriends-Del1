"use client";
import { FiStar } from "react-icons/fi";
import { addFavourite } from "../action/actions";

const Favourite = ({ id, breed }) => {
  return (
    <button>
      <FiStar
        className={`h-10 w-10 rounded-full bg-white/30 p-2 text-white`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addFavourite(id);
        }}
      />
    </button>
  );
};

export default Favourite;
