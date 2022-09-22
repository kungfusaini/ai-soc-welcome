import banner from './static/banner.png';
import './App.css';
import React from 'react';
import Popup from './components/Popup';
import { useState, setState } from 'react';
import ImageView from './components/ImageView';



function App() {
  const [img, setImages] = useState([]);
  console.log("hey");
  generateImageTiles(img, setImages);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div>
        <DisplayBanner />
        <button onClick={()=>setButtonPopup(true)}openPopup>Open Popup</button>
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
      src: art[key],
      width: 1024,
      height: 1024,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>{key}</div>
        </div>
      )
    })
  }
  
// setTimeout(generateImageTiles, 1000, updateImages);
if (img.length != images.length ) {
  updateImages(images);
}
else{
  setTimeout(generateImageTiles, 1000, img, updateImages);
}
}

  
 



// async function SaveUser(email, first, last){
//   const response = await fetch('http://127.0.0.1:5000/healthcheck', {
//     method: 'POST',
//   });
// }

export default App;













