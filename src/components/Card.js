import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'

function Card({img,title,star,reviews,prevPrice,newPrice}) {
  return <section className='card'>
  <img src={img} alt={title} className='card-img'/>
  <div className='card-details'>
   <h3 className='card-tilte'>{title}</h3>
   <section className='card-reviews'>
     <AiFillStar className='rating-star'/> 
     <AiFillStar className='rating-star'/>
      <AiFillStar className='rating-star'/> 
     <AiFillStar className='rating-star'/>
     <span className='total-reviews'>{reviews}</span>
   </section>
  <section className='card-price'>
   <div className='price'>
    <del>{prevPrice}</del> {newPrice}
   </div>
   
   <div className='bag'>
      <BsFillBagFill className='bag-item'/>  
   </div>
    
  </section>

  </div>
 </section>

}

export default Card