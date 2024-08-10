import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './components/Cart'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './components/NotFound'
import Home from './components/Home'

import {store} from './store/store'
import { Provider } from 'react-redux'
import FlowerItem from './components/FlowerItem'

const main = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
      { path: "cart", element: <Cart /> },
      { path: 'flower/:id', element: <FlowerItem /> }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={main} />
  </Provider>
);
