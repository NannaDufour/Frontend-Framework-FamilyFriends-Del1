"use server";

export const addFavourite = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    method: "POST",
    headers: {
      "x-api-key": process.env.API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image_id: `${id}`,
    }),
  });

  console.log("response", response);

  const favourite = response.json();
};
