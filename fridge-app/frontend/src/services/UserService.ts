import axios from "axios";

export const getFridgeAPI = async (uid: string) => {
  const getResponse = await axios
    .get(
      `https://us-central1-recipes-31990.cloudfunctions.net/api/fridge/${uid}`
    )
    .then((response) => response.data);
  return getResponse;
};

export const updateFridgeAPI = async (uid: string, fridge: string[]) => {
  const putResponse = await axios
    .put(
      `https://us-central1-recipes-31990.cloudfunctions.net/api/fridge/${uid}`,
      {
        fridgeContents: fridge,
      }
    )
    .then((response) => response)
    .catch((err) => console.log(err));
  return putResponse;
};

export const createFridgeAPI = async (uid: string, fridge: string[]) => {
  const postresponse = await axios
    .post("https://us-central1-recipes-31990.cloudfunctions.net/api/fridge", {
      userId: uid,
      fridgeContents: fridge,
    })
    .then((response) => response)
    .catch((err) => console.log(err));
  return postresponse;
};
