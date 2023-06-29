
import React from "react";
import logo from "./logo.svg";
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
import AuthContextProvider from "./context/AuthContextProvider";
import SignInForm from './SignInForm';


//
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header user={"Kyle"} />
        <IngredientNav />
        <SignInForm />
        {/* check if signed in true/false */}


        <Routes>
          <Route path="/proteins" element={<ProteinGrid />} />
          <Route path="/fruits" element={<FruitGrid />} />
          <Route path="/carbohydrates" element={<CarbGrid />} />
          <Route path="/vegetables" element={<VegetableGrid />} />
          <Route path="/seasonings" element={<SeasoningsGrid />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
