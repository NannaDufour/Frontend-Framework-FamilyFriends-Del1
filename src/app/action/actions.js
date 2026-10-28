"use server";

export const addFavourite = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    method: "POST",
    headers: {
      "x-api-key": process.env.API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  console.log("response", response);

  const favourite = await response.json();
  return favourite.id;
};

export async function removeFavourite(favouriteId) {
  const res = await fetch(
    `https://api.thedogapi.com/v1/favourites/${favouriteId}`,
    { method: "DELETE", headers: { "x-api-key": process.env.API_KEY } },
  );
  return res.ok;
}
