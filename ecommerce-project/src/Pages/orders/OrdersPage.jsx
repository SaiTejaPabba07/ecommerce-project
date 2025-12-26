import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./orderspage.css";
import { OrdersGrid } from "./OrdersGrid";
// import './header.css';
export function OrdersPage({ cartItems }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders?expand=products");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cartItems={cartItems} />
      {/* <div className="header">
        <div className="left-section">
          <a href="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </a>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <a className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </a>

          <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div> */}

      <OrdersGrid orders={orders} />
    </>
  );
}
