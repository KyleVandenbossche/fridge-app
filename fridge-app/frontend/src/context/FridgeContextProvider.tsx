import React, { useEffect, useState, ReactNode, useContext } from "react";
import { FridgeContextType } from "./FridgeContextModel";
import AuthContext from "./AuthContext";
import Fridge from "../models/Fridge";

interface Props {
  children: ReactNode;
}

export const FridgeContext = React.createContext<FridgeContextType>({
  fridge: [],
  getFridge: (uid) => {},
  addFridgeItem: (ingredient) => {},
});

export function FridgeProvider({ children }: Props) {
  const { user } = useContext(AuthContext);
  const userID = user?.uid;
  const [fridge, addToFridge] = useState<string[]>([]);

  const getFridge = (userID: any) => {
    console.log(userID);
  };

  const addFridgeItem = (item: string) => {
    addToFridge([...fridge!, item]);
  };

  return (
    <FridgeContext.Provider value={{ fridge, getFridge, addFridgeItem }}>
      {children}
    </FridgeContext.Provider>
  );
}
