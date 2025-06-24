import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function ShowProductList({
  link,
  filter = { lth: false, htl: false, asce: false, desc: false },
}) {
  let navigate = useNavigate();
  let [products, setProducts] = useState([]);
  let [filteredProducts, setFilteredProducts] = useState([]);
  async function getProducts(link) {
    setProducts(
      await fetch(link)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.log(error);
        })
    );
  }
  function applyFilters(filter) {
    if (filter.lth) {
      filter= { lth: true, htl: false, asce: false, desc: false };
      return setProducts(
        products.sort((a, b) => {
          return a.price - b.price;
        })
      );
    } else if (filter.htl) {
      filter = { lth: false, htl: true, asce: false, desc: false }
      return setProducts(
        products.sort((a, b) => {
          return b.price - a.price;
        })
      );
    }
    if (filter.asce) {
      filter = { lth: false, htl: false, asce: true, desc: false };
      return setProducts(
        products.sort((a, b) => {
          return a.title.localeCompare(b.title);
        })
      );
    } else if (filter.desc) {
      filter = { lth: false, htl: false, asce: false, desc: true };
       return setProducts(
        products.sort((a, b) => {
          return b.title.localeCompare(a.title);
        })
      );
    }
  }
  useEffect(() => {
    getProducts(link);
  }, []);
  useEffect(() => {
    applyFilters(filter);
  }, [products, filter]);
  return (
    <div>
      {/* <button onClick={() => {
                                getProducts();
                        }}
        >
          Load Data
        </button> */}
      <div className="row">
        {products.map((value, index) => {
          return (
            <div
              key={index}
              className="card text-start col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 "
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
                <h4 className="card-title">{value.price}</h4>
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
      </div>
    </div>
  );
}

export default ShowProductList;