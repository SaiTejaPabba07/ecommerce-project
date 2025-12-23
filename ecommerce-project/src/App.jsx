import axios from "axios";
import { Route, Routes } from 'react-router'
import { useEffect, useState } from "react";
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { TrackingPage } from './Pages/TrackingPage'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => setCartItems(response.data));
  }, []);
  
  return (
    <Routes>
        <Route index element={<HomePage cartItems={cartItems} />}/>
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />}/>
        <Route path="/orders" element={<OrdersPage />}/>
        <Route path="/tracking" element={<TrackingPage />}/>
    </Routes>
  )
}

export default App
