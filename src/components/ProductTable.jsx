import React from "react";
import ProductRow from '../components/ProductRow'; 

function ProductTable({ products }) {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (            
            <ProductRow product={product} />            
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
