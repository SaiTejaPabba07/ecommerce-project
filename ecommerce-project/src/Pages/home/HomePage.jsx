// import './header.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";
export function HomePage({ cartItems }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
    // axios.get("http://localhost:3000/api/cart-items").then((response) => {
    //   setCartItems(response.data);
    // });
  }, []);
  return (
    <>
      <title>Ecommerce Project</title>
      <Header cartItems={cartItems} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
