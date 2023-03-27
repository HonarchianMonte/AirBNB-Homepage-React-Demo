import React from 'react'
import './cards.css'

function Cards({src,title,description,price}) {
  return (
    <div className='card_container'>
      <img src={src} alt="cards"/>
        <div className='card_info'>  
          <h1>{title} </h1> 
          <p>{description}</p>
          <span>{price}</span>
        </div>
    </div>
  );
}

export default Cards