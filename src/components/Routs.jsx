import { createBrowserRouter } from "react-router-dom";
import Base from './Base';
import ShowProductList from './ShowProductList';
import LoginForm from './LoginForm';
import NotFound404 from "./NotFound404";
import ProductDetails from "./ProductDetails";
import ProductFilter from "./ProductFilter";

function Routs() {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Base />
          <ShowProductList link="https://fakestoreapi.com/products" />
        </>
      ),
    },
    {
      path: "/form",
      element: (
        <>
          <Base />
          <LoginForm />
        </>
      ),
    },
    {
      path: "/product-details/:id",
      element: (
        <>
          <Base />
          <ProductDetails />
        </>
      ),
    },
    {
      path: "/filters",
      element: (
        <>
          <Base />
          <ProductFilter />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <Base />
          <NotFound404 />
        </>
      ),
    },
  ]);
}

export default Routs