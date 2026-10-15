import DetailFavourite from "@/app/components/DetailFavourite";
import BreedName from "@/app/components/BreedName";
import TagList from "@/app/components/TagList";
import BreedInfo from "@/app/components/BreedInfo";
import Nav from "@/app/components/Nav";

const dummyBreed = {
  name: "Affenpinscher",
  image: "/dummydog.jpg",
  thumbnail: "/dummydog.jpg",
  favourite: true,
  tags: [
    { label: "Confident", color: "blue" },
    { label: "Alert", color: "pink" },
    { label: "Playful", color: "green" },
    { label: "Loyal", color: "yellow" },
  ],
  description:
    "Small, sturdy toy breed with a distinctive monkey-like expression and shaggy, wiry coat. Known for its confident, terrier-like personality despite its small size.",
  history:
    "Originating in 17th-century Germany, bred down from larger terriers to be skilled ratters in homes, kitchens and stables. Refined in Munich and Berlin, recognized by AKC in 1936. Name translates to 'monkey-like terrier",
};

const DetailView = () => {
  return (
    <main className="pb-28">
      <DetailFavourite
        name={dummyBreed.name}
        image={dummyBreed.image}
        thumbnail={dummyBreed.thumbnail}
        favourite={dummyBreed.favourite}
      />
      <BreedName name={dummyBreed.name} />
      <TagList tags={dummyBreed.tags} />
      <BreedInfo
        description={dummyBreed.description}
        history={dummyBreed.history}
      />
      <Nav favourite />
    </main>
  );
};

export default DetailView;
