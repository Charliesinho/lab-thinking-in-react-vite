import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable';

function ProductsPage ({productsData}) {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("")
  const [checkState, setCheckState] = useState(false)

  console.log(checkState)       

  
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setSearchTerm={setSearchTerm} setCheckState={setCheckState} checkState={checkState}/>
        <ProductTable products={products.filter(item => item.name.includes(searchTerm)).filter((item) => checkState ? item.inStock : item )} />
      </div>    
  )
}

export default ProductsPage