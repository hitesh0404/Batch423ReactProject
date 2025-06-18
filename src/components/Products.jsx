import React, { useState } from 'react'

function Products() {
  let [allData, setAllData] = useState([]);
  let [count,setCount] = useState(0);
    async function loadData(){
      setAllData(
        await fetch("http://127.0.0.1:5500/FinalProject/MOCK_DATA.json")
          .then((response) => response.json())
          .then((data) => data)
      );
    }
    return (
      <>
        <>
          <div className="row">
            <div className="d-grid gap-2 col-12">
              <button
                type="button"
                name=""
                id="countPlus"
                className="btn btn-primary"
                onClick={() => {
                  setCount((count) => count + 1);
                  setCount((count) => count + 1);
                }}
              >
                Counter Plus
              </button>
            </div>

            <div className="col-12  d-flex justify-content-center">
              <div>
                {count}
                {count}
                {count}
                {count}
              </div>
            </div>

            <div className="d-grid gap-2 col-12">
              <button
                type="button"
                name=""
                id="countMinus"
                className="btn btn-primary"
                onClick={() => {
                  setCount(() => count - 1);
                  setCount(() => count - 1);
                }}
              >
                Counter Minus
              </button>
            </div>
          </div>
        </>
        <button
          onClick={() => {
            loadData();
          }}
        >
          Load Data
        </button>
        {allData.map((value, index) => {
          return (
            <div key={index}>
              <p>{index}</p>
              <p>{value.id}</p>
              <p>{value.first_name}</p>
            </div>
          );
        })}
      </>
    );
}

export default Products;