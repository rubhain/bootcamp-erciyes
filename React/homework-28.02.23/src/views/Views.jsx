import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import PrivateRoutes from '../utils/PrivateRoutes';
import AddCategory from './pages/AddCategory';
import { Button } from '@mui/material';


function Views() {
  return (<>
    <div className="w3-bar w3-border w3-light-grey">
        <span className="w3-bar-item w3-mobile"><Button  href='/' variant="outlined">Home</Button></span>
        <span className="w3-bar-item w3-mobile"><Button  href='/products' variant="outlined">Products</Button></span>
        <span className="w3-bar-item w3-mobile w3-right"><Button  href='/login' variant="contained">Login</Button></span>
    </div>
   
    <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/admin" element={<AddCategory/>}></Route>
        </Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
    </Routes>
  </>
  )
}

export default Views