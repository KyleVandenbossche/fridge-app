import { useContext, useEffect, useState } from "react";
import { FridgeContext } from "../context/FridgeContextProvider";
import AuthContext from "../context/AuthContext";
import axios, { AxiosResponse } from "axios";

const FridgePage = () => {
  const { fridge, getFridge, removeFridgeItem, createFridge } =
    useContext(FridgeContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response: AxiosResponse = await axios.get(
          `https://us-central1-recipes-31990.cloudfunctions.net/api/fridge/${
            user!.uid
          }`
        );

        if (response.status === 200) {
          getFridge(user!.uid);
        } else if (response.status === 404) {
          // Call function for status 404
          createFridge(user!.uid);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, []);

  return (
    <div className="fridge-container">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2>Fridge</h2>
            {fridge.length === 0 ? (
              <div>Please Add Items to your Fridge</div>
            ) : (
              <ul className="fridge-ul">
                {fridge.map((ingredient: string, i: number) => (
                  <li className="fridge-li" key={i}>
                    <button onClick={() => removeFridgeItem(user!.uid, i)}>
                      {ingredient}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FridgePage;
function addtoFridgeMethod(fridgeContents: any) {
  throw new Error("Function not implemented.");
}
