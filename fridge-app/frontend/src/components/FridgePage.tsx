import { useContext, useState } from "react";
import { FridgeContext } from "../context/FridgeContextProvider";

const FridgePage = () => {
  const { fridge, removeFridgeItem } = useContext(FridgeContext);
  return (
    <div className="fridge-container">
    <div className="container">
        <div className="card">
                <div className="card-body">

        <h2>Fridge</h2>
        {fridge.length === 0 ? (
          <div>Please Add Items to your Fridge</div>
        ) : (
          <ul className='fridge-ul'>
            {fridge.map((ingredient: string, i: number) => (
              <li className='fridge-li' key={i}>
                <button onClick={() => removeFridgeItem(i)}>
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
