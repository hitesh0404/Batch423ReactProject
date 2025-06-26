import React, { useState } from 'react' ;
import ProductFilter from './ProductFilter' ;
import { useForm } from "react-hook-form" ;
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let [id, setId] = useState(1);
  let navigate = useNavigate();
  let  doSomething = (data) => {
      console.log(data);
  }
  {console.log(watch("fname"))}
  return (
    <>
      <div>LoginForm</div>
      <form method="get">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name=""
            id=""
            onChange={(e) => {
              setId(e.target.value);
              console.log(id);
            }}
            aria-describedby="helpId"
            placeholder=""
          />
          <small id="helpId" className="form-text text-muted">
            Help text
          </small>
          <input
            type="submit"
            value="ProductDetails"
            onClick={(e) => {
              e.preventDefault();
              console.log("here");
              (() => {
                navigate(`/product-details/${id}`);
              })();
            }}
          />
        </div>
      </form>
      <br />
      <hr />
      <form onSubmit={handleSubmit(doSomething)}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="fname"
            id=""
            aria-describedby="helpId"
            placeholder=""
            {...register("fname")}
          />
          <label htmlFor="" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="  "
            id=""
            aria-describedby="helpId"
            placeholder=""
            {...register("lname")}
          />
          <small id="helpId" className="form-text text-muted">
            Help text
          </small>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default LoginForm