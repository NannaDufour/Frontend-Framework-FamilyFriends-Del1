import Image from "next/image";
import Link from "next/link";
import Textinfo from "./TextInfo";
import Favourite from "./Favourite";

const BreedCard = ({ id, name, country, image, imageId, favouriteId }) => {
  return (
    <article className="breed-card relative">
      <Link href={`/detailview/${id}`}>
        <Image
          loading="eager"
          src={image}
          width={400}
          height={400}
          alt={name}
          className="aspect-[4/3] w-full rounded-2xl object-cover"
        />
      </Link>
      <div className="absolute top-3 right-3 z-10">
        <Favourite imageId={imageId} favouriteId={favouriteId} />
      </div>
      <Textinfo breed={name} country={country} />
    </article>
  );
};

export default BreedCard;
