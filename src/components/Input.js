import React from 'react'

function Input({handlechange,value,title,name,color}) {
  return <>

    <label className='sidebar-label-container'>
    <span className='checkmark' style={{backgroundColor:color}} ></span>{title}
      <input onChange={handlechange} type='radio' name={name} value={value}  />
      
      </label>



      </>
  
}

export default Input 