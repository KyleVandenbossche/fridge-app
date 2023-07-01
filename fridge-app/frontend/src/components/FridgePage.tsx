import { useContext, useState } from "react";
import { FridgeContext } from "../context/FridgeContextProvider";

const FridgePage = () => {
  const { fridge, removeFridgeItem } = useContext(FridgeContext);
  return (
    <>
      <div className="fridgeContainer">
        <h2>Fridge</h2>
        {fridge.length === 0 ? (
          <div>Please Add Items to your Fridge</div>
        ) : (
          <ul>
            {fridge.map((ingredient: string, i: number) => (
              <li key={i}>
                <button onClick={() => removeFridgeItem(i)}>
                  {ingredient}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FridgePage;
