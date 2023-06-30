export interface FridgeContextType {
  fridge: string[];
  getFridge: (uid: string) => void;
  addFridgeItem: (ingredient: string) => void;
}
