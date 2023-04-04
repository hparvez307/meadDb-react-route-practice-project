import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/components/home/Home'
import About from './components/about/About';
import Food from './components/food/Food';
import ErrorPage from './components/errorPage/ErrorPage';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'food',
        element: <Food></Food>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }





])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
