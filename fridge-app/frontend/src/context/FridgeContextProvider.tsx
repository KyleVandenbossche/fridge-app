import React, { useEffect, useState, ReactNode } from "react";
import { FridgeContextType } from "./FridgeContextModel";
import Fridge from "../models/Fridge";

interface Props {
  children: ReactNode;
}

export const FridgeContext = React.createContext<FridgeContextType>({
  fridge: [""],
  getFridge: (fridge) => {},
  addFridgeItem: (ingredient) => {},
});
