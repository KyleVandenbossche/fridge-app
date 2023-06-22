import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProteinGrid from './components/Ingredients/ProteinGrid';
import FruitGrid from './components/Ingredients/FruitGrid';
import CarbGrid from './components/Ingredients/CarbGrid';
import SeasoningsGrid from './components/Ingredients/SeasoningsGrid';
import { IngredientNav } from './components/Ingredients/IngredientNav';


// 
function App() {
  return (
    <div className="App">
      <Header />

      <IngredientNav />

      <ProteinGrid />
      <FruitGrid />
      <CarbGrid />
      <SeasoningsGrid />

      
    </div>
  );
}

export default App;
