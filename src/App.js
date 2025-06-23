import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import ShowProductList from './components/ShowProductList';
import Base from './components/Base';
import Routs from './components/Routs';
import { RouterProvider } from 'react-router-dom';
function App() {
  const router = Routs();
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App;