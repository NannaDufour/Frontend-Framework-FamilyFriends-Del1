import BreedCard from "./BreedCard";

const BreedList = async ({ searchParams }) => {
  const { query } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds?limit=20&page=0";

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const data = await response.json();

  return (
    <div className="mt-6 columns-2 gap-4">
      {data.map((breed) => (
        <div key={breed.id} className="mb-4 break-inside-avoid">
          <BreedCard
            id={breed.id}
            name={breed.name}
            country={breed.origin}
            image={breed.image?.url ?? "/dummydog.jpg"}
            favouriteID={breed.image.id}
          />
        </div>
      ))}
    </div>
  );
};

export default BreedList;
