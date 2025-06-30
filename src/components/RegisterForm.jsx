import React, { useEffect, useState, version } from 'react'
import  './styles/register.css';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const checkAndLog = (data) => {
    console.log(data);
  }

  let [ErrorMSG, setErrorMsg] = useState("hello");

  
  function verifyPassword() {
    const currentPassword = watch("password");
    if (currentPassword.length === 0) {
      setErrorMsg("");
    } else if (currentPassword.length < 8) {
      setErrorMsg("Password must be at least 8 characters long");
    } else if (!/[a-z]/.test(currentPassword)) {
      setErrorMsg("Password must contain a lowercase character");
    } else if (!/[A-Z]/.test(currentPassword)) {
      setErrorMsg("Password must contain an uppercase character");
    } else if (!/[0-9]/.test(currentPassword)) {
      setErrorMsg("Password must contain a number");
    } else if (!/[!@#$%^&*]/.test(currentPassword)) {
      setErrorMsg("Password must contain a special character");
    } else {
      setErrorMsg(""); // Password is valid
    }
    if (ErrorMSG.length === 0) {
      delete errors.password
    }
    else {
       errors.password ="error"
    }
  }
  useEffect(() => {
    verifyPassword()
  }, [watch('password'), ErrorMSG]);

  return (
    <div>
      <div id="form">
        <form action="" onSubmit={handleSubmit(checkAndLog)}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="fname"
              aria-describedby="helpId"
              placeholder="FirstName"
              {...register("firstname", {
                required: "First Name is Required",
                minLength: {
                  message:
                    "Min length of the first name should be greater then 3",
                  value: 3,
                },
              })}
            />
            <small id="helpId" className="form-text  text-danger">
              {errors.firstname && errors.firstname.message}
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="lname"
              aria-describedby="helpId"
              placeholder="LastName"
              {...register("lastname")}
            />
            <small id="helpId" className="form-text text-muted">
              Help text
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelpId"
              placeholder="abc@mail.com"
              {...register("email")}
            />
            <small id="emailHelpId" className="form-text text-muted">
              Help text
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password1"
              placeholder="Password"
              
              {...register("password", {required : "this field is required"})}
            />
            <small id="helpId" className="form-text  text-danger">
              {ErrorMSG}
              {errors.password && errors.password.message}
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="confirmpassword"
              id="password2"
              placeholder="Confirm Password"
              {...register("confirmpassword")}
            />
          </div>
          <div
            className="d-grid"
            style={{ justifySelf: "center", width: "100%" }}
          >
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm