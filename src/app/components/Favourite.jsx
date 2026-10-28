"use client";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { addFavourite, removeFavourite } from "../action/actions";

const Favourite = ({ imageId, favouriteId: initialId = null }) => {
  const [favouriteId, setFavouriteId] = useState(initialId);
  const isFavourite = favouriteId !== null;

  const toggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavourite) {
      await removeFavourite(favouriteId);
      setFavouriteId(null);
    } else {
      const newId = await addFavourite(imageId);
      if (newId) setFavouriteId(newId);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isFavourite}
      aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <FiStar
        className={`h-10 w-10 rounded-full bg-white/30 p-2 text-white ${
          isFavourite ? "fill-white" : "fill-none"
        }`}
      />
    </button>
  );
};

export default Favourite;
