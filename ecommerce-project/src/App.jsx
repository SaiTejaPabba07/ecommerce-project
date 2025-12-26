import axios from "axios";
import { Route, Routes } from 'react-router'
import { useEffect, useState } from "react";
import { HomePage } from './Pages/home/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/orders/OrdersPage'
import { TrackingPage } from './Pages/TrackingPage'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
   const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart-items?expand=product');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
  useEffect(() => {
   
    fetchCartItems();
    //    
    // axios.get('/api/cart-items?expand=product')
    //   .then((response) => setCartItems(response.data));
    //   console.log(cartItems);
  }, []);
  
  return (
    <Routes>
        <Route index element={<HomePage cartItems={cartItems} fetchCartItems={fetchCartItems} />}/>
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />}/>
        <Route path="/orders" element={<OrdersPage cartItems={cartItems} />}/>
        <Route path="/tracking" element={<TrackingPage />}/>
    </Routes>
  )
}

export default App
