// import './header.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";
export function HomePage({ cartItems }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomePageData = async () => {
      try {
        const productsResponse = await axios.get("/api/products");
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      } finally {
        // Any cleanup or final steps can go here
      } 
    };
    getHomePageData();
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
