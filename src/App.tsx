import React from 'react';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
// import Slider from './components/Slider/Slider';
import MoviesSlider from './components/Slider/MoviesSlider';

function App() {
  return (
    <div className='font-display'>
     <Title />
     <Navbar />
     <MoviesSlider />
    </div>
  );
}

export default App;
