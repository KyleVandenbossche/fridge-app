import "./App.css";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProteinGrid from "./components/Ingredients/ProteinGrid";
import FruitGrid from "./components/Ingredients/FruitGrid";
import CarbGrid from "./components/Ingredients/CarbGrid";
import SeasoningsGrid from "./components/Ingredients/SeasoningsGrid";
import { IngredientNav } from "./components/Ingredients/IngredientNav";
import { Route, Router, Routes } from "react-router-dom";
import VegetableGrid from "./components/Ingredients/VegetableGrid";
import RecipePage from "./components/RecipePage";
import FridgePage from "./components/FridgePage";
import { useContext, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import { signInWithGoogle, signOut } from "./firebaseConfig";
import SignIn from "./components/SignIn";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      {user ? (
        <div>
          <Header />
          <IngredientNav />

          <Routes>
            <Route path="/" element={<FridgePage />} />
            <Route path="/proteins" element={<ProteinGrid />} />
            <Route path="/fruits" element={<FruitGrid />} />
            <Route path="/carbohydrates" element={<CarbGrid />} />
            <Route path="/vegetables" element={<VegetableGrid />} />
            <Route path="/seasonings" element={<SeasoningsGrid />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route path="/fridge" element={<FridgePage />} />
          </Routes>
        </div>
      ) : (
        <div>
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default App;
