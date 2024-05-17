import React from 'react'
import "./Category.css"
import Input from '../../components/Input'

function Category({handlechange}) {
  return <div>
  <h2 className='sidebar-title'></h2>
  
  <div className='how'>
  <h4 className='categery'>Category</h4>
    
  </div>
  
  <label className='sidebar-label-container'>
    <input onChange={handlechange} type='radio' value='' name='test' />
    <span className='checkmark'></span>All
  </label>

   <Input handleChange={handlechange} value='sneakers' title='Sneakers' name='test'  />
   <Input handleChange={handlechange} value='flats' title='Flats' name='test'  />
   <Input handleChange={handlechange} value='sandals' title='Sandals' name='test'  />
   <Input handleChange={handlechange} value='heels' title='Heals' name='test'  />

  </div>
  
}

export default Category