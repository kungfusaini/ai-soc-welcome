import banner from './static/banner.png';
import './App.css';
import React from 'react';
import Image from 'react-image-resizer';

function App() {
  return (
      <div>
        <DisplayBanner />
      </div>
      

  );
}

function DisplayBanner(){
  return <img src={banner} alt="banner" class="center"/>
}

export default App;













