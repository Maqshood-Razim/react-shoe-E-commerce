import React from 'react'
import "./Colors.css"
import Input from '../../../components/Input'

function Colors({handlechange}) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      
      <label className='sidebar-label-container'>
    <input onChange={handlechange} type='radio' value='' name='test2' />
    <span className='checkmark all' ></span>All
  </label>

   <Input handlechange={handlechange} value='black' title='Black' name='test1' color='black' />
   <Input handlechange={handlechange} value='blue' title='Blue' name='test1' color='blue' />
   <Input handlechange={handlechange} value='red' title='Red' name='test1' color='red' />
   <Input handlechange={handlechange} value='green' title='Green' name='test1' color='green' />
   <label className='sidebar-label-container'>
    <input onChange={handlechange} type='radio' value='white' name='test1' />
   <span className='checkmark' style={{background:"white", border:"2px solid black", color:"black"}}></span>White

 </label>
    </div>
  )
}

export default Colors