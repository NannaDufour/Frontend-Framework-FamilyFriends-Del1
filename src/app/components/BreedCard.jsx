import Image from "next/image";
import Link from "next/link";
import Textinfo from "./TextInfo";
import Favourite from "./Favourite";

const BreedCard = ({ name, country, image, favourite = false }) => {
  return (
    <article className="breed-card">
      <div className="relative">
        <Link
          href="/detailview"
          className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          <Image
            src={image}
            width={400}
            height={400}
            alt={name}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </Link>
        <div className="absolute top-3 right-3">
          <Favourite active={favourite} />
        </div>
      </div>
      <Textinfo breed={name} country={country} />
    </article>
  );
};

export default BreedCard;
