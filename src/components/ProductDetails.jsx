import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function ProductDetails() {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  let [isLoading, setIsLoading] = useState(true);
    async function getProduct() {
      setProduct(
        await fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => response.json())
          .then((data) => data)
          .catch((error) => {
            console.log(error);
          })
      );
  }
  useEffect(() => {
    setTimeout(() => {
      getProduct();
      if (product) {
        setIsLoading(false);
      }
    }, 2 * 1000);
  }, [])
  if (isLoading) {
    return (
      <>
        <div
          style={{ height: "100vh", width: "100vw" }}
          className=" spinner-border text-primary"
          role="status"
        >
          <span className="d-flex justify-content-center align-content-center sr-only">
            Loading...
          </span>
        </div>
      </>
    );    
  }
  
    return (
      <div>
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={product.image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text">{product.description}</p>
            <p className="card-title">{product.price}</p>
          </div>
        </div>
      </div>
    );
  
}

export default ProductDetails