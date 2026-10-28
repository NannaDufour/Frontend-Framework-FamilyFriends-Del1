import Image from "next/image";
import Favourite from "./Favourite";
import BackArrow from "./BackArrow";
import BreedBadge from "./BreedBadge";

const DetailFavourite = ({ name, image, thumbnail, imageId, favouriteId }) => {
  return (
    <div className="relative">
      <Image
        className="aspect-[4/5] w-full rounded-3xl object-cover object-[50%_20%]"
        src={image}
        width={400}
        height={500}
        alt={name}
      />
      <div className="absolute top-3 left-3">
        <BackArrow />
      </div>
      <div className="absolute top-3 right-3">
        <Favourite imageId={imageId} favouriteId={favouriteId} />
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <div className="w-fit max-w-full">
          <BreedBadge name={name} thumbnail={thumbnail} />
        </div>
      </div>
    </div>
  );
};

export default DetailFavourite;
