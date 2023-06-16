import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
// 
function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
    </div>
  );
}

export default App;
