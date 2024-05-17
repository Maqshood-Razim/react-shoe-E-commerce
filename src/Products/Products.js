import React from 'react'
import "./Products.css"
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import Card from '../components/Card'

function Products({result}) {
  return <>
  <section className='card-container'>
  {result}
  
  </section>
  
  </>
 
}

export default Products