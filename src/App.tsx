import React from 'react';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
// import Slider from './components/Slider/Slider';
import MoviesSlider from './components/Slider/MoviesSlider';
import SeriesSlider from './components/Slider/SeriesSlider';
// import SliderHeader from './components/Slider/SliderHeader';

function App() {
  return (
    <div className='font-display'>
     <Title />
     <Navbar />
     {/* <SliderHeader /> */}
     <MoviesSlider />
     <SeriesSlider />
    </div>
  );
}

export default App;
