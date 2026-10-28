import DetailFavourite from "@/app/components/DetailFavourite";
import BreedName from "@/app/components/BreedName";
import TagList from "@/app/components/TagList";
import BreedInfo from "@/app/components/BreedInfo";
import Nav from "@/app/components/Nav";
import { Suspense } from "react";

const DetailView = ({ params }) => {
  return (
    <main className="pb-28">
      <Suspense fallback={<div>Loading...</div>}>
        <FetchDetailData params={params} />
      </Suspense>

      <Nav favourite />
    </main>
  );
};

export default DetailView;
async function FetchDetailData({ params }) {
  const { id } = await params;
  const options = {
    headers: { "x-api-key": process.env.API_KEY },
  };

  const [response, favouritesResponse] = await Promise.all([
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`, options),
    fetch("https://api.thedogapi.com/v1/favourites", options),
  ]);

  const data = await response.json();
  const favouritesData = await favouritesResponse.json();
  const favourites = Array.isArray(favouritesData) ? favouritesData : [];

  const imageUrl = data.image?.url ?? "/dummydog.jpg";
  const imageId = data.reference_image_id ?? data.image?.id;
  const favouriteId =
    favourites.find((f) => f.image_id === imageId)?.id ?? null;

  const words = data.temperament ? data.temperament.split(", ") : [];
  const colors = ["blue", "pink", "green", "yellow"];
  const tags = words.slice(0, 8).map((word, index) => ({
    label: word,
    color: colors[index % colors.length],
  }));

  return (
    <>
      <DetailFavourite
        name={data.name}
        image={imageUrl}
        thumbnail={imageUrl}
        imageId={imageId}
        favouriteId={favouriteId}
      />
      <BreedName name={data.name} />
      <TagList tags={tags} />
      <BreedInfo description={data.description} history={data.history} />
    </>
  );
}
