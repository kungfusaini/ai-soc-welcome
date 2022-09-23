import React from 'react'
import './Feature.css'

function Feature(props){
    const latest= props.latest
    console.log(latest['link'])

    return (
        <div class="hor-center">
    <figure className='figure'>
    <img
  src={latest['link']}
  className='fig'
  width={400}
  height={400}
    />
</figure>
<figcaption className='figure-caption'>{latest['prompt']}</figcaption>
</div>)

}
   
   export default Feature
   
   

// async function getLatest(){
//     let response = await fetch('http://127.0.0.1:5000/getLatest', {
// }

