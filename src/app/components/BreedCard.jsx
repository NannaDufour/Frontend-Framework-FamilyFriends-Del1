import Image from "next/image";
import Link from "next/link";
import Textinfo from "./TextInfo";
import Favourite from "./Favourite";

const BreedCard = ({ id, name, country, image, favouriteID }) => {
  return (
    <article className="breed-card">
      <Link
        href={`/detailview/${id}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        <div className="relative">
          <Image
            loading="eager"
            src={image}
            width={400}
            height={400}
            alt={name}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />

          <div className="absolute top-3 right-3">
            <Favourite id={favouriteID} />
          </div>
        </div>
        <Textinfo breed={name} country={country} />
      </Link>
    </article>
  );
};

export default BreedCard;
