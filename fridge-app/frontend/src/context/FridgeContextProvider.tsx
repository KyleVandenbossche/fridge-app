import React, { useState, ReactNode } from "react";
import { FridgeContextType } from "./FridgeContextModel";
import {
  createFridgeAPI,
  getFridgeAPI,
  updateFridgeAPI,
} from "../services/UserService";

interface Props {
  children: ReactNode;
}

export const FridgeContext = React.createContext<FridgeContextType>({
  fridge: [],
  getFridge: (uid) => {},
  addFridgeItem: (uid, ingredient) => {},
  removeFridgeItem: (uid, index) => {},
  createFridge: (uid) => {},
  addtoFridgeMethod: (fridge) => {},
});

export function FridgeProvider({ children }: Props) {
  const [fridge, addToFridge] = useState<string[]>([]);

  const getFridge = (userID: string) => {
    getFridgeAPI(userID).then((response) =>
      addToFridge(response.fridgeContents)
    );
  };

  const addFridgeItem = (userID: string, item: string) => {
    addToFridge([...fridge!, item]);
    console.log(fridge);
    console.log(userID);
    updateFridgeAPI(userID, fridge);
  };

  const removeFridgeItem = (userID: string, index: number) => {
    addToFridge(fridge.filter((_, i) => i !== index));
    updateFridgeAPI(userID, fridge);
  };

  const createFridge = (userID: string) => {
    createFridgeAPI(userID, []);
  };

  const addtoFridgeMethod = (fridge: string[]) => {
    addToFridge(fridge);
  };

  return (
    <FridgeContext.Provider
      value={{
        fridge,
        getFridge,
        addFridgeItem,
        removeFridgeItem,
        createFridge,
        addtoFridgeMethod,
      }}
    >
      {children}
    </FridgeContext.Provider>
  );
}
