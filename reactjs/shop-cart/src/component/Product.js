import React, { useEffect, useState } from 'react'

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:4200/products");
  const getProduct=async ()=>
 {
   const response= await fetch(url);
   const data=await response.json();
   setProducts(data);
 } 

  useEffect((url) => {
    getProduct();

  }, [url]);


  return (
    <section>
      <button onClick={()=>setUrl('http://localhost:4200/products') }>All</button>
      <button onClick={()=>setUrl('http://localhost:4200/products?in_stock=true') }>In Stock</button>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
          </p>
        </div>
      ))}
    </section>
  )
}
