import { Routes, Route } from "react-router-dom";
import React from "react";
import DisplayPokemon from './Pages/displayPokemon';
import PokemonDetails from './Pages/pokemonDetails';
import './App.css';

const App: React.FC = () => (
  <Routes>
    <Route  path='/' element={<DisplayPokemon />} />
    <Route  path="/:name" element={<PokemonDetails />} />
  </Routes>
);

export default App;
