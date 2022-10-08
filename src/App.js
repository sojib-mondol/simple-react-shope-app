import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Oders from './components/Oders/Oders';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import { productsAndCardLoader } from './loaders/productsAndCardLoaders';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        
        {
          path: '/orders',
          loader: productsAndCardLoader,
          element: <Oders></Oders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        }
      ]

    },
    {
      path:'about',
      element: <About></About>
    }
  
  ])


  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
