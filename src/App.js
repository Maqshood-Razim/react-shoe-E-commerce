import React, { useState } from 'react';
import './App.css';
import Products from './Products/Products';
import Recomended from './Recomended/Recomended';
import Nav from './navigation/Nav';
import Leftside from './Sidebar/Leftside';
//database

import Product from './db/Database'
import Card from './components/Card';



function App() {

  const[selectcategory,setselectcategory]=useState(null)
  //input filter
  const [query,setquery]=useState("")
  const handleputchange=(event)=>{
    setquery(event.target.value)
  }

  const filtereditems = Product.filter(Product =>
    Product.title.toLowerCase().includes(query.toLowerCase())) 
  
  
  

  //Radio filer

  const handlechange=event=>{
    setselectcategory(event.target.value)
  }
  //buttun filter

  const handleclick=event=>{
    setselectcategory(event.target.value)
  }

  function filterdData(Product,selected,query){
     let filteredProducts=Product

     //filtering input items
     if(query){
      filteredProducts=filtereditems
     }

     //selected filter

     if(selected){
      filteredProducts=filteredProducts.filter(({category,color,newPrice,title,company})=>category===selected||color===selected||newPrice==selected
    ||title===selected||company===selected)
     }

     return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>
       <Card key={Math.random()} img={img} 
        title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}

        
       />
       


    )
  }
    
  const result= filterdData(Product,selectcategory,query)


  return (
    <>
      <Leftside handlechange={handlechange}/>
      <Nav  handleputchange={handleputchange} />
      <Recomended handleclick={handleclick} />
      <Products result={result} />
  
      
      </>
  );
}

export default App;
