import React from 'react'
import './Leftside.css'
import { GiShoppingCart } from "react-icons/gi";
import Category from './Category/Category'
import Colors from './Category/Colors/Colors';
import Price from './Price/Price'


function Leftside({handlechange}) {

  return <>

   <section className='sidebar'>
    <div className=' logo-container'>
       <h1><GiShoppingCart /></h1>
    </div>

   <Category handlechange={handlechange} />
   <Price handlechange={handlechange}/>
   <Colors handlechange={handlechange}/>
    
   </section>
  </>
}

export default Leftside