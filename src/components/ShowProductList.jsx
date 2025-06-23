import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function ShowProductList(props) {
    let navigate = useNavigate();
    let [products, setProducts] = useState([]);
    
    async function getProducts(link) {
        setProducts(
            await fetch(link)
                .then((response) => response.json())
                .then((data) => data)
                .catch((error) => {
                    console.log(error);
                })
      )
  }
 
  useEffect(() => {
    getProducts(props.link);
  },[])
    return (
      <div>
        {/* <button onClick={() => {
                                getProducts();
                        }}
        >
          Load Data
        </button> */}
        <div  className="row">
        {products.map((value,index) => {
          return (
            <div
              key={index}
              className="card text-start col-sm-12 col-md-6 col-xl-4 col-3"
            >
              <img
                className="card-img-top"
                height={100}
                width={100}
                src={value.image}
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">
                  {value.title.slice(0, 20) +
                    (value.title.length > 20 ? "..." : "")}
                </h4>
                <p className="card-text">
                  {value.description.slice(0, 50) +
                    (value.description.length > 51 ? "..." : "")}
                </p>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    navigate(`/product-details/${value.id}`);
                  }}
                >
                  Details
                </button>
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