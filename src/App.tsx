import React from 'react';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import MoviesSlider from './components/Slider/MoviesSlider';
import Default from './layout/default/Default';

function App() {
  return (
    <Default>
      <MoviesSlider />
    </Default>
  );
}

export default App;
