import BreedCard from "./components/BreedCard";
import SearchSection from "./components/searchSection";
import Nav from "./components/Nav";

const breeds = [
  {
    name: "Affenpinscher",
    country: "Northern, Germany",
    image: "/dummydog.jpg",
    favourite: true,
  },

  {
    name: "Airedale Terrier",
    country: "Yorkshire, England",
    image: "/dummydog.jpg",
  },
  {
    name: "Dachshund",
    country: "Germany",
    image: "/dummydog.jpg",
  },

  {
    name: "Afghan Hound",
    country: "Afghanistan",
    image: "/dummydog.jpg",
  },
  {
    name: "Akbash",
    country: "Western, Turkey",
    image: "/dummydog.jpg",
    favourite: true,
  },
  {
    name: "Akita",
    country: "Japan",
    image: "/dummydog.jpg",
  },
];

export default function ListView() {
  return (
    <main className="pb-28">
      <SearchSection />
      <div className="mt-6 columns-2 gap-4">
        {breeds.map((breed) => (
          <div key={breed.name} className="mb-4 break-inside-avoid">
            <BreedCard {...breed} />
          </div>
        ))}
      </div>
      <Nav home />
    </main>
  );
}

// Når man bruger links skal man ikke bruge a href, det skal være Link href, da det er en fordel, når brugeren hover hen over linket, så begynder det allerede at loade.
