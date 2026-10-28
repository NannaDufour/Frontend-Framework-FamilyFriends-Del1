import BreedCard from "./BreedCard";

const BreedList = async ({ searchParams }) => {
  const { query } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds?limit=20&page=0";
  const options = {
    headers: { "x-api-key": process.env.API_KEY },
    cache: "no-store",
  };

  const [breedsResponse, favouritesResponse] = await Promise.all([
    fetch(url, options),
    fetch("https://api.thedogapi.com/v1/favourites", options),
  ]);

  const [breeds, favouritesData] = await Promise.all([
    breedsResponse.json(),
    favouritesResponse.json(),
  ]);

  const favourites = Array.isArray(favouritesData) ? favouritesData : [];

  const findFavouriteId = (imageId) =>
    favourites.find((f) => f.image_id === imageId)?.id ?? null;

  return (
    <div className="mt-6 columns-2 gap-4">
      {breeds.map((breed) => (
        <div key={breed.id} className="mb-4 break-inside-avoid">
          <BreedCard
            id={breed.id}
            name={breed.name}
            country={breed.origin}
            image={breed.image?.url}
            imageId={breed.image?.id}
            favouriteId={findFavouriteId(breed.image?.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default BreedList;
