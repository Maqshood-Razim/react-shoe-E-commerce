import React from 'react'
import "./Price.css"
import Input from '../../components/Input'

function Price({handlechange}) {
  return <div className='ml'>
  <h4 className='price-tilte'>Price</h4>

  <label className='sidebar-label-container'>
    <input onChange={handlechange} type='radio' value='' name='test2' />
    <span className='checkmark'></span>All
  </label>
    
    <Input handlechange={handlechange} value={50} title='$0-$50' name='test2' />
    <Input handlechange={handlechange} value={100} title='$50-$100' name='test2' />
    <Input handlechange={handlechange} value={150} title='$100-$150' name='test2' />
    <Input handlechange={handlechange} value={200} title='over $150' name='test2' />

  </div>
    
  
}

export default Price