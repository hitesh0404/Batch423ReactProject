import React, { useEffect, useState } from 'react'
import ShowProductList from './ShowProductList';


function ProductFilter() {
  // let [lth, setLTH] = useState(false);
  // let [htl, setHTL] = useState(false);
  // let [asce, setAsce] = useState(false);
  // let [desc, setDsce] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [filter, setFilter] = useState({ lth: false, htl: false, asce: false, dsce: false });
  useEffect(() => {
      setIsLoading(false);
  },[])
  if (isLoading) {
    return "loading"
  }
  return (
    <>
      <form action="">
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseFilter"
          role="button"
          aria-expanded="false"
          aria-controls="collapseFilter"
        >
          Filters
        </a>
        <div className="row">
          <div
            className="py-2 col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-3 bg-warning"
            id="collapseFilter"
          >
            <div className="col-12 ">
              <button type="submit" className="btn btn-primary m-2">
                Submit
              </button>
              <button type="reset" onClick={() => {
                setFilter({ lth: false, htl: false, asce: false, dsce: false });
              }} className="btn btn-primary m-2">
                Reset
              </button>
            </div>
            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  name="filter"
                  type="radio"
                  id="lowToHigh"
                  value="option1"
                  onClick={() => {
                    setFilter({ ...filter, lth: true, htl: false });
                  }}
                />
                <label className="form-check-label" htmlFor="lowToHigh">
                  Low to High
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  name="filter"
                  type="radio"
                  id="highToLow"
                  value="option2"
                  onClick={() => {
                    setFilter({ ...filter, lth: false, htl: true });
                  }}
                />
                <label className="form-check-label" htmlFor="highToLow">
                  High to Low
                </label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  name="filter"
                  type="radio"
                  id="ascending"
                  value="option1"
                  onClick={() => {
                    setFilter({ ...filter, asce: true, desc: false });
                  }}
                />
                <label className="form-check-label" htmlFor="ascending">
                  Ascending
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  name="filter"
                  type="radio"
                  id="descending"
                  value="option2"
                  onClick={() => {
                    setFilter({ ...filter, asce: false, desc: true });
                  }}
                />
                <label className="form-check-label" htmlFor="descending">
                  Descending
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            
            <ShowProductList link="https://fakestoreapi.com/products" filter ={filter} />
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductFilter