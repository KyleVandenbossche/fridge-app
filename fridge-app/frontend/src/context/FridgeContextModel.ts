export interface FridgeContextType {
  fridge: string[];
  getFridge: (uid: string) => void;
  addFridgeItem: (uid: string, ingredient: string) => void;
  removeFridgeItem: (uid: string, index: number) => void;
  createFridge: (uid: string) => void;
  addtoFridgeMethod: (fridge: string[]) => void;
}
