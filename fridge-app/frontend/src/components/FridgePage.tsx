import { useContext, useEffect, useState } from "react";
import { FridgeContext } from "../context/FridgeContextProvider";
import AuthContext from "../context/AuthContext";

const FridgePage = () => {
  const { fridge, removeFridgeItem } = useContext(FridgeContext);
  const { user } = useContext(AuthContext);

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
