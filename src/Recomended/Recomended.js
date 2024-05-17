import React from 'react'
import "./Recomended.css"
import Buttuns from '../components/Buttuns'

function Recomended({handleclick}) {
  return <>
  
  <div>
    <h2 className='recomend-title'>recomended</h2>
    <div className='recomend-flex'>
    <Buttuns onclickhandler={handleclick} value='' title='All Products'  />
    
    <Buttuns onclickhandler={handleclick} value='Nike' title='Nike'  />
    <Buttuns onclickhandler={handleclick} value='Adidas' title='Adidas'  />
    <Buttuns onclickhandler={handleclick} value='Puma' title='Puma'  />
    <Buttuns onclickhandler={handleclick} value='Vans' title='Vans'  />
    </div>
  </div>
  </>
 
}

export default Recomended