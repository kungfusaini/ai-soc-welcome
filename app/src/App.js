import banner from './static/banner.png';
import './App.css';
import React from 'react';
import Popup from './components/Popup';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div>
        <DisplayBanner />
        <button onClick={()=>setButtonPopup(true)}openPopup>Open Popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        </Popup>
      </div>
      

  );
}

function DisplayBanner(){
  return <img src={banner} alt="banner" class="center"/>
}






// async function SaveUser(email, first, last){
//   const response = await fetch('http://127.0.0.1:5000/healthcheck', {
//     method: 'POST',
//   });
// }

export default App;













