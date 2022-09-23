import banner from './static/banner.png';
import './App.css';
import React from 'react';
import Popup from './components/Popup';
import { useState, setState } from 'react';
import ImageView from './components/ImageView';
import Feature from './components/Feature';




function App() {
  const [img, setImages] = useState([]);
  generateImageTiles(img, setImages);
  const latest = getLatest();
  // const [latest, setLatest] = useState([]);
  // getLatest(latest, setLatest);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div>
        <DisplayBanner />
        <div class="vertical-center">
        <button class="button-28" onClick={()=>setButtonPopup(true)}openPopup>Try It Out!</button>
        </div>
        <br></br>

        <Feature latest={latest}/>
        <ImageView images={img}/>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        </Popup>
      </div>
      
      

  );
}

function DisplayBanner(){
  return <img src={banner} alt="banner" className="center"/>
}



async function generateImageTiles(img, updateImages){
  let response = await fetch('http://127.0.0.1:5000/getArt', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
    }
  });
  const art = await response.json();

  
  const images = [];

  for (var key in art) {
    images.push({
      src: art[key][0],
      width: 512,
      height: 512,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>{art[key][1]}</div>
        </div>
      )
    })
  }
 
if (img.length !== images.length ) {
  
  updateImages(images);
}
else{
  setTimeout(generateImageTiles, 10000, img, updateImages);
}
}

function getLatest(){
  const j = require('./latest.json');
  return j;
}





// async function SaveUser(email, first, last){
//   const response = await fetch('http://127.0.0.1:5000/healthcheck', {
//     method: 'POST',
//   });
// }

export default App;













