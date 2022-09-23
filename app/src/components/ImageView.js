import React from 'react'
import {Gallery} from 'react-grid-gallery';
import './ImageView.css';


function ImageView(props){
 return <Gallery images={props.images}/>;
}

export default ImageView






