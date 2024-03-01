import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { data } from '../db/ProductDB'
import DetailCard from '../components/DetailCard'


const DetailPage = () => {
    const { productId } = useParams()
    // console.log(`Product ${productId} clicked`);
    // console.log(data);

    // Go into the database and find the product with the id === productId
    const blard = data.find((p)=> p.id === parseInt(productId));

// console.log(product);
  return (
    <div>
        <h1>Detail Page</h1>
        <div className="">
            <h3>Product {productId} clicked</h3>
            {/* <ProductCard product={blard}/> */}
            <DetailCard product={blard}/>
        </div>
        
    </div>
  )
}

export default DetailPage