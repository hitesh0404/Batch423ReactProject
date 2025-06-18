import React, { useState } from 'react'

function ShowProductList() {

    let [products, setProducts] = useState([]);
    
    async function getProducts() {
        setProducts(
            await fetch("https://fakestoreapi.com/products")
                .then((response) => response.json())
                .then((data) => data)
                .catch((error) => {
                    console.log(error);
                })
        )
    }
    return (
      <div>
        <button onClick={() => {
                                getProducts();
                        }}
        >
          Load Data
        </button>
            
        <div  className="row">
        {products.map((value,index) => {
          return (
            <div
              key={index}
              className="card text-start col-sm-12 col-md-6 col-xl-4 col-3"
            >
              <img className="card-img-top" height={100} width={100} src={value.image} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">{value.title}</h4>
                <p className="card-text">{value.description}</p>
              </div>
            </div>
          );
        })}
                {console.log(products)}
        </div>
      </div>
    );
}

export default ShowProductList;