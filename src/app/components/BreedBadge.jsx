import Image from "next/image";

const BreedBadge = ({ name, thumbnail }) => {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/30 p-2 pr-6 backdrop-blur-md">
      <Image
        className="h-12 w-12 shrink-0 rounded-xl object-cover"
        src={thumbnail}
        width={48}
        height={48}
        alt="photoOfDog"
      />
      <span className="min-w-0 text-lg text-white break-words">{name}</span>
    </div>
  );
};

export default BreedBadge;
